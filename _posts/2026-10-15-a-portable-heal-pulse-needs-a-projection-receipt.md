---
layout: post
title: "A portable heal pulse needs a projection receipt"
description: "One validated NixieFX export rendered in PixiJS and Three.js, with explicit axes, counts and limits."
date: 2026-10-15
---

AI disclosure: This article and its synthetic fixture were prepared with AI. The counts, measured radii and rendered comparisons were checked in the pinned runtimes. No production performance, pixel equivalence or completed human art review is claimed.

A portable effect still needs a rendering contract. Its simulation can be shared while the host chooses different screen units, cameras and depth behavior. A heal pulse is a manageable example because a fixed ring gives us a simple radius to measure before discussing how either view looks.

## One definition and two renderer setups

The fixture pins `nixie-fx` 0.1.17, PixiJS 8.19.0 and Three.js 0.185.1. It authors `portable-heal` with the portable target profile and exports a single compiled definition. Both backends receive that definition. The example does not maintain a separate hand-tuned effect for each renderer.

The emitter has one burst of 48 particles, a 0.9-second lifetime, no continuous emission and zero velocity. Its circle has radius 1 and zero thickness. A spawn rotation of 90 degrees around X places this circle in the XY plane. The particles fade through an alpha gradient, producing a brief pulse without expanding the ring or changing gameplay health.

This is an unlit billboard example. It deliberately leaves out custom materials, trails, flipbooks, meshes, lights and collision. Keeping the subset small makes the support report and the measured result easier to interpret.

## Require the export before creating an instance

The preparation script validates the authoring project, exports it and copies the compiled bundle. The loader requires `portable-heal` for the intended backend:

```js
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  {
    requiredBackend: 'pixi2d',
    requiredEffectIds: ['portable-heal']
  }
);
```

Use `three3d` for the Three.js integration. The exported support report marks this portable effect supported on both backends. That report is a gate for this compiled effect; it does not establish support for a future module added to the source. Re-export and read the report whenever the definition changes.

The bundle includes another world effect for a separate teleport fixture. Requiring a specific effect ID makes the intent visible instead of depending on whichever entry appears first in the manifest.

## Write down the projection

The PixiJS view uses 80 pixels per authoring unit and an upward Y axis. The host converts the center of its canvas into those units, including the sign change required by the projection. A positive screen Y position pasted directly into an upward-axis projection can place the effect outside the visible canvas.

The Three.js view uses a perspective camera looking toward the instance origin. A front view presents the XY ring directly; an oblique view changes its apparent outline. That is a host-camera choice. It should not be corrected by secretly modifying the exported particle definition for one backend.

Billboard facing, perspective and pixel scaling make screenshot equality a poor default acceptance criterion. The useful first check is that both views show the same intended effect at the same age and report the expected particle count. Then a designer can judge whether each host presentation fits its game.

## The executed result

At 0.2 seconds, both rendered views reported 48 active and visible particles. The browser displayed the ring in both canvases. Neither backend reported missing material or texture references, and the PixiJS instance reported no unsupported modules or features for the sample.

The numeric Three.js check measured the ring's world radius after applying the instance root transform. Scale 1 produced a range of approximately `0.999999966` to `1.000000025` world units. Scales 0.5 and 2 produced the corresponding half and double radii within the fixture's `1e-5` tolerance. All samples retained 48 particles at the same sample time.

At 1.2 seconds the rendered PixiJS and Three.js samples both reported zero active particles. The Dispose control then destroyed the renderers and changed the page status to `Disposed`. Those are observations from the supplied scene, rather than estimates of frame time or memory use.

## What portability does not promise

Three.js depth testing uses its GPU depth buffer. PixiJS uses its own draw-order semantics. This portable heal example disables depth testing and writing in its particle definition, and the side-by-side view does not include a complicated occluding scene. It therefore cannot establish equivalent occlusion in a real 3D level and a 2D HUD.

The green particles are decorative. A host health system must decide when healing occurs, supply the location and remove the effect when its scene ends. The sample does not encode health changes, contact events, network synchronization or gameplay timing.

For [backend compatible particle effects](https://nixiefx.com/vfx-runtime-docs/), keep the export report beside the host projection choices. The validated result here is one simple pulse shown honestly in both supported backends. Test target devices, the real camera and the surrounding UI before accepting it into a game.


![Actual heal pulse rendered in both backends at 0.2 seconds](https://almastparuyryan.github.io/day11-heal-both.png)

[Open the heal comparison](https://almastparuyryan.github.io/day11.html?mode=heal) · [Download the validated export and source](https://almastparuyryan.github.io/day11-source.zip).
