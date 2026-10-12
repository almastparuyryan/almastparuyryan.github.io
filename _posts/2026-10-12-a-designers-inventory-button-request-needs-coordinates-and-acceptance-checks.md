---
layout: post
title: "A designer's inventory-button request needs coordinates and acceptance checks"
description: "A bounded UI handoff with a visual specification, measurable checks, and separate design and engineering review."
date: 2026-10-12
---

Disclosure: This article was drafted with AI assistance for a Wagglet marketing task. The game, measurements, and task below are illustrative requirements.

A designer asks an engineer to make an inventory button "feel more balanced." The request is understandable in a design conversation, but it leaves an implementation task open in several directions. Should the button move, grow, change its label, acquire animation, or adopt a new interaction?

A bounded request translates the intended change into a visual specification and checks. The designer keeps responsibility for the design. The engineer gets enough information to prepare a reviewable change with a coding agent. Neither person has to guess what the other meant by balance.

## Choose one surface and one outcome

Consider a fictional mobile game's inventory footer. The primary action is a button labeled "Equip." The requested change is to align its label and icon while retaining the current action, selection rules, and navigation.

This is a layout task. Changes to inventory persistence, game economy, event names, and equip eligibility are outside its scope. If the requested alignment requires replacing the component library or changing shared navigation, the runner stops and reports that dependency.

The designer prepares a reference at the named viewport with the relevant bounds marked. An engineer confirms the component and setup path. The runner uses their own authorized development tools to supervise the agent and record evidence. The designer evaluates the visual result; an engineering reviewer checks behavior, accessibility, and scope before acceptance.

## Make the visual specification measurable

The following specification uses example values. A real task must derive its values from the actual design system and approved reference.

```yaml
surface: inventory footer / Equip button
reference_viewport: 390 x 844 CSS pixels
button:
  width: 160 CSS pixels
  minimum_height: 44 CSS pixels
  icon: existing equip icon asset, 18 x 18 CSS pixels
  icon_label_gap: 8 CSS pixels
  content_alignment: group centered on both axes
  label: Equip
constraints:
  - retain existing click handler and enabled-state logic
  - retain the existing accessible name
  - retain the design-system focus indicator
  - do not derive button dimensions from particle or icon overflow
variants:
  - enabled
  - disabled
  - keyboard focus
  - longest approved localized label
```

Specify how the grouped content is measured. Centering the label alone can produce a different result from centering the icon and label together. Record the layout container's edges so the reviewer does not measure decorative overflow by mistake.

If an approved localized label cannot fit, let the designer choose the alternate layout before implementation. Do not silently shorten text or reduce its font size until it happens to fit. The runner can report the conflict with a capture and measurements.

## Translate the spec into acceptance criteria

The useful test is the relation between the delivered UI and the requirement. For this example, the icon remains 18 by 18 CSS pixels; the gap is 8 pixels; and the group's center is within one CSS pixel of the button's center at the reference viewport.

Those tolerances are proposed criteria, not results. They need agreement before execution. Font rasterization can vary, so compare the layout bounds and baseline placement rather than demanding identical antialiasing across every platform.

At 390 by 844 and 360 by 800, the footer must remain inside the viewport and the button must not overlap the inventory list. The disabled state must remain noninteractive. Enter or Space on the focused button must invoke the existing action once. A pointer activation must keep the same behavior as before.

The engineer should select focused automated checks where the project supports them. The designer supplies a visual review of the named states. Automated layout measurements do not establish that an icon is the right design choice, and a screenshot does not establish keyboard behavior.

## Capture evidence that belongs to the attempt

Ask for before-and-after captures from the same revision pair, viewport, device scale, and inventory fixture. Name the changed commit and actual setup command. Include the checks run, their outputs, and any checks that could not run.

```text
[ ] Button bounds and icon-label gap match the approved specification.
[ ] Enabled, disabled, focus, and localization states were inspected.
[ ] Narrow viewport has no footer overlap or clipped action label.
[ ] Existing equip action and selection behavior are preserved.
[ ] Evidence identifies the changed revision and capture conditions.
[ ] Designer and engineering reviewer record their separate verdicts.
```

These are human verification steps. An unchecked item cannot be converted into a pass because the default screenshot looks plausible.

## Keep the handoff specific to the missing skill

An **AI game development workflow** can let a designer define a technical change without making them responsible for reviewing every implementation detail. [Wagglet's account of bridging technical skill gaps with task handoffs](https://wagglet.com/blog/close-team-skill-gaps-with-ai-task-handoffs) describes this division of expert context, runner work, and qualified acceptance.

The designer's role is more than approving a final image. They choose the reference, resolve localization conflicts, and judge whether the requested composition was preserved. The engineering reviewer checks that the implementation respects the component and its interaction contract.

This example does not guarantee a shorter task or a better result. Preparing a precise spec takes time, and some changes reveal a larger dependency. The benefit is an explicit decision: accept the bounded adjustment, request specific rework, or return to design because the original requirement cannot fit the real surface.
