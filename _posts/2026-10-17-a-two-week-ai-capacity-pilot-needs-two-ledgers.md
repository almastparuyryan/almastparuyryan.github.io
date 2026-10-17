---
layout: post
title: "A two-week AI capacity pilot needs two ledgers"
description: "An editable model for recovered output, actual avoided spend, and the cost of review."
date: 2026-10-17 00:00:00 +0400
---

Disclosure: This article was drafted with AI for Wagglet's marketing work. The pilot below is fictional; its numbers illustrate accounting choices, not customer results.

An engineer finishes a small maintenance task with capacity that otherwise would have expired at the end of a subscription period. The startup receives a useful patch. Its bank balance does not automatically improve. Those two facts belong in different columns.

A two-week pilot of human supervised AI execution should test whether a team can turn available capacity into accepted work at a reasonable coordination cost. It should also show whether the experiment changes an actual spending decision. Combining those questions into one impressive savings number makes the pilot harder to evaluate.

## Start with the decision you will make

Before assigning work, write the decision the pilot will inform. For example: “After ten working days, decide whether to allocate two maintenance tasks per week to this workflow.” That is a smaller, testable question than whether AI makes the company more productive.

Choose work with observable acceptance criteria. Updating a dependency compatibility table is easier to measure than “improve engineering velocity.” Identify the person who prepares the brief, the person who executes it, and the reviewer who accepts or rejects the result. The executor uses their own authorized account and repository access. A handoff transfers a scoped task and its evidence, never a provider login or subscription entitlement.

The requester should also record what would have happened without the pilot: work deferred, work performed internally, or a purchase already planned. These alternatives have different financial implications.

## Keep an output ledger

Use one row per task. The following CSV is an editable starting point; replace every example value before treating it as a result.

```csv
task,status,baseline_hours,brief_hours,execution_hours,review_hours,rework_hours,accepted
compatibility-table,illustration,3.0,0.4,1.0,0.5,0.2,yes
```

Baseline hours estimate the internal effort for equivalent accepted scope. Record the source of that estimate before execution. A rough recollection made after seeing the result invites optimism. Execution hours here mean human attention spent running or supervising tools, not wall-clock model time. Avoid counting the same person-minute in both execution and review.

For the illustrative row, human time consumed is 0.4 + 1.0 + 0.5 + 0.2 = 2.1 hours. Against a three-hour baseline, the model reports 0.9 hours of recovered capacity. It reports that only because the work was accepted. A rejected patch contributes its costs and zero accepted output.

If the team would have deferred the task indefinitely, label the result “newly completed work.” Do not quietly turn a speculative baseline into time saved from an actual schedule.

## Keep a separate cash ledger

```csv
task,planned_purchase,documented_cancelled_amount,incremental_tool_cost,incremental_paid_labor,net_cash_change
compatibility-table,no,0,0,0,0
external-audit-example,yes,300,40,60,200
```

The second row is another fictional scenario, not an extension of the first. It demonstrates the rule: a documented $300 purchase avoided, minus $40 in incremental tools and $60 in additional paid labor, yields $200 in net avoided spend. If the audit still needs to happen, avoided spend is zero. If the output does not satisfy the purchase's requirements, cancelling it is not evidence of equivalent value.

Do not multiply 0.9 recovered hours by a salary rate and call the product cash saved. Salaried capacity can be useful without reducing payroll. Existing subscriptions also do not become “free”; record their allocated cost separately if the decision requires a fully loaded view.

## Use formulas that admit negative results

In a spreadsheet, put baseline hours in C, brief hours in D, execution in E, review in F, rework in G, and accepted status in H. A task-level capacity formula is:

```text
=IF(H2="yes",C2,0)-SUM(D2:G2)
```

A rejected task therefore remains a cost. Do not wrap the formula in MAX(0, ...). That would hide the cases where the process consumes more attention than it returns. Sum the cash ledger independently. Report both totals, the number of accepted tasks, and unresolved review decisions.

## Review the pilot at the boundary

At the end of week one, inspect the process before expanding scope. Did missing permissions force the runner to stop? Were acceptance checks clear enough for someone other than the requester? Did review consume more time than the task would have taken directly?

At the end of week two, the reviewer signs off on accepted outputs and the budget owner checks claimed cancelled purchases. Unaccepted work stays pending. A runner's “complete” message is evidence submitted for review, not a substitute for acceptance.

The [Wagglet discussion of unused coding-agent capacity](https://wagglet.com/blog/use-unused-claude-code-codex-capacity) provides context for turning available capacity into bounded work. Use the two ledgers to judge the local experiment without assuming that available usage, completed output, and avoided expenditure are interchangeable.

Before repeating the pilot, confirm four things: each output has an acceptance receipt, baseline estimates have a stated source, all human attention is counted once, and every cash claim names a real spending decision. If only the first ledger improves, report a capacity gain. That can justify another experiment on its own terms.
