---
layout: post
title: "Keep a crafting spark in the inventory slot's coordinate system"
description: "A reproducible PixiJS one-shot with explicit event policy, bounded particles, and teardown."
date: 2026-10-17 10:00:00 +0400
---

Disclosure: AI generated this engineering note for NixieFX's marketing work. The image and counts come from a synthetic fixture, not a production inventory screen.

A crafting spark has two positions: the point where the effect was authored and the place where the inventory slot exists when confirmation arrives. Confusing them produces a familiar integration bug. The particle effect looks correct in its preview but plays beside the slot after the interface moves.

The accompanying PixiJS fixture uses one slot at a known coordinate so that the lifecycle and placement can be inspected without a full inventory system. The implementation lesson is to define the owning layer and the event policy before adding more particles.

## Choose the layer that owns the effect

This demo creates a `PixiVfxRenderer` parented to `app.stage`. The slot and the effect therefore use the same stage coordinates. A production interface may put the inventory inside a translated or scaled container. In that case, parent the effect renderer to the same container or convert the slot's anchor into the effect parent's local coordinates.

Do not pass a global position to a local parent and hope the values happen to match. Test the interface after scrolling, scaling, and moving the panel. Also define whether an already-emitted particle should move with the panel. That is an art and interaction choice, not just a numerical offset.

## Reproduce the small fixture

The source archive pins `nixie-fx` 0.1.17, PixiJS 8.19.0, Three.js 0.185.1, and Vite 8.3.1. Install dependencies, run `node prepare-effects.mjs`, and start `npm run dev`. Select crafting mode in the demo navigation.

The authoring project is included under `vfx-project`. The prepare script validates and exports it, then copies the runtime bundle under `public/vfx`. The game code loads the exported manifest and compiled effect JSON through `loadVfxExportBundle`; it does not pretend the authoring file is a runtime export.

When choosing a [visual particle editor for PixiJS](https://nixiefx.com/pixijs-particle-effects/), this export boundary is useful to test early. A recipe is easier to maintain when its authored source and generated runtime input are both identifiable.

## Make the one-shot policy explicit

The `craft` effect has one burst of 18 particles, a 0.45-second particle lifetime, no loop, and a maximum of 18 active particles. It uses local simulation space. Its shape and warm colors are procedural; no external texture provider is needed for this fixture.

```js
const vfx = new PixiVfxRenderer({ parent: inventoryLayer });
const spark = vfx.createEffect(bundle.effectsById.get('craft'), {
  position: [slot.x, slot.y - slotHeight / 2, 0],
  seed: 131,
  autoStart: false
});

function confirmedCraft() {
  if (reducedMotion || inventoryClosed) return;
  spark.setPosition([slot.x, slot.y - slotHeight / 2, 0]);
  spark.reset();
  spark.spawn();
}
```

The variables representing the layer, slot, and application state belong to the host game. The complete fixture supplies its own fixed stage and synthetic event button. It does not implement a real inventory transaction.

This policy restarts one retained instance. A second event replaces the visible history of the first. If every confirmation needs a separate burst, use a bounded pool and specify overflow behavior. Avoid silently creating a new instance for every event without a lifetime or ownership rule.

## Keep time advancement and cleanup owned

Advance the renderer once per frame in seconds. With Pixi's ticker, that means `ticker.deltaMS / 1000`. The supplied fixture instead uses requestAnimationFrame and stops Pixi's automatic ticker. Running both paths would advance the simulation twice.

On panel teardown, remove event listeners, stop its animation owner, and destroy the renderer. The application's persistent inventory state must remain separate from the animation. A particle burst is not a reliable record that a craft succeeded, and it should not be the only confirmation available to the user.

## Inspect a reproducible result

![Synthetic inventory slot with an actual 18-particle sample](https://almastparuyryan.github.io/day13/craft.jpg)

At the fixed sample, after eleven steps of 1/60 second, the browser reported 18 active particles and one effect instance. Its Pixi support statistics listed no unsupported modules or features. These results describe the supplied pinned fixture. They do not establish device frame time, memory consumption, or production capacity.

The source includes a reduced-motion test control. A production game should read the operating-system preference, handle changes, and combine it with its own effects settings. Keep a text, icon, or other static result when the decoration is disabled.

## Know the backend boundary

This example exercises procedural alpha billboards and local two-dimensional placement. It does not exercise texture loading, material graphs, or subemitters. Pixi does not acquire Three.js GPU depth-buffer semantics because the two adapters share effect data. Review per-backend support reports when moving an effect between them.

Before using the recipe in a game, verify the parent coordinate conversion, rapid confirmation policy, reduced-motion behavior, completion, and teardown. Then profile the actual art and materials on the target device. The bounded fixture gives those checks a stable starting point.

[Run the fixture](https://almastparuyryan.github.io/day13/demo/?mode=craft) · [Download source](https://almastparuyryan.github.io/day13/day13-source.zip)
