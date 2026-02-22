---
title: "Refactoring Legacy Code"
date: "2025-01-15"
excerpt: "Notes on approaching legacy codebases: where to start, how to reduce risk, and when to stop."
---

# Refactoring Legacy Code

Working with legacy code is part of the job. Here are a few principles I keep in mind.

## Start with tests (when you can)

If there are no tests, add a thin slice: one critical path, one integration test. It doesn’t have to be full coverage—just enough to notice when you break behaviour.

## Small steps

One rename, one extracted function, one dependency injection at a time. Small commits make it easier to revert and to review.

## Understand before changing

Spend time reading and tracing before refactoring. A quick sketch of call flow or data flow helps avoid “fixing” the wrong thing.

## Know when to stop

Not every file needs to be clean. Focus on areas you touch often or that block new features. The rest can wait.

---

*You can expand this into a longer post with examples from your own experience (e.g. Voxel, NUC, or Fulltrace).*
