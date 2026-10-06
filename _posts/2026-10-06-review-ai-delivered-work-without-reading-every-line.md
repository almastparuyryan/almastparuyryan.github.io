---
layout: post
title: "How to review AI-delivered work when you cannot inspect every line"
description: "An evidence checklist and escalation path for a small team reviewing bounded AI-delivered tasks."
date: 2026-10-06 08:00:00 +0400
---

## The founder's review is a routing decision

A founder at a small startup may be accountable for a release without being the best person to review every line of code. That does not mean accepting an agent's “done” message at face value. It means deciding what evidence is enough for a routine change, what needs a qualified reviewer, and what should not be delegated at all.

The common mistake is to treat delivery as acceptance. A runner finishes a task, attaches a passing test, and the task moves straight to a merge. The test may cover the requested path while missing a permission check, a migration consequence, or a behavior nobody wrote into the brief. The founder's useful question is not “Did the agent finish?” It is “Who can judge this change, and what must they see?”

For an AI task handoff for teams, I would make those questions part of the task before anyone begins work.

## Write acceptance evidence before assigning the task

Consider a narrow change to an admin dashboard: a status label should read “Pending review” rather than “Complete” until a human approves an item. The preparer can define the allowed files, expected states, and acceptance evidence before handing the work to a runner.

The runner may be a teammate using a coding agent with their own authorized repository and provider access. They should return the diff, the commands actually run, the observed results, and any limits. They should not receive another person's account or token. A reviewer then judges whether the delivered change meets the brief. That reviewer may be the founder for a copy-only change, but a qualified engineer should inspect a change that affects authorization or state transitions.

A useful brief asks for evidence that can be checked without relying on the runner's summary:

```text
Change: Show "Pending review" until an authorized reviewer approves.

Scope:
- Admin item status component and focused tests.
- No database migration or permission-policy change.

Evidence at delivery:
- Diff or pull request.
- Test command and actual output.
- Before/after behavior for pending and approved states.
- List of untested states or environments.

Acceptance:
- Product owner checks the wording and intended workflow.
- Qualified engineer checks state mapping and permissions.
- Merge remains a separate decision.
```

This is an example brief, not a claim that the change or test has been run.

## Use an evidence checklist, not a confidence score

A short checklist makes review repeatable:

| Check | Evidence to request | Escalate when |
| --- | --- | --- |
| Scope | Changed-file list and diff | Unrequested files, dependencies, or permissions changed |
| Behavior | Reproduction steps and observed output | A key state cannot be reproduced |
| Tests | Exact command, exit status, and relevant output | Tests are missing, flaky, or only described |
| Security | Data and permission impact note | Secrets, customer data, auth, or billing are touched |
| Deployment | Rollback or containment note | A migration or irreversible change is involved |
| Ownership | Named person who can accept the result | No qualified reviewer is available |

The checklist does not certify safety by itself. It tells the founder where the next decision belongs. A screenshot can support a visual check, but it cannot prove a permission boundary. A green test run can support a behavior claim, but it does not prove that the task had the right scope. The evidence must match the risk.

## Escalate by consequence

I would send the dashboard wording to the product owner for the language decision and to an engineer for the state mapping. If the diff only changes visible copy and focused tests, the review can be brief. If it changes the authorization predicate, the task needs deeper engineering review before acceptance. If it exposes customer data or changes billing, pause the handoff and involve the person responsible for that system.

This is where a founder should resist the temptation to inspect unfamiliar code until it “looks fine.” A quick personal skim may create false confidence. The better action is to identify the specialist, require a bounded review, and record the verdict. If no specialist is available, the work can remain delivered but unaccepted.

The same rule applies to work a human teammate completes. The runner's identity changes; the acceptance standard should not.

## Record a decision that can be revisited

For each task, save a small review note:

```text
Decision: Accepted / Changes requested / Escalated
Reviewer:
Evidence inspected:
Known limits:
Merge or deployment decision:
```

An “Accepted” label should say what was accepted. Perhaps the reviewer accepted the copy and component behavior but did not approve deployment. That distinction keeps the record useful when a defect appears later or a similar task is delegated again.

The [Wagglet discussion of meaningful work with human and AI pairs](https://wagglet.com/blog/meaningful-work-with-human-ai-pairs) is relevant to this division of labor: the preparer defines the work, the runner executes with their own authorized tools, and a person with the right expertise judges the result. No workflow tool can substitute for the last step.

The founder does not need to become the universal code reviewer. They need to make sure every consequential change has a named reviewer, evidence that matches its risk, and an explicit acceptance decision. That is a smaller job, and a more reliable one.
