---
layout: post
title: "A magic projectile needs a host clock and a tail"
description: "A repeatable Three.js projectile fixture separates movement, emission and particle completion."
date: 2026-10-20 11:00:00 +0400
---

AI assisted this original tutorial for NixieFX-related marketing. The demonstration uses synthetic geometry and an authored particle fixture. It is not footage from a game, a collision-system implementation, or a device performance benchmark.

A projectile combines two lifetimes that are easy to confuse. The moving object reaches its destination, but particles emitted behind it may still be alive. Destroying everything at impact makes the trail disappear abruptly. Keeping emission enabled after impact creates a stationary glow at a location that no longer contains the projectile.

This example separates the movement clock from the particle lifetime. The host moves an orb across three scene units over 0.8 seconds. A world-space particle emitter follows the orb during that interval. At the end, the host hides the orb and stops further emission while the existing particles finish.

## The authored trail

The source pins `nixie-fx` 0.1.17 and Three.js 0.185.1. The emitter uses additive procedural billboards, a continuous rate of 100 particles per second, a lifetime of 0.45 seconds, and capacity 64. Its spawn region is a small box around the current origin. Modest random velocity prevents every particle from occupying the exact same line.

For a continuous trail, rate multiplied by lifetime gives a planning estimate of 45 live particles. The cap allows some boundary headroom. The fixture’s fixed browser sample at 0.4 seconds reported 40 active particles, which is still before the full lifetime window has accumulated.

World-space simulation is essential to this version of the lesson. Moving the emitter changes the origin for future particles while existing particles remain along the path. A local-space cloud would move with the orb and produce a different effect. Neither is universally correct, but the choice should follow the visual job.

## The host owns travel

The game’s movement system should supply the projectile position. This fixture uses a straight line because the timing is easy to inspect. A real host can substitute its own motion and collision result without rewriting the authored particle definition.

```js
let elapsed = 0;
let emissionFinished = false;

function advanceProjectile(dt) {
  elapsed += dt;
  const u = Math.min(elapsed / 0.8, 1);
  const x = -1.5 + 3 * u;
  orb.position.set(x, 0.3, 0);
  trail.setTransform({position: [x, 0.3, 0]});

  if (u === 1 && !emissionFinished) {
    orb.visible = false;
    trail.allowCompletion();
    emissionFinished = true;
  }
  vfx.update(dt);
}
```

This is the movement portion of the complete source. `trail` is a renderer-owned Three.js effect instance created from the verified `projectile` export. The renderer update advances it once. Calling both `trail.update(dt)` and `vfx.update(dt)` would advance the same owned simulation twice.

When evaluating a three js particle editor, check that the exported effect and host movement agree about coordinates and time units. The [NixieFX Three.js runtime reference](https://nixiefx.com/threejs-runtime/) documents the instance methods used here. The example uses seconds throughout.

## Completion has a visible interval

The orb reaches the endpoint at 0.8 seconds. Its last particles have a 0.45-second authored lifetime, so the tail needs a short completion interval after that moment. Discrete update boundaries can affect the exact final frame. Use the live-particle counter when deciding when to return an instance to a pool.

For an emergency cancellation or scene change, immediate stop is a different policy: clear the particles and remove the visual. For ordinary impact, graceful completion better preserves the sense that the trail came from movement. The host should choose deliberately between those behaviors.

The CPU verification script also checks that particles eventually reach zero after emission completion. It tests the simulation and export integrity. The browser fixture separately shows the moving origin and the rendered trail.

## A restrained rendering claim

The fixed browser sample reported one estimated particle draw call and no unsupported-feature strings for the trail. That count is specific to this emitter and runtime. It excludes the orb and other scene objects and says nothing about frame time on a phone.

The recipe does not include collision detection, damage, networking, curved motion, or a camera-facing impact flash. Add those systems in the host and keep their timing explicit. The particle runtime does not decide that a projectile hit an enemy merely because its visual path ended.

This example also omits a soft-particle intersection treatment and any custom material graph. Its export notes warn that PixiJS depth behavior uses 2.5D ordering rather than the Three.js GPU depth buffer. Reusing the same asset in a different backend requires its own visual check.

## Reproduce the fixture

The [live projectile lab](/day15.html?mode=projectile) includes a fixed 0.4-second sample, live replay, pause, resume, restart, and teardown. The [source download](/day15-source.zip) contains the authored project, export files, renderer host, validation fixtures, and runtime checks. Install with `npm ci`, run `npm run verify`, then start `npm run dev`.

Before integration, verify the trail’s coordinate space by moving the origin, cancel during flight, and let one run complete normally. Confirm that the orb and particle cleanup follow separate rules. The effect becomes easier to maintain when the host’s travel state and the authored tail have clearly defined responsibilities.
