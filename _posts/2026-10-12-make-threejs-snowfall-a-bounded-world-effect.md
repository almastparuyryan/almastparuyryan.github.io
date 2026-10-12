---
layout: post
title: "Make Three.js snowfall a bounded world effect"
description: "A small snowfall recipe with a fixed emitter volume, a particle budget, and explicit depth and teardown behavior."
date: 2026-10-12
---

Disclosure: This article and its accompanying code were drafted with AI assistance for a NixieFX marketing task. The scene is a synthetic demonstration, not a production-game capture.

Snowfall can make a simple scene easier to read as a place. It can also turn into a screen of large translucent shapes if particle size, lifetime, and camera framing are chosen independently. A useful first version starts with a volume and an upper population limit.

The accompanying Three.js example puts snowfall above an opaque courtyard. It uses an exported NixieFX effect with a fixed seed, a rectangular spawn volume, downward velocity, and no collisions. The scene is intentionally small so that the effect's depth behavior is visible against a wall.

## Author a volume rather than a full-screen layer

The `snowfall` effect targets `three-world-3d`. Its box emitter measures 7 by 0.1 by 6 world units, centered 3.5 units above the courtyard. It requests 20 particles each second, gives them a four-second lifetime, and caps the emitter at 96 particles.

Initial velocity varies from -0.85 to -0.65 units per second on Y, with a small positive X drift. Those values produce a simple falling field. This example uses initial velocity rather than claiming a turbulence or wind simulation.

The size is 0.075 world units. That number has meaning only beside the camera, field of view, and nearby scene objects. Move the camera closer and inspect the projected shape before increasing the population. A visually dense field might be a size problem rather than a count problem.

## Use a budget you can explain

Rate multiplied by lifetime gives a first estimate of population: 20 times four is about 80 live particles after warmup. The capacity of 96 provides headroom. Emission scheduling and lifetime transitions can shift the observed count, so inspect the runtime statistic instead of expecting an exact number at every instant.

The budget says little about fill cost. Several large translucent flakes can cover more screen area than many small ones. Rendering cost also depends on the backend path, material, pixel ratio, camera, and device. The supplied counter reports active particles and estimated VFX draw calls; it is not a frame-time benchmark.

Record the actual device, browser, viewport, and build before reporting performance. This article supplies settings and an inspection method, not a claim that the effect is cheap on every mobile GPU.

## Load the compiled bundle explicitly

The source pins `nixie-fx` 0.1.17 and `three` 0.185.1. It bundles the exported manifest and each compiled effect as JSON, checks the bundle, and then selects `snowfall` by its exported ID.

```js
import { loadVfxExportBundle } from 'nixie-fx/export';
import { ThreeVfxRenderer } from 'nixie-fx/three';

const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  { requiredBackend: 'three3d', requiredEffectIds: ['snowfall'] }
);
const effect = bundle.effectsById.get('snowfall');
if (!effect) throw new Error('Missing snowfall');

const vfx = new ThreeVfxRenderer({ scene, camera });
const snow = vfx.createEffect(effect, {
  position: [0, 3.5, 0],
  seed: 42
});

// Once in the host loop, before rendering the scene:
vfx.update(deltaSeconds);
renderer.render(scene, camera);
```

`manifest` and `effectsByPath` are the parsed contents of the supplied export, not the editable project. The example has no file assets and needs no texture provider. An effect with an external texture must preload and resolve that texture before rendering.

## Keep the opaque wall useful

The effect enables depth testing and disables depth writing. The wall writes its normal opaque depth, so flakes behind it can be hidden. The snowfall should not write an opaque slab of depth that suppresses later translucent particles.

The demo includes a depth-test toggle to compare those states. Restart with seed 42 after changing the toggle, allow the same warmup, and compare the same camera. Turning depth testing off is a diagnostic comparison, not the intended final setting.

There is no particle collision with the ground or wall. A flake reaching a surface continues its authored path until its lifetime ends. Snow accumulation, melt, collision events, volumetric scattering, and soft intersection fades are outside this recipe. Do not mistake depth occlusion for a collision system.

## Check the runtime, not just the editor preview

If you are using a **three js particle editor**, confirm the exported backend report and the application's actual camera. The [NixieFX Three.js runtime reference](https://nixiefx.com/threejs-runtime/) describes the host integration. The supplied export marks this recipe supported on `three3d`; that verdict applies to this definition, not every possible setting.

PixiJS can simulate an exported effect but does not supply the Three.js scene's GPU depth-buffer behavior. This world-space recipe is demonstrated in Three.js only. Matching a seed across renderers does not make their depth and camera semantics equivalent.

## Release the scene's resources

The teardown cancels animation, disconnects the resize observer, destroys the VFX renderer, disposes host geometry and materials, and disposes the WebGL renderer. Shared host materials are disposed once. In a real game, keep disposal with the owner of each resource rather than destroying shared assets from an effect.

```text
[ ] Snow moves downward in the named world volume.
[ ] Active population stays under the configured capacity.
[ ] Opaque wall hides particles when depth testing is enabled.
[ ] Narrow framing preserves the effect without page overflow.
[ ] Stop/dispose ends updates and releases the owning scene.
[ ] Device-specific performance remains a measured follow-up.
```

Start with the fixed volume and camera, inspect the depth comparison, then change one parameter at a time. That gives the effect a clear spatial role before adding wind, textures, or other rendering complexity.

[Open the working snowfall demo](/day-08.html?mode=snow) and [download its complete source](/day-08-source.zip).
