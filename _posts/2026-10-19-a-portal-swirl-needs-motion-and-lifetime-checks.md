---
layout: post
title: "A portal swirl needs motion and lifetime checks"
description: "Build a bounded Three.js portal fixture and avoid misleading previews, clock errors and unbounded emission."
date: 2026-10-19 14:00:00 +0400
---

AI and affiliation disclosure: This article was prepared with AI for NixieFX-related marketing work. The example is a synthetic runtime fixture, not footage from a released game.

A portal made from particles needs more than a ring-shaped spawn volume. If each particle stays where it was born, the result is a dotted circumference. If the lifetime is too long, the effect can become a dense disk. A useful first implementation separates emission geometry, motion, population, and the camera used to judge the result.

The accompanying fixture uses NixieFX 0.1.17 and Three.js 0.185.1. It emits procedural circular billboards from a ring, applies orbital and inward radial motion, and fades particles during a 1.5-second lifetime. The goal is a reproducible integration sample with visible limits, rather than a finished portal material.

## Build a small effect before adding a portal surface

Start with the `three-world-3d` target profile. Set continuous emission to 48 particles per second, lifetime to 1.5 seconds, and capacity to 96. Use a circle emitter with radius 1 and zero radius thickness. The source recipe rotates the spawn shape by 90 degrees around X, then applies world-space orbital Z motion with an inward radial value of -0.2.

The nominal steady population is 48 × 1.5, or 72. The executed fixed-step sample at three seconds contained 73 live particles; the discrete emission and lifetime boundary can account for a one-particle difference. Capacity remains the hard bound. Treat that observation as a property of this fixture and package version, not a performance result.

Use the supplied source recipe rather than guessing JSON keys in a copied effect. In particular, the orbital values live under the velocity-over-lifetime module, and the module must be enabled. A field added to the wrong object may leave the intended motion absent even when a file parses successfully.

## Reproduce the export and preview

Download the [source package](/day14-source.zip), enter its `assets` directory, install the pinned dependencies with `npm ci`, and run:

```sh
node prepare-effects.mjs
node verify-runtime.mjs
npm run dev
```

Open the local preview with `?mode=portal`. Choose **Fixed sample** for the same three-second state, then **Live replay** to judge motion. The fixed image alone cannot prove that a swirl moves correctly. **Move origin** provides a separate transform check. **Reduce motion** clears playback; **Dispose** releases the fixture.

![Synthetic Three.js portal fixture at the fixed three-second sample](/day14-portal.jpg)

The screenshot is captured from the supplied runtime fixture. It does not show a portal mesh, level lighting, or production gameplay.

When evaluating a three js particle editor, check the exported runtime behavior separately from the authoring view. The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) is the integration reference used for this sample.

## Avoid clock and ownership mistakes

After loading the exported manifest and compiled effects with the official bundle loader, create one renderer for the scene and an effect instance with a fixed seed. Advance the renderer once per host frame in seconds. Do not also update the renderer-owned instance during the same frame.

```js
// scene and camera belong to the host application.
const vfx = new ThreeVfxRenderer({ scene, camera });
const portal = vfx.createEffect(effect, { seed: 147 });

function advance(deltaSeconds) {
  vfx.update(deltaSeconds);
}

function leaveScene() {
  vfx.destroy();
}
```

This excerpt shows ownership, not a complete loader. The downloadable project supplies the effect export, host scene, dependencies, and preview controls. Passing milliseconds where seconds are expected changes the apparent lifetime dramatically and can make a healthy emitter look broken.

## Judge motion before bloom

Use ordinary alpha blending, unlit procedural billboards, depth testing, and no depth writes for the first pass. Adding bloom early can conceal excessive overlap and make it difficult to distinguish a motion defect from exposure. Inspect the ring from the front and from an oblique view in the game before approving placement.

Do not infer GPU cost from a particle count. A close camera can cover much more screen area with the same population, and transparent overlap still matters. This fixture records runtime counts; it does not provide target-device frame-time measurements.

## Keep backend limits explicit

The Three.js support report for this export is supported without blockers. The example does not use mesh-surface emission, lit particles, trails, flipbooks, custom material graphs, or a host bloom pipeline. It also does not implement a teleport event, collision, or a portal surface.

PixiJS does not provide the same GPU depth-buffer semantics as Three.js. A portable simulation is therefore not a promise that this scene’s depth behavior transfers unchanged. For this article, acceptance belongs to the Three.js fixture: bounded live particles, visible motion, a documented origin, completion after emission stops, and clean teardown.
