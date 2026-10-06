---
layout: post
title: "A restrained Three.js firefly effect for an ambient scene"
description: "Author, load, and review a small looping firefly effect with a particle cap and an explicit cleanup path."
date: 2026-10-06 12:00:00 +0400
---

## Give the fireflies a job in the scene

Ambient fireflies should make a quiet place feel inhabited. If they are bright, fast, or numerous enough to pull attention away from the player's route, the effect is doing too much. For a small Three.js scene, start with one cluster near a shrub or path edge. Keep it behind important UI and away from a high-contrast objective marker.

This walkthrough uses a NixieFX effect exported for the Three.js runtime. I loaded the export in a 640 × 360 browser scene, saw the bounded cluster render, and removed the scene without a browser error. The capture below shows that local runtime check. It is not a performance benchmark or footage from a finished game.

## Author one bounded emitter

Create an effect with the ID `ambient-fireflies` and target profile `three-world-3d`. Use a small box or sphere emission region near the scene prop, a low continuous spawn rate, a looping emitter, and a firm maximum particle count. Start with a cap around 24, then tune the rate and lifetime so the visible count stays comfortably below that cap.

Choose a small, soft billboard. A procedural circle avoids a texture dependency for the first pass. Use a subtle yellow-green color, low alpha, and a gentle brightness variation over life. Add slow lateral motion and a little vertical drift. Keep speed low enough that the particles read as hovering points rather than sparks leaving a fire.

Export the effect to `out/vfx`. Inspect `support.backends.three3d` before using it. A `blocked` report means the asset must change; a `partial` report calls for an explanation of the approximation. The editor preview is helpful for design, but the exported effect and runtime scene are what the game will load.

For the first pass, avoid trails, flipbooks, lit shading, and custom material graphs. Those features may be useful for a hero effect, but they complicate a small ambient emitter and can change its rendering path. The runtime's reported draw calls and unsupported features should guide later tuning.

## Load the export in the scene

Install `three` and `nixie-fx` in the game project. Serve the exported `out/vfx` folder at `/vfx`. The following code assumes the effect uses only a procedural billboard; if it references an image asset, preload it through a texture provider before creating the effect.

```js
import * as THREE from "three";
import { loadVfxExportBundle } from "nixie-fx/export";
import { ThreeVfxRenderer } from "nixie-fx/three";

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json();
}

const manifest = await readJson("/vfx/manifest.json");
const effectsByPath = Object.fromEntries(
  await Promise.all(
    manifest.effects.map(async (entry) => [
      entry.path,
      await readJson(`/vfx/${entry.path}`),
    ]),
  ),
);

const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  { requiredBackend: "three3d" },
);
const fireflies = bundle.effectsById.get("ambient-fireflies");
if (!fireflies) throw new Error("Missing ambient-fireflies export");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111a20);

const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 100);
camera.position.set(0, 1.6, 5);
camera.lookAt(0, 1.2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(960, 540);
document.body.appendChild(renderer.domElement);

const vfx = new ThreeVfxRenderer({
  scene,
  camera,
  captureDebugTransforms: false,
});
vfx.createEffect(fireflies, {
  position: [0, 1.2, 0],
  seed: 27,
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  vfx.update(clock.getDelta());
  renderer.render(scene, camera);
});

// Call this when the owning scene is removed.
function disposeScene() {
  renderer.setAnimationLoop(null);
  vfx.destroy();
  renderer.dispose();
  renderer.domElement.remove();
}
window.addEventListener("pagehide", disposeScene, { once: true });
```

This is a minimal scene so the effect can be inspected without other moving objects. In a game, reuse the existing scene, camera, renderer, and animation loop. Call `vfx.update()` once per host frame and pass seconds. Create one persistent looping instance for the cluster; do not create a new instance every frame.

## Review the result in context

The tested export uses a box emission region, a steady rate of four particles per second, a 24-particle cap, and a 3.5-second lifetime. The browser scene rendered a small yellow-green cluster, and the Remove scene control stopped its animation loop and removed its canvas.

![Ambient fireflies exported through NixieFX and rendered in a 640 by 360 Three.js browser scene](/ambient-fireflies-runtime.png)

The first visual pass should answer concrete questions. Are the fireflies visible at the game's normal camera distance? Do they compete with an objective marker or health UI? Does their motion still look calm at a smaller viewport? Does the loop end cleanly when the scene unloads?

Then inspect the runtime report and stats. Check for unsupported features and missing asset references. Watch active particle count and draw calls in the actual scene. A small cap limits simulation growth, but it does not by itself guarantee an acceptable frame time on every device. Capture performance on a target device before making any speed claim.

A three js particle editor is useful here because a designer can tune the authored motion and color without changing the game's event loop. That convenience has a cost: the export must be validated, loaded, versioned, and reviewed as a game asset. The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) explains the bundle loader, renderer lifecycle, support report, and optional providers used by this recipe.

The finished effect should be easy to overlook until the player pauses near it. That is the point of ambient work: a bounded visual detail that supports the scene and leaves no hidden runtime work behind when the scene is gone.
