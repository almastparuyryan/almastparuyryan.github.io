---
layout: post
title: "A two-week AI capacity pilot: count accepted work separately from saved money"
description: "An editable worksheet for a small team to measure recovered output, review time, and actual avoided spend in an AI task handoff pilot."
date: 2026-10-06 12:00:00 +0400
---

## Two questions, two answers

A small team with more task demand than working hours may try a two-week AI capacity pilot. The goal is to learn whether a teammate with available agent capacity can finish bounded work that would otherwise wait. There are two results to report: additional accepted output and actual avoided spend. They are not interchangeable. Four more completed tasks do not automatically mean four tasks' worth of cash savings.

This worksheet treats the pilot as a supervised handoff, not as an account-sharing plan. A task owner writes the brief and acceptance criteria. Another person executes it using their own authorized repository and AI provider access. A reviewer checks the delivered evidence and records acceptance. The team should stop a task when the executor lacks access, the scope is unclear, or no reviewer is available.

## Pick work that can be reviewed

For a two-week window, list a few tasks that are narrow enough to complete and judge. Good examples might be a small documentation correction, a test fixture, or a focused UI state. Do not use the pilot to hand off secrets, production access, or a vague request to “improve the app.”

Before assignment, each brief should name the repository and exact starting ref, allowed files, required behavior, test command, and evidence expected at delivery. Record who prepared it, who executed it, and who will judge it. The executor returns a commit or pull request, actual command output, and open limitations. Delivery is not acceptance.

For each accepted task, record whether it really was additional work. A task already scheduled for completion by the same person during the pilot cannot be counted again as recovered output. A task completed but rejected by its reviewer contributes zero accepted output until corrected. This is the point of **human supervised AI execution**: the verdict depends on the result, not the number of agent runs.

## An editable model

Copy this JavaScript into a browser console or a small `.mjs` file and replace the inputs with your own two-week records. All values below are hypothetical examples, not measured results from a team.

```js
const pilot = {
  acceptedOverflowTasks: 4,
  tasksLikelyCompletedAnyway: 1,
  cancelledExternalInvoice: 500,
  preparationHours: 3,
  reviewHours: 5,
  fullyLoadedHourlyCost: 70,
  incrementalToolCost: 40,
};

const recoveredOutput = Math.max(
  0,
  pilot.acceptedOverflowTasks - pilot.tasksLikelyCompletedAnyway,
);

const pilotLaborCost =
  (pilot.preparationHours + pilot.reviewHours) *
  pilot.fullyLoadedHourlyCost;

const netAvoidedSpend =
  pilot.cancelledExternalInvoice -
  pilotLaborCost -
  pilot.incrementalToolCost;

console.log({ recoveredOutput, pilotLaborCost, netAvoidedSpend });
// Example inputs produce: 3, 560, -100
```

The example reports three candidate recovered tasks and **negative $100 net avoided spend**. That is a coherent result: the team may have gained useful throughput while spending more money during setup and review. It should not rewrite the negative number as “savings.” If there was no real external invoice cancelled, set `cancelledExternalInvoice` to zero. Do not count the face value of an existing subscription as a saving merely because a teammate used spare capacity.

The `tasksLikelyCompletedAnyway` field is an estimate. Keep the task-level reason beside it: who would have done the work, when, and what changed. If the answer is uncertain, report a range rather than a false point estimate. Likewise, the hourly cost is a planning assumption; use the team's own accounting method and say what it includes.

## Keep the evidence with each row

An editable table is useful alongside the formula:

| Task | Prepared by | Executed by | Reviewed by | Accepted? | Would finish anyway? | Invoice actually cancelled? |
| --- | --- | --- | --- | --- | --- | --- |
| Example A | Owner | Authorized teammate | Reviewer | Yes | No | No |
| Example B | Owner | Authorized teammate | Reviewer | Yes | Yes | No |

Add a link to the brief, delivery, and review decision for every real row. Never place account credentials in that table. The executor's own access should be sufficient for the assigned scope, and the reviewer should be able to reproduce the important checks. A workflow such as [Wagglet's approach to unused Claude Code and Codex capacity](https://wagglet.com/blog/use-unused-claude-code-codex-capacity) can organize these handoffs, but the measurement still depends on task evidence and honest cost inputs.

## What the pilot can and cannot tell you

Two weeks can reveal whether your team can prepare reviewable tasks, find eligible executors, and close them with evidence. It can also reveal bottlenecks: missing access, unclear briefs, or review time that overwhelms the capacity recovered. It cannot prove long-term productivity from a handful of tasks, or isolate every outside factor that changed during the period.

At the end, show both numbers and the underlying rows. If output rose but net avoided spend was negative, decide whether the learning or faster delivery justifies another bounded pilot. If the evidence is thin, improve task selection and review before making a larger claim.
