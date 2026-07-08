# ADOT Lab Index

This is the streamlined lab flow for the ADOT GitHub for Developers
VBD. It maps to the deck agenda (2 days, ~3 hours 20 minutes per day) and
covers everyday workflows before the more advanced topics.

Each lab is a single markdown file — no folders, no separate READMEs.

## Day 1

| #   | File                                               | Est. time | Concepts                                        |
| --- | -------------------------------------------------- | --------- | ----------------------------------------------- |
| 1   | [`lab-1-everyday-git.md`](./lab-1-everyday-git.md) | 30 min    | clone, branch, commit, push, PR, merge, cleanup |
| 2   | [`lab-2-protect-main.md`](./lab-2-protect-main.md) | 20 min    | CODEOWNERS, rulesets, blocked pushes            |
| 3   | [`lab-3-github-flow.md`](./lab-3-github-flow.md)   | 30 min    | PRs, reviews, suggestions, approvals            |

## Day 2

| #   | File                                                       | Est. time | Concepts                                    |
| --- | ---------------------------------------------------------- | --------- | ------------------------------------------- |
| 4   | [`lab-4-merge-conflicts.md`](./lab-4-merge-conflicts.md)   | 40 min    | learner-driven conflicts, UI + command line |
| 5   | [`lab-5-run-a-workflow.md`](./lab-5-run-a-workflow.md)     | 20 min    | Actions, workflow dispatch, logs, re-run    |
| 6   | [`lab-6-create-a-release.md`](./lab-6-create-a-release.md) | 25 min    | semver, release branches, tags, notes       |
| 7   | [`lab-7-deploy.md`](./lab-7-deploy.md)                     | 25 min    | environments, PR-comment deploys, rollback  |

## Prerequisites (before Day 1)

- GitHub account with 2FA enabled
- Git installed and configured with `user.name` / `user.email`
- Git Credential Manager (Windows) or `gh auth login`
- Editor of choice (VS Code recommended)
- Access to the training repository
- Node.js 22 or newer

## Working style

Every lab includes commands that work in any terminal. If you prefer VS Code,
open the repository folder, use the integrated terminal, and use the provided
VS Code tasks for build, test, format check, and the dev server.
