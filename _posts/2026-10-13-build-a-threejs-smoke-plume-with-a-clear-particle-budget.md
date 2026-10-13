---
layout: post
title: "Build a Three.js smoke plume with a clear particle budget"
description: "A reproducible unlit billboard plume with explicit emission, movement, depth, and lifecycle limits."
date: 2026-10-13
---

Disclosure: AI-generated draft prepared for a NixieFX marketing task. The scene is synthetic. Runtime observations and screenshots come from a local Chrome check rather than a production game or device benchmark.

A smoke plume can start with a simple visual contract: emit a small population near a source, move it upward, spread it slightly, and fade it before removing it. That contract is useful for an exhaust vent or background prop even when the game does not need fluid simulation.

This example places an unlit billboard plume over a marked point on a Three.js floor. The effect has a stated rate, lifetime, and population cap. The host provides the scene, camera, update loop, and cleanup. Keeping those responsibilities explicit makes it easier to tell what the exported effect actually does.

![Smoke plume above a synthetic floor marker](https://almastparuyryan.github.io/day09-smoke-1280.png)

Caption: Actual browser capture of the local synthetic scene. The grid and marker are Three.js host geometry; the plume is the exported particle effect.

## Choose the emission and lifetime together

The supplied `smoke-plume` definition targets `three-world-3d`. It emits twelve particles per second. Each particle lives for three seconds, and the emitter capacity is forty. At a steady rate, rate times lifetime suggests about thirty-six live particles once the plume has filled. That is a planning estimate, not a measured steady-state result.

The initial box spans 0.4 units along X and Z and 0.1 units along Y. Vertical velocity varies from 0.65 to 0.85 units per second. Horizontal components vary between minus 0.12 and plus 0.12 units per second. Particles therefore rise while spreading from the source.

The billboard size is 0.65 units. Color and alpha fade over lifetime; size remains fixed in this definition. There is no expanding-size module, turbulence, fluid interaction, or collision response. Those omissions are deliberate parts of the example, not hidden effects supplied by the runtime.

## Load a verified export

The project uses NixieFX 0.1.17 and Three.js 0.185.1. It includes an authoring project, exported manifest and effect JSON, and the complete host source. The host consumes the compiled export rather than passing editor project files to the runtime.

The bundle loader is given the parsed manifest and an `effectsByPath` map. It requires `three3d` and the `smoke-plume` ID. The exported report marks the definition supported on Three.js. Inspect that report whenever the effect is changed, especially when enabling additional modules or introducing assets.

This plume uses procedural billboards, so no external texture provider is needed. A smoke texture would be a separate artistic and loading decision. Without one, the result is a cluster of soft particle shapes; it should not be presented as photorealistic smoke.

## Mount one source in the scene

The host creates the VFX renderer after the scene and camera exist. The integration core is:

```js
const vfx = new ThreeVfxRenderer({ scene, camera });
const plume = vfx.createEffect(effect, {
  position: [1, 0.04, -0.5],
  scale: [1, 1, 1],
  seed: 42
});

function advance(deltaSeconds) {
  vfx.update(deltaSeconds);
  renderer.render(scene, camera);
}
```

The effect uses local simulation space. Changing the instance's root transform moves the existing plume with its source. For an exhaust trail that should stay behind a moving object, world-space simulation and its integration need a separate check. This fixture keeps the source stationary and does not demonstrate that behavior.

The host advances the renderer once per animation frame, converts elapsed time to seconds, and caps an individual step at 0.05 seconds. It skips advancement when the document is hidden. This choice keeps the local example manageable during tab switching; it is not a prescription for every game's time policy.

## Inspect depth behavior and camera views

Particles depth-test against the opaque floor, but do not write to depth. They use alpha blending and unlit shading. The floor can occlude a particle behind it; the plume does not cast a shadow, light the room, or respond to the scene's illumination.

The host exposes oblique, top, and low camera views. Inspect them before choosing a size or opacity for a real scene. A low camera can compress several billboards into the same screen region. More particles can therefore increase overdraw even when the population counter looks modest.

The local Chrome capture at viewport widths of 1280 and 390 pixels recorded nineteen active particles after roughly 1.6 seconds. Subsequent debug positions changed, confirming movement. The runtime reported capacity forty and no unsupported features. Neither layout overflowed horizontally or recorded a browser page error.

Those observations are a functional check. They do not establish frame rate, thermal behavior, long-run memory use, or support on target mobile hardware. Measure those properties in the actual game with its normal scene complexity.

## End the source deliberately

For an abrupt stop, stop and remove the instance. For a graceful ending, the runtime offers `allowCompletion()` to stop new emission while existing particles finish their lifetimes. Choose the behavior that matches the source: an exhaust vent shutting down can fade differently from a scene being unloaded.

The fixture's Dispose control cancels animation, disconnects resizing, destroys the VFX renderer, and disposes host-owned geometry and materials. The browser check confirmed the disposal state at both widths. Shared resources in a real host require their own ownership policy.

When evaluating a **three js particle editor**, use an effect with a budget you can explain and limitations you can inspect. The [NixieFX Three.js runtime reference](https://nixiefx.com/threejs-runtime/) covers the bundle and lifecycle APIs used here.

The supplied Day 9 source can reproduce this plume with `?mode=smoke`. It is a starting point for art direction and scene integration, with a clear boundary around what has actually been checked.


[Open the working demo](https://almastparuyryan.github.io/day09.html?mode=smoke) and [download the complete source](https://almastparuyryan.github.io/day09-source.zip).
