---
title: "Documenting without losing your mind"
date: "2026-02-22"
excerpt: "How to turn the work you're already doing into documentation people actually use."
---

# Documenting without losing your mind

_How to turn the work you're already doing into documentation people actually use._

---

Every time I join a new company, I run into the same situation: the documentation exists, but it's outdated, scattered across three different tools, and nobody knows for sure which version is the right one. Or worse — it doesn't exist at all, and the knowledge lives in the heads of the people who've been on the team the longest.

Some time ago I started experimenting with a different way of documenting. It's not a complex system and it doesn't require heroic discipline. In fact, its biggest strength is that it almost builds itself, as a byproduct of the work you're already doing.

---

## The problem with traditional documentation

The promise of a wiki or Confluence is attractive: a centralized place where all team knowledge lives, organized, searchable, always available. In theory, perfect.

In practice, the problem is maintenance. Writing documentation outside the work stream is an activity that competes with everything else. You have to remember to do it, decide where it belongs, write it in an acceptable format, and then — the hardest part — keep it up to date every time something changes.

What ends up happening is predictable: documentation is written enthusiastically at the beginning and then gradually abandoned. The most valuable articles are the oldest ones. And nobody knows whether what they're reading reflects how the system works today or how it worked eighteen months ago.

The issue isn't that teams are careless. It's that the format demands effort separate from the work, and that effort rarely survives day-to-day pressure.

---

## The idea: use the task tracker as the first layer of documentation

What I propose is simpler: document inside the same tasks, user stories, or issues you're already using to work.

When I start solving a task that involves non-trivial steps — interacting with different systems, collecting information from multiple sources, following a specific procedure — I leave comments inside that same task. Not in a separate doc, not in a new wiki. Right there: Jira, Linear, GitHub Issues — wherever the work lives.

Those comments form a natural timeline: what I did first, what I found, what decision I made and why, what happened next. No special format, no mandatory structure. Just a record of what happened.

---

## Why it works

The main reason is that it removes the friction of deciding _where_ documentation should go. That question — does this belong in Confluence, Notion, the README, a Slack channel? — seems small, but it consumes real energy and creates inconsistency in medium and large teams.

When the answer is always "in the task", the problem disappears.

But there's more:

**Documentation is anchored to context.** It's not a generic article about "how to do X". It's the record of how X was done in this specific task, with the details that mattered at the time. That makes it more useful and more honest.

**It updates naturally.** If in the future a similar task shows up but the process has changed somewhere, you document it on that new task. And if it's a variation — a branch in the tree, not a replacement — you document it there and link back to the original. References keep themselves up to date because they live in the same system.

**It documents what is worth documenting.** Only things that actually required work end up documented. There's no pressure to document just for the sake of it.

---

## The reference tree

One of the most useful parts of this approach is how it handles change.

Suppose you had a task where you documented the process to do a deploy. Six months later, the process changes partially — there's a new step, another one disappears. Instead of editing the old documentation and losing history, you create a new task, document the updated process, and link back to the previous task. The old one remains as historical reference; the new one becomes the current procedure.

Over time, this forms a reference tree: you can trace how a process evolved, what changed and when, and why certain decisions were made. That's something no traditional wiki gives you naturally.

---

## Common mistakes when documenting

Some patterns worth avoiding, regardless of the system you use:

**Documenting too late.** When you finish the task and try to write everything from memory, you lose the details that matter. The value is in documenting as you go, not after.

**Trying to make it "well written" from the start.** Comments in a task don't need perfect prose. A bullet, a URL, a decision written in one line — that's enough. Perfectionism is the main enemy of documentation.

**Documenting in the wrong place.** The classic big-team mistake: the same info in Confluence, Notion, a README, and a Slack channel. When something changes, it's updated in one place and the rest falls out of sync. Having one source of truth — even if imperfect — is better than four perfect sources that drift apart.

**Assuming others will find it on their own.** Documenting is half the work. The other half is making it discoverable: linking from code, mentioning the task in discussions, building the habit of searching before asking.

---

## What this solves for the team

I've seen the situation many times where a teammate — sometimes someone who's been at the company longer than me — comes with a question about a process and the answer is sitting in a task from months ago. Being able to point to that place, with full context, the timeline, the intermediate decisions, has value beyond solving the immediate question.

It builds trust. It tells the team that knowledge is captured, that it doesn't depend on a specific person being available, and that it's possible to operate more autonomously.

For leaders, there's also a visibility benefit: well-documented tasks make it easier to understand what happened in a sprint, why something took longer than expected, or how a complex technical problem was solved.

---

## How to start

You don't need to change anything in the team to try this. Next time you're working on something that involves more than two non-obvious steps, leave a comment in the task. That's it.

Over time, the habit installs itself — because when you need that information again and you find it there, the value is immediate and concrete.

It's one of the practices I'm most proud of, because it didn't come from an imposed process; it came from observing a real problem and finding the simplest possible solution. And the best signal that something works is when others adopt it without being asked.

---

> Documentation shouldn't be a separate task. It should be the natural footprint of working well.

---

_— Juan Cruz Medina_
