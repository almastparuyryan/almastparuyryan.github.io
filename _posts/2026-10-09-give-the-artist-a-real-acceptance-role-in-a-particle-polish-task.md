---
layout: post
title: "Give the artist a real acceptance role in a particle polish task"
description: "A particle polish brief with a visual reference, technical evidence, and separate artist and engineering reviews."
date: 2026-10-09 10:00:00 +0400
published: true
---

AI disclosure: This article was drafted with AI assistance. The studio task is an illustrative example.

A particle-effect polish task can pass its automated checks and still feel wrong. The reveal may obscure the reward icon, compete with the next button, or linger long enough to interrupt the player's next action. An artist can notice those problems immediately, provided the task gives them a concrete reference and authority to request changes.

Consider a fictional mobile game with an item-reward panel. The existing reward effect works, but its purple burst overwhelms the item silhouette. The task is to soften that effect without changing reward logic, item rarity, or the panel's layout. The artist judges visual readability. An engineer judges runtime correctness. The release owner chooses when an accepted change reaches players.

## Prepare a reference the artist can use

“Make it more polished” is too vague to evaluate. The task author and artist should agree on the viewing conditions and the visual question before execution. For this example, use the existing reward panel at a named viewport and capture the same item, background, and interaction state for both versions.

The reference should identify the intended focal point, the effect's acceptable region, and the timing of the next interaction. It can be an annotated frame and a short clip. A still shows where particles overlap the icon; a clip shows whether the effect delays or distracts from the next action.

The reference is not attached to this illustrative example. A real task must supply it before anyone claims that the visual criteria were met. Do not invent a frame or describe an unrecorded artist approval.

## Write the technical half as a bounded change

The task author supplies the repository, the existing effect path, the supported host renderer, the approved reference, and the team's actual performance budget. The runner opens their own authorized agent session. If the asset path or budget is missing, the runner asks the author to resolve it rather than choosing a plausible replacement.

```yaml
outcome: Keep the item readable during the existing reward reveal.
scope:
  - adjust the existing effect's emission, size, color, and timing
  - preserve the existing trigger and cleanup path
  - keep reward data and panel layout unchanged
inputs_required:
  - approved reference clip and annotated frame
  - source effect and target runtime
  - supported viewport and device tier
  - existing particle and frame-time budget
evidence:
  - before/after clips under identical conditions
  - source diff and runtime export/support report
  - actual device and profiling notes
stop_when:
  - the host cannot represent a required authored setting
  - the change needs new game logic or a new material pipeline
  - the visual reference conflicts with the performance budget
```

The brief names a player-facing result without prescribing every slider value. The agent may propose a reduction in particle size or a shorter fade, but the proposal needs to be observed in the target runtime.

## Separate artist judgment from engineering judgment

The artist's review can be short and specific. Ask whether the item silhouette remains readable, whether the palette matches the approved rarity language, whether attention returns to the panel, and whether the effect feels appropriate in motion. Record an approval or a requested change against the actual build and clip.

The engineer reviews a different set of questions: Did only the intended effect change? Are exports current? Does the target runtime support the authored settings? Does rapid reopening leave active instances behind? Were performance checks made on the named device under the stated conditions?

Neither approval substitutes for the other. A visually pleasing clip does not prove cleanup works. A successful export does not prove that the player's attention lands on the item. When the judgments disagree, revise the task or effect instead of averaging two incomplete approvals into “done.”

## Use a sign-off record that survives another revision

```text
Build and commit: TO RECORD
Reference version: TO RECORD
Viewport and device: TO RECORD
Before clip / after clip: TO ATTACH
Artist verdict: pending
Artist reason and requested changes: TO RECORD
Engineering verdict: pending
Runtime support and cleanup evidence: TO RECORD
Performance evidence and limitations: TO RECORD
Acceptance owner: TO NAME
Release decision: separate, pending
```

The placeholders are intentional. They keep an example from impersonating an actual acceptance event. After any further source change, the owners should determine which parts of the review need repeating. A sign-off on one commit should not silently cover a different effect.

## Keep the studio handoff connected

For **human AI collaboration in game development**, the useful unit is the effect, the technical brief, the visual reference, and the two judgments together. [Wagglet's studio workflow](https://wagglet.com/blog/ai-native-mobile-game-studio-stack) describes how prepared work, runner evidence, and acceptance can travel across disciplines. This example gives the artist a named acceptance role without making them responsible for every technical decision.

The runner can collect evidence and explain changes while the author and reviewers retain their own responsibilities. Task context moves between people; provider accounts and credentials do not need to move with it.

## Know when this task is no longer polish

If readability requires changing reward presentation, animation state, accessibility behavior, or rendering architecture, the original brief is no longer enough. Escalate and prepare a revised task with the right specialists.

A good polish handoff makes aesthetic judgment actionable and technical limits visible. It gives an artist something precise to accept, and it leaves enough evidence for an engineer to decide whether that accepted appearance can safely live in the game.
