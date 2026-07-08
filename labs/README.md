# ADOT Labs — GitHub for Developers VBD

This folder contains the hands-on labs for the ADOT GitHub for
Developers workshop. Each lab is a single markdown file that you can
open in any editor or preview on GitHub.com.

## How to use these labs

- Work through them in order. Each one builds on the last.
- Every lab lists prerequisites at the top — don't skip them.
- Copy commands **one block at a time** and read the surrounding text
  before you paste. The point is to understand what each command does,
  not to race to the end.
- If you get stuck, ask a neighbor or raise your hand.

## Labs

Ordered to match the workshop agenda.

**Day 1**

| #   | Lab                                     | Est. time | You will learn                                                       |
| --- | --------------------------------------- | --------- | -------------------------------------------------------------------- |
| 1   | [Everyday Git](./lab-1-everyday-git.md) | 30 min    | The daily workflow: clone, branch, commit, push, PR, merge, cleanup. |
| 2   | [Protect Main](./lab-2-protect-main.md) | 20 min    | Use CODEOWNERS and rulesets to block direct pushes to `main`.        |
| 3   | [GitHub Flow](./lab-3-github-flow.md)   | 30 min    | Open, review, suggest changes on, and approve a pull request.        |

**Day 2**

| #   | Lab                                             | Est. time | You will learn                                                                |
| --- | ----------------------------------------------- | --------- | ----------------------------------------------------------------------------- |
| 4   | [Merge Conflicts](./lab-4-merge-conflicts.md)   | 40 min    | Create your own conflict, then resolve it in the UI and on the command line.  |
| 5   | [Run a Workflow](./lab-5-run-a-workflow.md)     | 20 min    | Trigger a GitHub Actions workflow, inspect logs, re-run and cancel.           |
| 6   | [Create a Release](./lab-6-create-a-release.md) | 25 min    | Version bump, release branch, tagged release with notes.                      |
| 7   | [Deploy](./lab-7-deploy.md)                     | 25 min    | Preview-deploy a branch to a GitHub Pages environment, roll back, then merge. |

## Getting your own copy (do this first)

You cannot fork in the sandbox org, so each of you will create your own
copy from the shared **template** repository:

1. Go to the training repo:
   `https://github.com/nate-demo/adot-github-training`.
1. Click **Use this template** -> **Create a new repository**.
1. Set the owner to your **sandbox org**, choose **Internal** visibility
   (so your partner can review your PRs in Labs 3, 6, and 7), and give it
   a name such as `adot-git-<your-name>`.
1. Click **Create repository**. You are now the admin/owner of your copy.
1. Enable Pages: **Settings** -> **Pages** -> set **Source** to
   **GitHub Actions** (required for Labs 1 and 7).
1. Clone your new repo and install dependencies:

   ```bash
   git clone <your-new-repo-url>
   cd <your-repo>
   npm ci
   ```

## Setup options

Use whichever workflow is most comfortable. Both are supported throughout the labs.

### Command line

```bash
git clone <your-repo-url>
cd <your-repo>
npm ci
npm run build
npm test
```

### VS Code

1. Press `Ctrl+Shift+P` and run **Git: Clone**.
1. Paste your training repo URL and open the cloned folder.
1. Open the integrated terminal with `` Ctrl+` ``.
1. Run `npm ci`.
1. Use **Tasks: Run Task** for **Build**, **Test**, **Format check**, and **Start dev server**.

## Prerequisites

Before Day 1, make sure you have:

- A GitHub account with 2FA enabled
- Git installed and configured with your `user.name` and `user.email`
- Git Credential Manager (on Windows, installed with Git for Windows)
  or GitHub CLI (`gh auth login`)
- An editor — VS Code is recommended
- Access to your training repository
- Node.js 22 or newer for local build/test commands

Quick check:

```bash
git --version
git config --global user.name
git config --global user.email
```

## About the numbering

The upstream `githubschool/gh-github-intermediate-template` repo has
11 labs including several advanced Git topics (tags, bisect,
interactive rebase, cherry-pick). Those are intentionally left out of
the ADOT flow because they are not part of the day-to-day workflow
for a beginner-to-intermediate audience. They remain available in the
upstream repo if you want to explore them.

| ADOT lab                 | Upstream reference                             |
| ------------------------ | ---------------------------------------------- |
| Lab 1 (Everyday Git)     | Lab 0 (Clone) + Lab 1 (Add a Feature) combined |
| Lab 2 (Protect Main)     | Lab 6 (Protect the `main` Branch)              |
| Lab 3 (GitHub Flow)      | Lab 7 (GitHub Flow)                            |
| Lab 4 (Merge Conflicts)  | Lab 8 — **rewritten to be learner-driven**     |
| Lab 5 (Run a Workflow)   | Lab 9 — **added re-run and cancel practice**   |
| Lab 6 (Create a Release) | Lab 10 (Create a Release)                      |
| Lab 7 (Deploy)           | Lab 11 (Deploy to an Environment)              |

## Help and feedback

- The `solutions/` folder in the training repo contains reference
  code for each lab.
- If a step is confusing or an image is missing, note it and flag it
  at the end of the session.
