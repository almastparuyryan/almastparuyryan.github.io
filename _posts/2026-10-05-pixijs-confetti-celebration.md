---
layout: post
title: "Build a PixiJS 8 confetti celebration that cleans up after itself"
description: "A small, inspectable PixiJS 8 confetti effect with a reduced-motion path, particle cap, and notes on moving to an authored VFX workflow."
date: 2026-10-05 12:00:00 +0400
---

## Start with the moment, not the particles

A celebration effect should acknowledge something the player did. In this example, a button stands in for a completed level or accepted reward. Pressing it releases a short fan of colored rectangles from the center of a PixiJS stage. The pieces fall, rotate, fade, and leave the scene. A second press creates another burst without keeping the old objects forever.

This is a deliberately small 2D effect. It uses PixiJS `Graphics`, not an image texture, particle plugin, or exported editor file. That makes the motion and cleanup easy to inspect. Once the behavior is right, an authored effect can replace these rectangles without changing the event that triggers the celebration.

## Make a page with one trigger

Use a PixiJS 8 project with `pixi.js` installed. Put this markup on the page that loads your JavaScript module:

```html
<button id="celebrate" type="button">Celebrate</button>
<p id="status" role="status" aria-live="polite"></p>
<div id="stage"></div>
```

Keep the button outside the canvas so it remains a normal keyboard-accessible control. The status text gives the event a nonvisual result, including when a visitor prefers reduced motion. A real game should call the same burst function after its own confirmed success event; a click in this demo is only a stand-in.

## Draw and update the confetti

The following is the complete module for the markup above. PixiJS 8 initializes `Application` asynchronously, creates each piece with `Graphics().rect().fill()`, and passes a ticker object to its frame callback.

```js
import { Application, Graphics } from "pixi.js";

const app = new Application();
await app.init({ width: 640, height: 360, backgroundColor: 0x152238 });
document.querySelector("#stage").appendChild(app.canvas);

const button = document.querySelector("#celebrate");
const status = document.querySelector("#status");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const colors = [0xffd166, 0xef476f, 0x06d6a0, 0x70a1ff];
const pieces = [];

function removePiece(index) {
  const [piece] = pieces.splice(index, 1);
  app.stage.removeChild(piece.graphic);
  piece.graphic.destroy();
}

function burst() {
  status.textContent = "Celebration complete.";
  if (reducedMotion.matches) return;

  for (let i = 0; i < 70; i += 1) {
    const graphic = new Graphics()
      .rect(-3, -5, 6, 10)
      .fill(colors[i % colors.length]);
    graphic.x = app.screen.width / 2;
    graphic.y = app.screen.height * 0.62;
    app.stage.addChild(graphic);

    pieces.push({
      graphic,
      vx: (Math.random() - 0.5) * 330,
      vy: -130 - Math.random() * 230,
      spin: (Math.random() - 0.5) * 9,
      age: 0,
      lifetime: 1.4 + Math.random() * 0.8,
    });
  }

  while (pieces.length > 140) removePiece(0);
}

button.addEventListener("click", burst);

app.ticker.add((ticker) => {
  const dt = Math.min(ticker.deltaMS / 1000, 0.05);
  for (let i = pieces.length - 1; i >= 0; i -= 1) {
    const piece = pieces[i];
    piece.age += dt;
    piece.vy += 420 * dt;
    piece.graphic.x += piece.vx * dt;
    piece.graphic.y += piece.vy * dt;
    piece.graphic.rotation += piece.spin * dt;
    piece.graphic.alpha = Math.max(0, 1 - piece.age / piece.lifetime);

    if (piece.age >= piece.lifetime ||
        piece.graphic.y > app.screen.height + 20) {
      removePiece(i);
    }
  }
});
```

The numbers are tuning inputs, not measured performance results. The first part of the movement sends pieces upward and outward. Gravity then pulls them down. Capping elapsed time limits large jumps after a backgrounded tab resumes. The 140-piece cap prevents repeated presses from growing the scene without bound, while each piece still removes itself when its lifetime ends or it falls below the stage.

## Check the behavior in the browser

Run the page in your PixiJS 8 development server. Press the button once and check that a burst starts near the center, rotates and falls, then disappears. Press repeatedly and inspect the stage after a few seconds; no old confetti should remain. Turn on reduced motion in your operating system or browser and reload: the status message should update, but no pieces should spawn. Try the button with a keyboard as well.

Capture a screenshot or short recording only after running that check. This article does not include an observed frame, measured frame rate, or a claim about how the effect behaves on a particular phone. Test those separately in your target game and device.

## When an editor becomes useful

Hand-written rectangles are fine for a small effect, but they become awkward when artists need curves, gradients, multiple emitters, or reusable presets. A [pixi js particle editor workflow with NixieFX](https://nixiefx.com/pixijs-particle-effects/) is an option for authoring and exporting an effect for its PixiJS runtime. That would be a separate integration: export a bundle, load it through the PixiJS adapter, and inspect the `pixi2d` support report before treating the effect as ready.

Backend limits matter. NixieFX documents mesh-surface emission, lit shading, and GPU depth as unavailable on its PixiJS backend; a Three.js preview is not proof those settings work in PixiJS. A partial export can use approximations, and a blocked export must be corrected before shipping. The `Graphics` example above needs none of those features and does not claim to be a NixieFX export.

The useful boundary is the game event. Whether the visual is drawn in code or loaded from an editor bundle, trigger it only after the player action succeeds, keep a reduced-motion path, and verify it in the runtime that will ship.
