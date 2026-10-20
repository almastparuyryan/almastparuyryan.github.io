---
layout: post
title: "A small team can audit a fix without reconstructing the chat"
description: "A fictional CSV repair shows how a request, a claimed attempt and an acceptance receipt fit together."
date: 2026-10-20 11:00:00 +0400
---

AI assisted this article for Wagglet-related marketing. This case study is fictional. Its people, records, and timeline illustrate a review method rather than an actual customer result.

A small team often remembers its work through chat. Someone posts a bug, a developer says they will look, and a preview appears later in the thread. That can be enough to coordinate the afternoon. It is a poor place to reconstruct the accepted scope several weeks later, especially when an agent helped produce the change.

The case below follows a narrow CSV export repair. The lesson for evaluating AI agent task management software is to inspect the connection between the request and the accepted artifact. A board’s current status cannot explain that connection on its own.

## The fictional team and its request

A four-person internal-tools team maintains a supplier directory. An operations teammate reports that exporting a supplier named `North, West` produces an extra CSV column. They include a sanitized example containing a single synthetic supplier and no contact information.

The engineer preparing the task identifies the required behavior: preserve a comma inside a quoted field, escape embedded double quotes, and keep the existing header order. The task excludes changing the report’s fields or introducing a new export format.

The requester cares about the report opening correctly in their spreadsheet application. The engineer cares about the serializer’s behavior. These are related acceptance questions, and the brief names who will check each one. The runner can then use an agent in their own authorized development environment without guessing what “export fixed” means.

## Preparation leaves the first useful receipt

At the preparation stage, the author records the input fixture, expected header, and a small table of edge cases. The expected examples include an ordinary name, a name containing a comma, and a name containing a double quote. The human instructions ask the runner to open the produced file in the named spreadsheet application.

Those instructions are a plan, not a passing result. They establish what evidence the later delivery must bring back. The author also identifies an engineering reviewer for serializer behavior and the operations requester for the file-opening check.

This split keeps the task bounded. A successful parser test does not automatically establish the user’s spreadsheet behavior. A visually plausible file does not automatically establish correct escaping for every fixture.

## Claim and execution identify one attempt

An eligible teammate claims the prepared work. Their agent checks the repository and implements the serializer adjustment. The runner uses their own approved tools and access. The task text does not contain someone else’s credentials, and claiming it does not grant production permissions.

The fictional first delivery identifies revision A and includes the fixture output. Its automated cases cover commas and ordinary names. The report leaves the embedded-quote case untested and says so. That limitation matters more than a confident sentence about completion.

The reviewer compares the report against the brief and sends the work back with an exact failing string: `The "North" Office`. The same runner corrects the escaping behavior and returns revision B with the expanded fixture output. Both reports remain in the history, so a later reader can see why the second attempt exists.

## A timeline with evidence at each step

The following sequence is illustrative and contains no measured team timings:

```text
Request       Synthetic supplier exposes a column split
Preparation   Author defines comma, quote and header behavior
Claim         Eligible runner starts the recorded attempt
Execution     Agent assists the runner with revision A
Evidence      First fixture output omits one required edge case
Review        Reviewer names the embedded-quote failure
Rework        Same runner returns revision B and expanded output
Verdict       Reviewer accepts B after the named checks
Release       Merge and deployment remain separate records
```

The records need enough detail to connect adjacent steps. The delivery should identify the implemented brief. The review feedback should name the failed expectation. The acceptance should identify the artifact that passed review. A timestamp without that connection adds little confidence.

Wagglet’s [request-to-delivery workflow](https://wagglet.com/blog/wagglet-workflow-request-draft-ticket-delivery) describes how preparation, claim, delivery, and reviewer judgment fit into the product. The fictional CSV case applies that separation to a small, inspectable change.

## Acceptance closes a specific question

For revision B, the engineer verifies the synthetic escaping cases and header order. The operations requester confirms the file-opening behavior in the named application. The acceptance note identifies those checks and the revision they covered.

That note still should not say “deployed” unless a release record proves it. If the repository merge is blocked, the task can have an accepted outcome while its code waits to land. If deployment happens later, record that later fact without rewriting the earlier acceptance.

An independent reviewer should also be identified honestly. When the runner reviews their own work, the record should say so rather than inventing a second person. Small teams sometimes need a self-check, but they benefit from distinguishing it from independent acceptance.

## What this case does not establish

The synthetic fixture cannot prove compatibility with every spreadsheet application or character encoding. It does not measure time saved, compare models, or show that a workflow tool prevents every audit gap. Real teams must choose their own fixtures, supported applications, and review responsibilities.

The useful result is narrower: a future teammate can identify the request, the agreed scope, the runner’s attempts, and the evidence behind acceptance. They can also see what remains unknown. The task history can then answer an audit question without relying on the memory of whoever happened to be online that afternoon.
