---
layout: post
title: "Route a game performance regression with a profiling brief"
description: "Define the baseline, target metric, evidence, and qualified reviewer before assigning an agent-assisted performance repair."
date: 2026-10-13
---

Disclosure: AI-generated draft prepared for a Wagglet marketing task. The encounter below is fictional. Its profiling plan is a template; no measured regression, speedup, or repaired build is claimed.

An encounter feels slower after a visual update. A producer notices the stutter, an artist suspects the effect, and an engineer knows that several changes landed in the same build. Assigning the ticket to whoever last edited the particles would turn a visible symptom into an unsupported diagnosis.

A useful profiling brief gives the investigation a repeatable scene, a baseline, a metric, and a named reviewer. It also distinguishes the person who can capture the problem from the specialist who can explain it. An agent can help assemble evidence and implement a bounded repair, but the task still needs a qualified person to judge what that evidence means.

## Prepare a baseline somebody else can reproduce

Use a fictional encounter in which three effects appear when a wave ends. The producer supplies the sequence that players follow: load a synthetic save, finish the wave, and observe the reward transition. QA prepares that fixture and identifies the affected device tier. An engineer names the last known acceptable revision and the revision containing the complaint.

Capture both revisions under the same conditions. Record the device, operating system, browser or wrapper version, resolution, quality settings, and camera path. Warm up the scene for thirty seconds, then capture a ninety-second repeatable sequence. Those durations are proposed capture instructions, not reported observations.

The baseline is the measured result from the affected revision under that protocol, accompanied by its raw trace. The acceptable revision provides comparison context. If either revision cannot run, record the setup failure and resolve it before attributing the difference to the new effects.

This avoids a common mismatch: a developer comparing one desktop preview with a tester's mobile recording. Both can contain useful evidence, but they do not define a controlled before-and-after measurement.

## Name the metric before asking for an improvement

For this example, choose the 95th percentile of CPU time spent in the host's update and render-submission region, measured in milliseconds. The engineer defines the instrumentation boundaries and confirms what they include. Render submission is a CPU measurement; it does not measure when the GPU finishes its work.

Let B be that baseline value on the affected revision. A proposed repair target is at most 0.8 times B, with the same scene, device, and capture procedure. The engineering owner must approve and freeze the target before implementation. A twenty-percent reduction in this region would not, by itself, prove that the game meets its frame-rate goal.

Retain a separate player-facing check for the original stutter and the studio's existing frame budget. If the evidence points to GPU work, change the profiling plan deliberately with the appropriate specialist. Do not quietly substitute a different metric because it produces a better-looking number.

## Route the investigation from evidence

A technical lead reviews the first capture and selects the investigation owner. Expensive update logic may call for a gameplay or systems engineer. Rendering or asset behavior may call for a graphics engineer or technical artist working with one. A device-only problem may require a mobile specialist. These are routing possibilities, not findings about the fictional encounter.

The producer contributes the expected player sequence and the visual priorities. The artist identifies which features of the effect must remain recognizable. The runner captures the agreed evidence and supervises the agent with their own authorized tools. The specialist owns the technical diagnosis and reviews any proposed repair.

Assign the reviewer at the same time as the investigation owner. If the necessary specialist cannot review the result, completing more agent work does not remove that dependency. Narrow the task to collecting a reproducible evidence packet until qualified review is available.

## Use a profiling brief with explicit stop conditions

```text
Scenario: Synthetic wave-end encounter with three visual effects
Revisions: Record acceptable comparison and affected build IDs
Environment: Named device, OS, renderer, resolution, quality settings
Capture: Fixed camera path; 30-second warm-up; 90-second sequence
Baseline B: Affected build p95 CPU update/render-submission duration
Evidence: Raw trace, instrumentation boundaries, sample count
Target: p95 <= 0.8 * B, approved before the repair begins
Preserve: Encounter timing, reward behavior, approved visual cues
Runner: Named person using their own authorized development tools
Technical reviewer: Specialist selected by the engineering lead
Acceptance: Reviewer checks evidence; producer checks player sequence
Stop: Unreproducible baseline, metric changes, wider scope, missing review
```

Replace the revision and environment fields with observed facts before starting real work. Attach the baseline trace and its summary to the task. The example intentionally contains no invented measurement to stand in for that evidence.

## Judge the repair against the original conditions

The agent's delivery identifies the changed revision, proposed cause, files changed, commands run, raw before-and-after traces, and remaining limitations. The reviewer checks whether the instrumentation and capture conditions stayed comparable. A smaller percentile with fewer effects visible would not satisfy a brief that preserves those effects.

The producer repeats the player sequence and checks whether the transition still communicates the intended reward. The specialist judges the technical change and the measurements. QA reports any target device that was unavailable rather than treating its absence as a pass. Acceptance records those decisions; merge and release remain separate authorized actions.

For a **game studio AI workflow**, this is an operating handoff across disciplines. [Wagglet's discussion of the AI-native mobile game studio stack](https://wagglet.com/blog/ai-native-mobile-game-studio-stack) connects prepared work with human judgment, evidence, and acceptance. A profiling task applies that pattern to one specific regression without making teammates interchangeable.

The useful outcome may initially be a better diagnosis rather than a faster build. A reproducible baseline, a meaningful target, and a reviewer who can interpret the result give the next repair a clear decision to answer.
