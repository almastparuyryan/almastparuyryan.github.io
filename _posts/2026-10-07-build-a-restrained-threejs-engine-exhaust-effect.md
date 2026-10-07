---
layout: post
title: "Build a restrained Three.js engine exhaust effect"
description: "A reproducible design and integration plan for an exported particle effect behind a small spacecraft."
date: 2026-10-07
---

## What the exhaust needs to communicate

An engine exhaust effect should tell the player when thrust is active and where the ship is headed. It does not need a huge trail or a bright bloom pass. In a small Three.js browser game, a short cone of warm particles behind the nozzle can do the job while leaving the ship silhouette readable.

This article is an implementation guide for a NixieFX export and a Three.js integration. The example is not a claim that a finished exhaust asset has already been rendered or benchmarked. Before using images or performance language, export the effect, run it in a browser scene, capture a real frame, and inspect the runtime support report.

## Define the effect in local ship space

Start with a ship whose forward direction is local negative Z and whose nozzle is at local `[0, 0, 0.6]`. The exhaust should travel toward positive Z relative to the ship. Use one point or small disk emitter at the nozzle. Begin with a low continuous rate, a short lifetime, a small particle cap, and a size curve that contracts over life. A pale center with a warm orange edge can read as thrust without washing out nearby UI.

Keep the first asset intentionally simple: camera-facing particles, alpha fade, and modest initial velocity. Avoid making a lit material or a texture atlas essential to the first pass. If you later add a texture or material, the host must provide that asset and the export report must still say the Three.js backend can render it. The editor preview is an authoring aid; the deployed export is the runtime input.

The effect's target profile should be `three-world-3d`. Export it to an `out/vfx` directory with the editor or CLI. The directory must contain a manifest and compiled effect JSON. Review `support.backends.three3d`; `blocked` means the asset should not ship, while `partial` means the listed approximation needs to be described and inspected. No support status is asserted for this unbuilt example.

## Load the export and follow the nozzle

The host game owns the scene, camera, renderer, and frame loop. The sketch below follows the documented loader and renderer shape. Replace `engine-exhaust` with the actual exported effect ID and verify the installed package API before shipping.

```js
import * as THREE from "three";
import { loadVfxExportBundle } from "nixie-fx/export";
import { ThreeVfxRenderer } from "nixie-fx/three";

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

const root = "/vfx";
const manifest = await readJson(`${root}/manifest.json`);
const effectsByPath = Object.fromEntries(await Promise.all(
  manifest.effects.map(async ({ path }) => [path, await readJson(`${root}/${path}`)])
));
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath }, { requiredBackend: "three3d" }
);
const effect = bundle.effectsById.get("engine-exhaust");
if (!effect) throw new Error("Missing engine-exhaust export");

const vfx = new ThreeVfxRenderer({ scene, camera });
const exhaust = vfx.createEffect(effect, { seed: 37 });
const nozzleWorld = new THREE.Vector3();
const clock = new THREE.Clock();

renderer.setAnimationLoop(() => {
  shipNozzle.getWorldPosition(nozzleWorld);
  exhaust.setTransform({ position: nozzleWorld.toArray() });
  vfx.update(clock.getDelta());
  renderer.render(scene, camera);
});

// When this scene is removed: vfx.destroy();
```

The code assumes `scene`, `camera`, `renderer`, and `shipNozzle` are already set up. The effect's authored direction must match the ship's orientation. If the ship rotates, test the effect while turning; a position update alone may leave an exhaust cone aimed in the wrong direction. Use the instance's rotation transform or a nozzle parent strategy that fits the actual scene graph. Do not treat the snippet as a complete game.

## Make thrust state explicit

An exhaust should not burn while the ship is idle. Wire the game's authoritative thrust state to the effect lifecycle. When thrust begins, play or restart the instance. When thrust stops, allow completion if the particles should fade naturally, or stop it if the ship is removed immediately. Do not create a new looping instance every frame. The game loop should call `vfx.update(deltaSeconds)` exactly once per frame, with seconds rather than milliseconds.

For a first test, use a static camera looking at the ship from a three-quarter angle. Toggle thrust ten times, rotate the ship during thrust, and remove the scene. Check that the effect does not remain after teardown and that the active effect count does not grow with toggles. Capture a real screenshot only after the export renders correctly. Record package versions and the support report beside the asset so later upgrades have a baseline.

A three js particle editor helps with timing and color, but it does not decide whether the flame fits the game's camera or whether the runtime is cleaned up. The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) documents the export loader, renderer, update timing, support reports, and teardown path used in this plan.

## Limits to check in the finished scene

The suggested rate and color are starting points, not measured performance recommendations. A particle cap bounds one source of work; it does not prove frame time on a target device. Check transparent sorting against the ship mesh, motion at low frame rates, and reduced-motion behavior according to the game's policy. If any authored feature is partial or blocked in the export, describe it honestly or replace it.

The sample is a starting point for a build, not a tested asset. After exporting, run the scene with the target Three.js and NixieFX versions, inspect the backend support report, and record any approximations alongside the effect. Only then can a screenshot or performance claim describe this specific implementation.
