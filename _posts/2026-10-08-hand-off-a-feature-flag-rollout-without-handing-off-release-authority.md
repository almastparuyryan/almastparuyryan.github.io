---
layout: post
published: true
title: "Hand off a feature-flag rollout without handing off release authority"
description: "A staged brief that separates implementation, evidence, approval, and deployment."
date: 2026-10-08
---

A feature flag can make a release reversible, but only if the team is clear about who may change the flag and who judges whether the flagged behavior is safe. A coding agent can implement the branch and tests. That does not mean it should approve the customer exposure or deploy the feature.

This article uses a fictional checkout-summary update to show how to split the work. The example is a task template, not a report of a shipped change. Substitute the actual repository paths, flag system, and release checks before use.

## Define the states before the code

The starting state is a production flag set to off. The old checkout summary remains the baseline. The implementation state is a branch with a new summary guarded by the flag. The review state is a pull request with test evidence, design review, and a rollback plan. The release state begins only when the designated release owner merges and enables the flag for a chosen audience.

These states matter because “tests passed” can be true while “safe to expose to customers” is undecided. A flag-off test verifies the baseline path; a flag-on test verifies the new path; neither proves that pricing or legal copy is right. Those questions need a named reviewer.

## The staged rollout brief

```yaml
task: checkout-summary-v2
prepared_by: product engineer
runner_access: own authorized repository credentials; scoped branch
scope:
  - summary component
  - existing flag lookup
  - focused tests
out_of_scope:
  - price, tax, or payment calculations
  - production flag configuration
  - merge and deployment
pause_if:
  - no existing flag abstraction is found
  - an out-of-scope calculation must change
  - required tests cannot run
deliver:
  - file-by-file diff summary
  - exact test commands and outputs
  - flag-off and flag-on evidence
  - unresolved risks and rollback note
reviewers:
  - product engineer: behavior and scope
  - payments owner: any pricing or tax implication
release_owner: named human after acceptance
```

The runner's first step is discovery. It should identify the old component and the project's flag abstraction, then confirm the proposed files. If the abstraction does not exist, the pause instruction keeps the work from growing into an improvised feature-flag framework. The runner can ask for a revised task or an explicit scope decision.

## A worked review

Imagine the agent updates the checkout summary and adds two tests. The flag-off test confirms the old markup remains. The flag-on test confirms the new layout with the same totals. During review, a screen-reader label for the final amount is missing from the new component. The implementation has been delivered, but it is not accepted. The reviewer records the defect and asks for a focused fix and rerun of the accessibility check.

After the repair, the product engineer confirms the behavior and the payments owner confirms that calculated values did not change. The release owner then chooses a small exposure cohort, checks the planned monitoring, and records a rollback trigger. This is a release decision, not an agent task. If monitoring later shows a problem, the owner disables the flag according to the runbook.

This is the practical value of coding agent task management: every state has an owner and a reason to advance. [Wagglet's request-to-review workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) describes a related separation between preparation, delivery, and acceptance. The actual repository and deployment permissions must still enforce the local team's boundaries.

## What the handoff cannot guarantee

A flag does not make a database migration reversible, and a green unit test does not substitute for browser, accessibility, or payment review. A sample rollout plan also cannot supply real production metrics. Before using this template, name the release owner, identify a verified rollback path, and confirm which checks can run in the target environment.

Keep the evidence with the task. If a test was skipped, say so. If a screenshot was not captured, do not claim visual review. If the implementation crosses the approved scope, pause and revise the brief before continuing. A clear handoff is less about making every step automatic and more about making each decision visible to the person responsible for it.

## A practical acceptance record

The release owner should not have to reconstruct the decision from scattered chat messages. Attach a short acceptance record to the pull request or task: the commit reviewed, the flag state used for each test, the reviewer names, the date, and the unresolved issues. If the feature is approved only for an internal cohort, say so explicitly. A later reader should be able to tell whether the team approved the implementation, the rollout plan, or both.

Before enabling the flag, rehearse the off switch in the actual flag service and identify who receives the first alert. If an alert is missing or the rollback path depends on a database change, stop and revise the release plan. A feature flag can limit exposure, but it cannot undo every side effect. After enablement, keep the task open long enough to attach the initial observation and the final release decision. The coding runner's delivery remains one piece of that record, not its conclusion.
