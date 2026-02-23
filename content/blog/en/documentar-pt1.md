---
title: "Documenting without losing your mind in the process"
date: "2026-02-22"
excerpt: "How to turn the work you're already doing into documentation others actually use."
---

# Documenting without losing your mind in the process

I recently joined Mercado Libre. I come from experiences where order, documentation, and evidence of work were part of the process from the start, so when I solve something I tend to be quite detailed in how I record it. At first it can seem excessive, even a waste of time.

But it wasn't long before a more senior teammate told me something that confirmed it was worth it. Another new hire had written to him asking about a procedure, and instead of explaining it from scratch, he had sent them directly one of my tasks where everything was documented. That's exactly what this habit produces when it works: knowledge stops depending on the right person being available.

It's not the first time I've seen it happen. At Voxel Group, where I spent almost three years, documenting within tasks became a natural practice for the team. When someone needed to understand how something similar had been solved, the answer was almost always a link to a previous task.

## Why the wiki doesn't work

The promise of Confluence or Notion is appealing: a centralized place where all team knowledge lives, organized, searchable, always available. In theory, perfect.

In practice, the problem is maintenance. Writing documentation outside the workflow is an activity that competes with everything else. It requires remembering to do it, deciding where it goes, writing it in an acceptable format, and then keeping it up to date every time something changes. That last part is, by far, the hardest.

What ends up happening is predictable: documentation is written enthusiastically at the start and then gradually abandoned. The most valuable articles are the oldest ones. And nobody knows whether what they're reading reflects how the system works today or how it worked eighteen months ago.

The problem isn't that teams are careless. It's that the format demands effort separate from the work, and that effort rarely survives the pressure of day-to-day.

## Document inside the task

What I propose is simpler: document inside the same tasks, user stories, or issues you already use to work.

When I start solving something that involves non-trivial steps—interacting with different systems, gathering information from multiple sources, or following a specific procedure—I leave comments inside that same task. Not in a separate doc, not in a new wiki. Right there, in Jira, in Linear, in GitHub Issues, wherever the work lives.

To make it concrete, here's what it looks like in practice. Say a task to "configure the staging pipeline":

- **Comment 1** (while you're working): _"Step 3 requires IAM permissions that aren't in the official docs. You have to request them from DevOps before starting."_
- **Comment 2** (when you solve it): _"The command that worked was `aws iam attach-role-policy --role-name staging-deployer --policy-arn arn:aws:iam::ACCOUNT_ID:policy/StagingDeploy`. The policy ARN is in the onboarding doc."_
- **Comment 3** (when closing): _"Linked to [TASK-142] where something similar was done for production, same structure, different env vars."_

Those three comments didn't take more than ten minutes in total. And they form something no wiki naturally produces: a timeline of what happened, with the intermediate decisions and the context that explains them. It's not a generic article about "how to do X", it's the record of how X was done in this specific task. And unlike a wiki, you don't have to decide where it goes, there's no mandatory format, and only what actually required work ends up documented.

## The reference tree

One of the most useful parts of this approach is how it handles change over time.

Suppose you documented the process for doing a deploy. Six months later, the process changed partially. Instead of editing the old documentation and losing history, you create the new task, document the updated process, and link from there to the previous task. The old one stays as historical reference, the new one as the current procedure.

At Voxel this was a sustained practice for the almost three years I was there, with teams that changed and grew. In practice, the tree never went beyond three levels deep: when a process had changed so much that you couldn't recognize the original base, it made more sense to replace it than to keep chaining. But within those three levels, you could trace how something had evolved, what had changed and why, without asking anyone. That's hard to get with a traditional wiki, where editing erases history and the previous version simply disappears.

## Common mistakes when documenting

**Documenting too late.** When you finish the task and try to write everything from memory, you lose the details that matter. The value is in documenting as you go, not after.

**Trying to make it perfect from the start.** Comments in a task don't need polished prose. A bullet, a URL, a decision written in one line. That's enough. Perfectionism is the main enemy of documentation.

**Putting the information in too many places.** The classic mistake of large teams: the same information in Confluence, in Notion, in a README, and in a Slack channel. When something changes, it gets updated in one place and the rest falls out of sync. Having one source of truth, even if imperfect, is better than having four perfect sources that diverge.

**Assuming others will find it on their own.** Documenting is half the work. The other half is making it discoverable. Link from code, mention the task in discussions, build the habit of searching before asking.

## How to start

You don't need to change anything on the team to try this. Next time you're working on something that involves more than two non-obvious steps, leave a comment in the task. Just that.

The value becomes clear the first time you need that information again and find it there, with full context, without having to rebuild it from scratch. Or even better, when someone else finds it before asking you.

_— Juan Cruz Medina_
