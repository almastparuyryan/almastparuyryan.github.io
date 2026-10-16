---
layout: post
title: "Count the instances before calling a particle scene cheap"
description: "A reproducible NixieFX stress fixture with instance counts, browser timing, draw calls and explicit cleanup."
date: 2026-10-16 10:01:00 +0400
---

AI and affiliation disclosure: This article was prepared with AI for NixieFX-related marketing work. Its results come from an original synthetic fixture using nixie-fx 0.1.17 and Three.js 0.185.1. They are observations from one browser session, not a production performance guarantee.

A single effect looking smooth says little about a scene containing a hundred effects. Each instance has its own simulation state and lifecycle. Even when particle drawing uses instancing inside an emitter, the scene can still contain many separate emitter draws.

For backend compatible particle effects, compatibility and performance are separate questions. An export can be accepted by a backend while the host still creates more instances than its scene budget allows. This example makes the instance count explicit, records both CPU update time and browser frame intervals, and exposes teardown as a visible operation.

## Use a small effect whose cost is understandable

The stress fixture reuses a looping `beam-endpoint` export. Each instance emits 60 particles per second with a 0.4-second lifetime and capacity 128. It uses procedural unlit billboards without external textures, trails, flipbooks or node materials. These choices make the fixture easier to inspect; they do not represent every game effect.

The host creates 1, 25, 100 or 200 instances from one loaded definition. Seeds start at 73 and vary by instance. Instances occupy a small grid. One ThreeVfxRenderer owns all of them and receives one update per host frame.

[Run the stress demo](https://almastparuyryan.github.io/day12.html?mode=stress) and [download the complete source](https://almastparuyryan.github.io/day12-source.zip). The archive contains the authored project, compiled bundle, pinned package declarations, measurements and checks.

![Actual 100-instance fixture and its recorded runtime statistics](https://almastparuyryan.github.io/day12-stress.jpg)

## Make ownership visible in the code

The host keeps every handle so a change in the requested count first removes the old population:

```js
let instances = [];
function clearInstances() {
  for (const instance of instances) {
    vfx.removeEffect(instance, true);
  }
  instances = [];
}
function createPopulation(effect, count) {
  clearInstances();
  for (let index = 0; index < count; index++) {
    instances.push(vfx.createEffect(effect, {
      seed: 73 + index,
      position: [(index % 10) * 0.45, 0, 0]
    }));
  }
}
```

This snippet illustrates ownership; the full demo adds a second grid dimension, camera controls through layout, timing and shutdown. Creating a new population without clearing the previous one would make the selected count misleading. Hiding old effects would also leave simulation work running.

The executed Node checks used fixed 1/60-second steps for one second. They recorded 1, 25, 100 and 200 instances with respectively 25, 625, 2,500 and 5,000 active particles at that sample. After each population was removed, the recorded effect count returned to zero. These are simulation checks, separate from rendered browser observations.

## Label the two clocks

The browser measures CPU time immediately around `vfx.update(deltaSeconds)`. It also records the interval between animation callbacks. The first measures part of the JavaScript workload. The second includes rendering, browser scheduling and other work. Neither is a GPU completion measurement.

After skipping 30 warm-up callbacks, the demo keeps a rolling window of at most 240 samples. In the saved 100-instance browser receipt, that window contained 240 samples, 2,400 active and visible particles, 100 instanced draws and zero legacy particle draws. Three.js reported 100 render calls.

Mean VFX update time was approximately 7.48 milliseconds, with a 95th-percentile sample of 9.30 milliseconds. Mean frame interval was approximately 34.44 milliseconds, with a 95th-percentile sample of 33.40 milliseconds. The drawing width was 1,078 CSS pixels, height 420 and pixel ratio one. The browser was running inside this task’s controlled browser environment; the receipt does not identify a target phone or production GPU.

Do not turn these observations into “supports a hundred effects at sixty frames per second.” That statement would contradict the observed frame interval and omit the environment. Fixed-step CPU checks also have a different particle sample from a live frame loop; they are not conflicting performance measurements.

## Know which count should trigger action

Watch instance count, active particles and draw calls together. A low particle total can still mean many separate emitter draws. A high configured capacity can reserve resources even when few particles are alive. This fixture deliberately retains capacity 128 per instance so the difference is visible: 100 instances report total capacity 12,800.

Choose a scene budget from representative gameplay and target-device measurements. Reuse instances when the effect ownership supports it, cap simultaneous effects when appropriate and release objects when their owner disappears. Pooling is a host design decision; this fixture does not claim that the runtime automatically pools every allocation.

## Close the scene, not just the effect

Dispose scene cancels the animation callback, removes instances, destroys the VFX renderer, disposes the host line and wall resources, clears the scene, disposes WebGLRenderer and detaches the resize listener. Its browser receipt showed effect count zero and scene-child count zero. The Node teardown check independently reached the same counts.

Those counts establish the demonstrated ownership path. They are not a complete GPU leak audit or evidence about repeated scene transitions on every driver.

The [NixieFX documentation](https://nixiefx.com/vfx-runtime-docs/) gives the runtime and export context. This stress rendering was checked in Three.js. The bundle’s separate wall and beam effects carry a PixiJS depth-semantics note, so this article makes no claim of matching GPU occlusion or measured performance in PixiJS. Keep support reports, counts and timings as separate receipts before choosing a production budget.
