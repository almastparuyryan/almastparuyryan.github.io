---
layout: post
published: false
title: "A PixiJS spell-hit effect that leaves the target readable"
description: "Plan a short magic impact burst, integrate an exported effect, and avoid common UI and runtime mistakes."
date: 2026-10-09
---

A spell hit needs to answer a gameplay question: where did the projectile land? If the effect fills the screen, lasts longer than the target reaction, or obscures damage feedback, it stops helping. A compact PixiJS impact can be more useful than a dense shower of particles.

This guide is a design and integration recipe for a PixiJS 8 scene and a NixieFX export. It does not claim that a finished asset was rendered, profiled, or captured for this article. The team should build the effect, inspect its backend support report, and test it in the target game before adding screenshots or performance claims.

## Define the impact window

Start with the actual gameplay timing. At the hit event, the target should react immediately. The particle accent may begin at the same time, rise quickly, and disappear before the next player decision. As an initial authoring target, use a one-shot burst with a short lifetime and a modest particle count. These numbers are design inputs, not measurements. Tune them in context rather than treating them as a universal budget.

Use a stable gameplay signal under the animation: a hit flash on the sprite, a health change, or a readable damage indicator. If the player has reduced motion enabled, suppress or simplify the particle layer while preserving that gameplay signal. Place the effect near the collision point, but constrain its radius so it does not cover nearby targets or UI labels.

## Author for the runtime you will ship

In the editor, give the effect an id such as `spell-hit`. A first pass might have one radial emitter with a warm center and fading edge. Keep it to simple 2D billboards and a short color/alpha curve. Add a texture only if it improves the silhouette; texture assets must be included in the exported bundle and resolved by the host.

Choose a Pixi-compatible target profile and export. Read the `pixi2d` support report in the manifest. A blocked report means the asset is unsuitable until revised. A partial report means some setting has different semantics; identify the warning and test that difference in the actual scene. A lit 3D material, mesh-surface emission, or a camera-depth assumption should not be smuggled into a 2D hit recipe.

The game should load only the exported bundle, not the editor's source JSON. The manifest indexes compiled effects and assets. Use the official loader with `requiredBackend: "pixi2d"`, resolve any textures listed in the manifest, and create a `PixiVfxRenderer` parented to a dedicated layer. The [PixiJS particle effects guide](https://nixiefx.com/pixijs-particle-effects/) documents this export-and-load path for a pixi js particle editor workflow.

## Worked integration sketch

```ts
// Assumes `bundle` and `vfx` were created from the exported bundle.
const spellHit = bundle.effectsById.get("spell-hit");
if (!spellHit) throw new Error("spell-hit is missing from the VFX export");

const live = new Set();

function onConfirmedHit(x: number, y: number) {
  applyGameplayHitFeedback(); // health and hit state are not VFX concerns
  if (prefersReducedMotion()) return;

  const instance = vfx.createEffect(spellHit, {
    position: [x, y, 0],
    seed: (Math.random() * 0xffffffff) >>> 0,
  });
  live.add(instance);
}

app.ticker.add((ticker) => {
  vfx.update(ticker.deltaMS / 1000);
  for (const instance of live) {
    if (!instance.isActive) {
      vfx.removeEffect(instance, true);
      live.delete(instance);
    }
  }
});
```

The code is an integration sketch; `applyGameplayHitFeedback`, `prefersReducedMotion`, loading, and layer setup belong to the host game. The important runtime detail is that `update` receives seconds. Passing ticker milliseconds would advance the effect far too quickly. The host should not create a fresh VFX renderer for every hit. Create it for the scene, spawn one effect instance per confirmed hit, reap completed instances, and destroy the renderer when the scene closes.

## Four common mistakes

**Spawning on input instead of impact.** If the projectile can miss, starting the effect on a click sends the wrong message. Trigger from a confirmed collision or resolved hit event.

**Overdrawing the target.** A bright full-screen burst can hide the target reaction. Check the effect at the smallest supported viewport and during repeated hits. Reduce radius or particle count if the feedback competes with the game state.

**Treating editor preview as runtime proof.** Export validation and a browser run are required. Save the PixiJS support report with the effect and document partial approximations.

**Forgetting cleanup.** Repeated hits can accumulate inactive instances if they are never removed. A scene transition should also destroy the renderer and release any texture-provider resources it owns.

## Verification before publication

Record the PixiJS and NixieFX versions, the effect id, the support status, and a real capture at the target viewport. Confirm that the hit state remains visible with reduced motion and that ten repeated hits leave no inactive effect instances. If those checks have not been run, describe the piece as a reproducible plan rather than a demonstrated benchmark. A restrained spell hit is successful when the player understands the event faster, not when the particle counter is highest.
