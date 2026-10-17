---
layout: post
title: "Corridor motes need depth checks before density"
description: "A Three.js world-space particle fixture with explicit depth settings and an overdraw review procedure."
date: 2026-10-17 10:00:00 +0400
---

Disclosure: AI generated this article for NixieFX's marketing work. The corridor is a synthetic runtime fixture. Counts describe this fixture and are not a device benchmark.

Subtle motes can give a corridor some depth without turning it into a wall of haze. They can also reveal mistakes that an empty-scene particle preview hides. A mote drawn through a wall breaks the scene immediately. Large transparent quads can cover substantial screen area even when the particle count is small.

This example separates simulation density, depth behavior, and transparent coverage. It uses a procedural corridor and a central opaque occluder so the result can be inspected without external game assets.

## Start with a small authored volume

The `fog` fixture uses a box-shaped emitter, world simulation space, a rate of 12 particles per second, a four-second lifetime, and a cap of 48. The visible particle size is 0.045 world units. Slow upward and sideways motion keeps the example restrained.

These are motes, not volumetric fog. The effect does not integrate participating media, cast volumetric shadows, or reproduce atmospheric scattering. Calling a sprite effect “fog” in a file name does not make those capabilities appear in the runtime.

For teams evaluating a [web game VFX editor and Three.js runtime](https://nixiefx.com/threejs-runtime/), this distinction matters: first establish which authored settings the chosen backend renders, then evaluate whether that rendering fits the scene.

## Load the exported bundle explicitly

The source pins `nixie-fx` 0.1.17 and Three.js 0.185.1. The prepare script validates and exports the included authoring project. Runtime loading uses the generated manifest and effect JSON, with a check for the Three.js backend when selecting the effect for a standalone integration.

```js
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  { requiredBackend: 'three3d' }
);
const vfx = new ThreeVfxRenderer({ scene, camera });
const motes = vfx.createEffect(bundle.effectsById.get('fog'), {
  position: [0, 1, -2], seed: 131
});
// In the host's single render loop:
vfx.update(deltaSeconds);
renderer.render(scene, camera);
```

The full demo contains both Pixi and Three fixtures, so its loader reads the multi-effect bundle before selecting the effect for the active mode. For a Three-only deployment, export or validate only the relevant effects and require that backend. Avoid treating an unrelated Pixi-only effect as a Three-compatible asset.

## Verify the depth settings

The authored render settings enable depth testing and disable depth writing. Opaque corridor geometry writes to the normal depth buffer. Transparent motes should therefore be hidden by nearer opaque surfaces without themselves preventing later transparent particles from drawing.

An executed Node check advanced the fixture for 240 steps of 1/60 second. It reported 48 active particles. The Three support report was supported with no warnings or blockers. Inspection of the generated material confirmed `depthTest: true`, `depthWrite: false`, and transparency enabled.

Those material checks are useful, but the browser still needs a visual pass. In the runnable scene, inspect the central occluder and corridor walls, then move the camera in your own integration. Sorting among overlapping transparent particles remains a separate issue from occlusion by opaque geometry.

![Actual browser rendering of the synthetic corridor and mote fixture](https://almastparuyryan.github.io/day13/fog.jpg)

## Review coverage as well as count

To check overdraw, hold the camera and particle seed constant. Capture the scene with the effect off, with the default mote size, and with a deliberately larger size in the authoring project. Compare GPU frame time using the browser's graphics tooling or a frame capture, and inspect how much of the viewport the transparent quads cover.

Do not report draw-call count as overdraw. A single instanced draw can shade many overlapping transparent fragments. Likewise, 48 particles is a simulation count, not a guarantee that the effect is cheap on a particular phone.

The fixture exposes draw calls in its on-screen counters to help identify changes in rendering structure. It does not measure GPU fragment cost or claim an overdraw speedup. The supplied checks establish bounded density and depth settings; a target-device coverage and GPU timing pass remains required before using the art in production.

## Keep world-space motion separate from camera motion

The particles belong to the world volume. Moving the camera should change the view of that volume, not drag the motes along like a screen overlay. If the host later moves the emitter, already-emitted world-space particles should retain their history while future emission follows the new origin.

For teardown, destroy the VFX renderer, release host-owned scene geometry and materials, and cancel the host animation loop. The executed cleanup check returned zero effect instances and zero children in its isolated scene.

## Port with explicit limits

The export notes that Pixi's depth semantics are deterministic two-dimensional ordering rather than Three.js GPU depth-buffer rendering. This corridor should not be presented as an identical Pixi result. The example also does not exercise texture assets, material graphs, or scene-depth sampling for soft-particle intersections.

[Run the corridor fixture](https://almastparuyryan.github.io/day13/demo/?mode=fog) and [download its source](https://almastparuyryan.github.io/day13/day13-source.zip). Check occlusion, coverage, camera motion, and disposal separately; each can fail while a particle counter still looks correct.
