---
layout: post
title: "Acceptance criteria for an AI-assisted UI change"
description: "A task template that connects a visual reference, test plan, and reviewer verdict."
date: 2026-10-07
---

## A UI change needs a visible finish line

“Make the card look like the mockup” is a weak instruction for either a person or a coding agent. It hides the viewport, state, and behavior that the reviewer will use to decide whether the work is done. An AI task handoff for teams becomes easier to review when the brief names the exact UI states and the evidence expected at delivery.

Consider an account settings panel with a notification toggle. The request is to move the toggle below its explanation and clarify its label. The work should preserve the saved preference, keyboard access, and the narrow layout. A screenshot of the happy path is useful but insufficient: it says little about focus, loading state, or persistence.

## Put the reference in the task

The preparer should attach an approved visual reference and name its status: is it exact layout guidance, or only a direction for hierarchy? The brief should also identify the existing component and any design tokens to reuse. Without that, a runner may match pixels by hard-coding spacing that breaks when the text wraps.

For this example, the reference is a 1280-pixel desktop mockup plus a note that the mobile panel must remain a single column. The approved label is “Email me about account activity.” The explanation says what kind of email the setting controls. The runner must not change the API contract or default value.

```yaml
task: Move and relabel the account-activity email toggle
reference:
  desktop: approved mockup attached to task
  mobile: single column; text may wrap without overlap
scope:
  allowed: settings panel component and its tests
  excluded: preference endpoint, account defaults, analytics events
acceptance:
  - approved label and explanation are present
  - saved state survives reload
  - Space and Enter operate the control as expected
  - focus indicator remains visible
  - no overlap at 390px and 1280px widths
evidence:
  - changed-file list and diff
  - actual test command and output
  - real captures of both widths and toggle states
reviewer: named UI maintainer
```

This is an artifact to adapt, not a claim that the example was implemented or tested. A real task should link the actual mockup and branch. It should also record the component's current baseline so the reviewer can distinguish a regression from an existing issue.

## Test the behavior, not just the screenshot

The runner should first read the current component and test. They can change the layout and copy with their own authorized repository access, then run the existing unit and integration checks. If the project lacks a persistence test, they should add one or explicitly report the gap. They should inspect the panel at both target widths and use the keyboard to traverse the control. A screenshot cannot prove a preference survives reload, so that check needs a separate observation.

The reviewer should repeat the two highest-risk checks: the saved state after reload and the narrow layout with long or translated copy. They should also read the diff for changes outside the allowed component. The founder or product owner may approve the wording, while the UI maintainer judges implementation and accessibility. Delivery is evidence for those decisions; it is not acceptance by itself.

## Record a verdict that can be acted on

A useful review note says more than “looks good.” For example: “Copy approved; desktop and 390-pixel captures match the intended hierarchy; persistence test passed in CI; focus indicator is too faint against the disabled background. Changes requested.” The runner now knows the exact remaining work. After a new delivery, the reviewer checks the focus state and records acceptance. Merge and deployment can follow their own gates.

The [Wagglet workflow article](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) explains why it helps to separate prepared work, delivery, and review. The preparer defines scope and evidence; the runner executes with their own authorized tools; the reviewer judges acceptance. No account or token needs to pass between teammates.

## Limits and publication check

This template cannot replace product judgment or accessibility expertise. It is a compact way to expose what must be checked. If the UI handles sensitive settings, payments, or authentication, assign a qualified domain reviewer as well. Do not mark the task done because the screenshots look convincing.

