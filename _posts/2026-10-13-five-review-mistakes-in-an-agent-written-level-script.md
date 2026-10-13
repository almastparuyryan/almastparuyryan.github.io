---
layout: post
title: "Five review mistakes in an agent written level script"
description: "Use a read only training room fixture to separate design judgment from qualified code review."
date: 2026-10-13
---

Disclosure: AI-generated draft prepared for a Wagglet marketing task. The level is a fictional training fixture. The execution checks described here were run locally; qualified human code review remains pending.

A designer can tell whether an exit belongs in the corner of a room without being able to judge every line of a JavaScript parser. An engineer can judge that parser without knowing why the checkpoint moved. Reviewing a small agent-written level script works best when both kinds of knowledge are requested explicitly.

Consider a script that reads a level file and prints a summary. The room is twelve units wide and eight units high. Its three spawn points are a player start, a checkpoint, and an exit. The script should report those roles and reject invalid coordinates while leaving the input untouched.

This looks like a modest task. The review can still fail in several predictable ways.

## Mistake one is asking the designer to approve everything

“Please check the script” leaves the reviewer guessing what their approval means. The designer may inspect the printed summary and reasonably conclude that the room looks correct. Someone else may later interpret that approval as proof that the code handles malformed input or never writes a file.

Give the designer a narrower decision. They confirm the level name, spawn roles, intended positions, and coordinate convention. A qualified engineer reviews input validation and implementation. The runner records the execution, using their own authorized workspace and tools.

The task author prepares the fixture and expected output before the agent works. If the expected behavior is still disputed, the task returns to design. Generating code cannot resolve an unknown convention by itself.

## Mistake two is using the production level as a fixture

A large real level can contain unrelated entities, private content, and dependencies the reviewer does not understand. It also makes a small defect hard to see. Begin with a synthetic room that contains only the fields the script needs.

The supplied `level.json` has dimensions 12 by 8 and positions (2, 2), (8, 4), and (11, 7). Its convention includes zero but excludes the upper boundary. A point at X equals 12 is invalid. That detail belongs in the brief because an inclusive boundary would produce a different answer.

The sample contains no file paths to follow, executable expressions, or requests to modify a game project. It lets the reviewer concentrate on the stated contract. Passing this fixture does not establish support for a real engine's level format.

## Mistake three is comparing only the count

Three reported spawns might still describe the wrong room. Compare identity as well as quantity. The supplied read-only tool prints:

```json
{
  "level": "training-room",
  "spawnCount": 3,
  "spawnIds": ["player", "checkpoint", "exit"],
  "bounds": {"width": 12, "height": 8},
  "mode": "read-only"
}
```

Run it with `node inspect-level.mjs level.json`. Inspect the input separately to check each coordinate. This output deliberately reports a summary; it does not prove that the exit is reachable or that the checkpoint has the right gameplay meaning.

The local execution produced the expected JSON with exit code zero. A temporary fixture with a repeated `player` ID produced an error and exit code one. The original file's SHA-256 stayed unchanged. These are specific observations about the sample, not a complete parser audit.

## Mistake four is treating a success label as evidence

The word `read-only` in stdout is a useful declaration, but the implementation must support it. The engineer needs to read the actual filesystem calls and inspect the changed files. A script could print the right summary and still make an unrelated write.

Likewise, an agent's statement that validation passed is weaker than the command and its real output. Save the exit code and result. If the check could not run, say why. Do not replace a missing check with a reassuring explanation.

Ask the engineer to inspect finite-number validation, duplicate IDs, bounds handling, and visible error behavior. The fixture's size guard happens after file reading, so it does not protect a service from large untrusted uploads. That limitation is acceptable for a local training tool and significant if somebody proposes a web upload endpoint.

## Mistake five is expanding scope during acceptance

A reviewer may suggest auto-fixing invalid coordinates or exporting an engine-ready level. Those could be useful follow-up tasks, but they change the contract. A script that only describes a file is easier to reason about than one that rewrites it.

Record the new request separately. Keep acceptance attached to the reviewed script revision, fixture, and actual checks. The designer's approval means the agreed room is represented correctly. The engineer's approval means the bounded implementation is suitable for that use. Neither silently authorizes production deployment.

This division gives **human AI collaboration in game development** a practical shape. [Wagglet's account of meaningful work with human and AI pairs](https://wagglet.com/blog/meaningful-work-with-human-ai-pairs) discusses bounded contributions that preserve human judgment. In this example, the designer supplies meaning, the runner supplies a reproducible execution record, and the engineer supplies technical review.

The script remains a training tool until those decisions are made. Its value is a review that people can understand and repeat, with each approval connected to the part that person is qualified to judge.


[Download the read-only training-room fixture](https://almastparuyryan.github.io/day09-level-tool-source.zip).
