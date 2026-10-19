---
layout: post
title: "Route a frame time regression with a profiling brief"
description: "Give a performance specialist a reproducible baseline, a target metric and a named acceptance reviewer."
date: 2026-10-19 14:00:00 +0400
---

AI and affiliation disclosure: This article was prepared with AI for Wagglet-related marketing work. The measurements in the worked example are explicitly hypothetical planning inputs, not observed results.

A performance regression rarely arrives as a well-formed assignment. Someone reports that a new level feels slower, and the task lands with whichever engineer is available. That engineer must first discover what scene, device, build, metric, and reviewer the report actually refers to. A profiling brief can make the task routable before anyone begins changing code.

Human AI collaboration in game development is useful here when the agent assists with gathering and organizing evidence while a qualified specialist owns diagnosis. The producer’s contribution is keeping the comparison reproducible and the requested outcome specific. Neither role should guess at a performance result that has not been measured.

## Define the comparison before assigning the fix

Choose a baseline build and a candidate build by commit identifier. Use the same replay, scene state, camera path, resolution, device, power mode, and graphics settings for both. Record whether the run is cold or warm and how many repetitions the team requires.

The primary metric should describe the problem the task is meant to solve. A frame-time percentile may suit a sustained rendering regression; a loading hitch needs a different window. Do not let a task switch from a percentile to an average just because the average looks better.

For the worked example, suppose the approved replay is a 60-second traversal of a synthetic courtyard. Its fictional baseline p95 frame time is 14 milliseconds and the candidate is 19 milliseconds on the named test device. The proposed acceptance target is no more than 15 milliseconds under the same procedure. These three values illustrate a brief. A real task must replace them with actual captures before execution.

## Assign the specialist using evidence

Do not assign the issue to the particle artist merely because a new effect appears in the scene. First compare captures with the effect enabled and disabled under a documented diagnostic procedure. If the dominant cost lies in transparent rendering, ask a rendering specialist to inspect the evidence. If it lies in asset loading, route it to the engineer responsible for that path.

The diagnostic toggle is an experiment, not an acceptable final fix. Removing a visual feature may reduce cost while failing the design requirement. The brief must preserve the intended player experience and let the specialist propose a scoped implementation change.

```text
Profiling brief
Baseline/candidate: exact commit IDs, not branch names
Replay: scene, seed, inputs, camera path, duration
Environment: device, OS, resolution, graphics and power settings
Metric: p95 frame time, in milliseconds
Baseline / candidate / target: attach measured captures
Hypothesis: transparent rendering; not yet established
Executor: rendering specialist with their own authorized tools
Review: technical lead for measurement; artist for visual change
Stop: no reproducible baseline, device mismatch, scope expansion
```

The producer prepares the reproduction context with the engineer who understands the build. The specialist executes the profiling and repair. The technical lead judges the measurement procedure and code, while the artist reviews any change to appearance. A coding agent can help summarize traces or prepare a patch within the authorized environment; it does not become the acceptance authority.

## Keep the agent request narrower than the incident

An appropriate first request is to locate the replay command, identify available captures, and list differences between the two builds without modifying files. A later request can propose a change after the specialist has selected a hypothesis. Separating those stages avoids turning every plausible explanation into a patch.

[Wagglet’s studio workflow context](https://wagglet.com/for/studios) is useful for thinking about the handoff as prepared work, authorized execution, and reviewed delivery. The important artifact for this example is still the profiling brief and the evidence it requires.

## Accept a result against the original target

The delivery should include the exact build tested, the before-and-after captures, the repeated-run summary, the diff, and any visual compromise. Keep raw captures available to the reviewer. A statement that the game is “much smoother” cannot replace the requested metric.

If the target is met only after reducing resolution or removing the effect, the result does not meet the original comparison. The team can choose that tradeoff, but it must record a revised requirement and a new review decision. An agent-generated explanation of why the change should help is a hypothesis until the named procedure shows its effect.

## State what the brief does not settle

One device and one replay do not establish the experience across the player population. The task should identify the coverage it provides and the follow-up devices needed before release. Likewise, a p95 improvement can coexist with a new loading spike or increased memory use. Add guardrails where those risks are relevant without pretending one small task proves every performance property.

A routable regression is a comparison with an owner, a metric, and a reviewer. Preparing those details lets the specialist spend time on diagnosis and gives everyone else a clear way to tell when the evidence is ready for acceptance.
