# ADOT GitHub for Developers - Training Repository

This repository is the hands-on workspace for the ADOT GitHub for Developers workshop. Clone it, complete the labs in order, and use the same repo for every exercise.

## Getting your own copy (do this first)

You cannot fork in the sandbox org, so create your own copy from this
**template** repository:

1. On this repo, click **Use this template** -> **Create a new repository**.
1. Set the owner to your **sandbox org**, choose **Internal** visibility,
   and name it (for example `adot-git-<your-name>`).
1. Enable Pages: **Settings** -> **Pages** -> **Source: GitHub Actions**.
1. Clone your new repository (not this one) using the steps below.

> Instructor note: on `nate-demo/adot-github-training`, enable
> **Settings** -> **General** -> **Template repository** before class.

## Quick start with the command line

```bash
git clone <your-repo-url>
cd attendee-repo
npm ci
npm run build
npm test
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Quick start with VS Code

1. Install [VS Code](https://code.visualstudio.com/) and [Git](https://git-scm.com/).
1. Clone your training repository:
   - Press `Ctrl+Shift+P`.
   - Run **Git: Clone**.
   - Paste your repo URL.
   - Open the cloned folder when prompted.
1. Open the integrated terminal with `` Ctrl+` ``.
1. Run:

   ```bash
   npm ci
   npm run dev
   ```

1. Use **Run Task** (`Ctrl+Shift+P` -> **Tasks: Run Task**) for build, test, format check, and dev server commands.

## Workshop labs

The labs are in [`labs/`](./labs/). Work through them in order:

| #   | Lab                                                  | Focus                                   |
| --- | ---------------------------------------------------- | --------------------------------------- |
| 1   | [Everyday Git](./labs/lab-1-everyday-git.md)         | clone, branch, commit, push, PR, merge  |
| 2   | [Protect Main](./labs/lab-2-protect-main.md)         | CODEOWNERS and rulesets                 |
| 3   | [GitHub Flow](./labs/lab-3-github-flow.md)           | PR review and suggestions               |
| 4   | [Merge Conflicts](./labs/lab-4-merge-conflicts.md)   | resolve conflicts in GitHub and locally |
| 5   | [Run a Workflow](./labs/lab-5-run-a-workflow.md)     | trigger and inspect Actions             |
| 6   | [Create a Release](./labs/lab-6-create-a-release.md) | versioning and GitHub Releases          |
| 7   | [Deploy](./labs/lab-7-deploy.md)                     | preview deploys and GitHub Pages        |

## Project layout

```text
.
├── .github/workflows/     # CI, release, and deployment workflows
├── .vscode/               # VS Code tasks and extension recommendations
├── labs/                  # Step-by-step workshop labs
├── solutions/             # Reference snippets for instructors and learners
├── src/                   # TypeScript game code
├── tests/                 # Unit tests
├── index.html             # App shell
└── package.json           # npm scripts and dependencies
```

## Safety rule

Use only the sample code and sample data in this repo. Do not paste production secrets, internal configuration, customer data, or personally identifiable information into GitHub during the workshop.
