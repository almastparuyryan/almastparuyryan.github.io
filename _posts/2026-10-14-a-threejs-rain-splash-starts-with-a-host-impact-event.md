---
layout: post
title: "A Three.js rain splash starts with a host impact event"
description: "A bounded rain-impact fixture with explicit host events, validated particles and scene teardown."
date: 2026-10-14
---

Disclosure: AI created this article, source and synthetic scene for a NixieFX marketing assignment. The local checks use nixie-fx 0.1.17 and Three.js 0.185.1. The example is a rendered demonstration, not a production rain system or GPU benchmark.

A rain splash has two separate jobs. The game decides where a drop meets a surface. The visual effect draws a brief response at that position. Keeping those jobs separate makes a small Three.js demonstration easier to test and prevents a particle burst from silently claiming to implement collision detection.

This example renders only the response. A host timer emits impacts at known points on a flat floor. Each impact creates a small burst and lets it expire. The timer represents an event source; it does not stand in for evidence that raycasts or authored particle collisions work.

## The floor is a coordinate reference

The scene contains a simple floor and grid. The floor's top sits below the impact origins. An origin of y=0.015 keeps the transparent splash clear of that surface. X and Z come from a repeatable host sequence so the demonstration spreads impacts without needing a rainfall simulation.

The authoring definition uses local simulation space. An instance root places the splash at its chosen world position. That is appropriate for a short response whose owner remains stationary. If the surface or parent moves during the effect, decide whether its emitted particles should move with it before selecting local or world space.

The camera views the floor obliquely. The Front option helps inspect position from a second angle. Neither camera changes the host's impact coordinates. When a splash seems misplaced, compare the position and floor height before adjusting the artwork.

## A brief burst keeps the example bounded

Each event produces 12 particles with a 0.45-second lifetime and a capacity of 16. The initial X and Z velocities range from -0.7 to 0.7, while Y ranges from 0.18 to 0.55. This creates a small outward scatter. It is a stylized splash without gravity, water shading or a physical trajectory model.

The particles use procedural unlit billboards with alpha blending. Depth testing is on and depth writing is off. The floor can occlude the effect through the host's depth buffer without making the transparent particles write a solid surface over later objects.

The maximum count remains a per-instance limit. A stream of events could create many instances even if every emitter has a small capacity. The host must bound event rate and retire completed instances as part of its own budget.

## The host creates and removes instances

The complete source loads a validated export bundle and selects `rain-impact`. This excerpt shows the event boundary after that effect and the VFX renderer are ready:

```js
const activeImpacts = [];

function onRainImpact(position, seed) {
  activeImpacts.push(vfx.createEffect(rainEffect, { position, seed }));
}

function updateImpacts(deltaSeconds) {
  vfx.update(deltaSeconds);
  for (let i = activeImpacts.length - 1; i >= 0; i--) {
    if (!activeImpacts[i].isActive) {
      vfx.removeEffect(activeImpacts[i], true);
      activeImpacts.splice(i, 1);
    }
  }
}
```

A real host might call `onRainImpact` from a collision system, a raycast against designated surfaces, or precomputed rainfall contacts. That integration should decide surface type and event rate before spawning VFX. The example's timer calls it every 0.3 seconds, with positions derived from an event index.

Advance the VFX renderer once per host frame. Passing milliseconds into an API that expects seconds can make a short splash disappear immediately. Advancing both the renderer and the same owned instances would advance them twice.

## Test the response before building rainfall around it

The local check sampled one splash at 0.18 seconds and found 12 active particles. Sampling at one second found zero. Those observations establish the fixture's burst and completion behavior. They do not measure frame time, rendering cost on a phone or a game's collision accuracy.

![Synthetic floor with repeated rain-impact responses](/day10-rain.jpg)

Check a second camera, an impact close to the floor edge, and two impacts emitted close together. The origin should remain at the intended surface position, and the older effect should finish without needing a new event to clear it. A disposal action should stop the animation and release the scene's resources.

The support report permits this effect on the Three.js backend, and the tested instance reports no unsupported features. Authored collision, trigger-driven sub-emitters, dynamic lighting and water-material responses are outside this fixture. A three js particle editor can author the visible response, while the [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) documents the adapter that places it in the host scene.

## Keep event evidence distinct from visual evidence

A useful handoff includes the host event position, the selected effect ID, the seed and the package versions. A screenshot shows appearance. A recorded input shows why the effect appeared at that location. Both matter when a reviewer reports that a splash looks correct but is occurring on the wrong surface.

The final integration checklist is small: verified bundle identity, explicit event ownership, seconds-based updates, bounded instance count, completion cleanup and scene teardown. Those checks let the visual response stay simple while the game's surface logic develops independently.


[Run the synthetic rain-impact demo](/day10.html?mode=rain) and [download the complete fixture source](/day10-source.zip).
