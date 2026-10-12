---
layout: post
title: "Reserve the item slot before loading a PixiJS rarity reveal"
description: "A working inventory fixture that keeps its card geometry fixed through loading, failed assets, retries, and two bounded reveal effects."
date: 2026-10-12
---

An inventory reveal has two different jobs: identify the item, and celebrate its rarity. Neither job should move the next card while a texture downloads. The awkward case is not the perfect screenshot with everything already cached. It is a slow response, a failed asset, or a retry that finishes before an older request.

I built a small, reproducible fixture around those cases: two inventory cards, one shared crystal texture, and separate rare and epic particle bursts. This is an agent-generated technical example, not a capture from a production game. The [working inventory demo](https://almastparuyryan.github.io/day-08-rarity.html) and [complete source archive](https://almastparuyryan.github.io/day-08-rarity-source.zip) accompany the measurements below.

## Make space before asking for the texture

The HTML creates both cards immediately. Each card has a 306-pixel height, a 128-by-128 artwork slot, a native reveal button, and a separate status line. The PixiJS canvas is absolutely positioned over the inventory area and does not participate in the document's layout. Loading text occupies the existing artwork slot; it does not add a new row.

On desktop, the cards sit next to each other. At the mobile breakpoint, they stack. Those are intentional responsive layouts, not changes triggered by the asset. The slot remains the same size in both arrangements, while the loaded sprite is explicitly set to 96 by 96 pixels.

The effect layer and item layer are siblings in the PixiJS stage. Adding or removing particles changes the effect layer, never the dimensions of a card. Native buttons stay above the canvas, and the canvas ignores pointer events. An unavailable texture disables Reveal, but leaves Load items available for retry.

## Treat every load as a new generation

The fixture pins PixiJS 8.19.0 and nixie-fx 0.1.17. It awaits application initialization, loads the exported effects with the `pixi2d` backend requirement, and then uses `Assets.load` for the item artwork. The following shortened version shows the important loading contract; the archive contains initialization, measurements, and disposal as well.

```js
let generation = 0;
let disposed = false;

async function loadItems(url) {
  const token = ++generation;
  clearEffects();
  setCardState('Asset loading', false);
  for (const sprite of sprites.values()) sprite.visible = false;

  try {
    const texture = await Assets.load(url);
    if (disposed || token !== generation) return;

    for (const sprite of sprites.values()) {
      sprite.texture = texture;
      sprite.width = 96;
      sprite.height = 96;
      sprite.visible = true;
    }
    setCardState('Asset ready', true);
  } catch (error) {
    if (disposed || token !== generation) return;
    setCardState('Asset unavailable', false);
  }
}
```

A generation guard does not cancel a download. It prevents a superseded completion from changing the current scene. The demo's 900 ms delay is an artificial delay after loading, specifically for making this ordering test reproducible. It is not a claim about network speed.

The Missing asset switch requests an intentionally absent file. After that failure, unchecking the switch and selecting Load items restores the shared texture. In the ordering test, an older delayed completion was ignored once, while the newer successful attempt kept both cards ready.

## Align the effect with the reserved slot

The slot's center is measured relative to the canvas container, in CSS pixels. The fixture uses one pixel per effect unit and a downward Y axis. Sprite positions and effect anchors use the same center. Device resolution is handled by the PixiJS application rather than multiplied into these coordinates a second time.

For the authoring and runtime setup, the [NixieFX tutorial](https://nixiefx.com/pixijs-particle-effects/) is the contextual starting point. This recipe exports two non-looping effects: 12 rare particles and 20 epic particles, with a capacity of 24 for each instance. Each uses a small box emitter, a 0.75-second lifetime, and a fade over life. Repeatedly revealing one card replaces its existing instance instead of accumulating bursts indefinitely.

These are ordinary two-dimensional billboards. No custom material or provider, trails, lights, or three-dimensional occlusion are authored or validated here. A 3D depth or lighting setup is not a supported setting of this specific PixiJS inventory fixture; it would require a different renderer and test. That limitation should not be mistaken for a claim that the entire NixieFX package lacks those features.

## Measure loading and reveal states separately

At a 1280-by-1000 viewport, each desktop card measured 386 by 306 pixels. At 390 by 1000, each stacked card measured 362 by 306 pixels, and the page's scroll width was also 390. Within each viewport, the measured maximum change in card position, card dimensions, and slot geometry stayed at zero through loading, successful resolution, reveal, and failed loading. Sprite-center error against the slot center also measured zero.

The comparison includes document-space card positions, not just positions relative to the inventory container. It resets its baseline after an intentional container-size change. These observations are a fixture-level geometry check, not a browser-wide cumulative-layout-shift score or a frame-time benchmark.

![Desktop inventory with both reveal effects paused](https://almastparuyryan.github.io/day-08-rarity-desktop.jpg)

For inspectable evidence, I paused the simulation just after revealing both items. Runtime counters showed 32 active and visible particles across two effects, with a combined capacity of 48. The authored effects reported no missing resources or unsupported modules. The screenshot is deliberately paused mid-burst, not evidence of sustained particle throughput.

![Mobile inventory with fixed artwork slots](https://almastparuyryan.github.io/day-08-rarity-mobile.jpg)

## Keep the static result when motion is unavailable

The reveal action also works without particles. An operating-system reduced-motion preference or the manual Reduced motion switch suppresses new bursts and clears existing ones. The native button still changes the card's state to Revealed (static), and the texture remains visible. The reduced-motion check recorded zero effects and zero particles.

Teardown invalidates the loading generation, removes the ticker and motion listener, destroys the effect renderer and canvas, then waits for pending asset requests before unloading this fixture's owned texture. A disposal-during-load check recorded no remaining canvas and completed cleanup. A later delayed completion was ignored rather than writing into the destroyed scene.

The useful acceptance test is therefore broader than “the sparkles look right”: reserve the slot first, gate Reveal on a valid asset, ignore obsolete completions, compare geometry before and after, and preserve a readable static result. That contract makes the celebration optional while keeping the inventory dependable.
