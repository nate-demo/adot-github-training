# ADOT GitHub for Developers - Training Repository

This repository is the hands-on workspace for the ADOT GitHub for Developers workshop. Clone it, complete the labs in order, and use the same repo for every exercise.

> **First time here?** Make sure you've finished [SETUP.md](./SETUP.md) —
> it installs Git, VS Code, Node.js, and the GitHub CLI. Once your setup
> is complete, follow the steps below to create your own repo.

## Getting your own copy (do this first)

You can't fork inside the sandbox org, so you'll create your own copy from
the shared **template** repository instead.

1. Open the template repo:
   [github.com/nate-demo/adot-github-training](https://github.com/nate-demo/adot-github-training).
1. Click the green **Use this template** button, then choose
   **Create a new repository**.
1. On the create page:
   - **Owner:** select your **sandbox org**.
   - **Repository name:** use `adot-git-<your-name>` (for example
     `adot-git-alex`).
   - **Visibility:** choose **Internal**.
   - Click **Create repository**.
1. Turn on GitHub Pages so your site can deploy later:
   - In your **new** repo, go to the **Settings** tab.
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** -> **Source**, select
     **GitHub Actions**. (There's nothing to save — it applies immediately.)
1. Clone your **new** repository (not the template) using the steps below.

## Quick start with the command line

```bash
git clone <your-repo-url>
cd <your-repo>
npm ci        # install dependencies
npm run build # compile the app
npm test      # run the unit tests
npm run dev   # start the local dev server
```

Open the local URL printed by Vite, usually `http://localhost:5173`, and
play a round of the game to confirm everything works.

To stop the dev server, click the terminal and press `Ctrl+C`.

Once the game runs, **you're ready for [Lab 1: Everyday Git](./labs/lab-1-everyday-git.md).**

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
   npm ci        # install dependencies
   npm run dev   # start the local dev server
   ```

1. Open the local URL printed by Vite (usually `http://localhost:5173`) and
   play a round to confirm the game works.
1. To stop the dev server, click the terminal and press `Ctrl+C`.

**Once the game runs, you're ready for [Lab 1: Everyday Git](./labs/lab-1-everyday-git.md).**

### Running project tasks in VS Code

Instead of typing npm commands, you can use VS Code's built-in task runner:
press `Ctrl+Shift+P`, choose **Tasks: Run Task**, then pick one of these:

| Task                     | What it does                                           |
| ------------------------ | ------------------------------------------------------ |
| **Install dependencies** | Runs `npm ci` to install packages.                     |
| **Start dev server**     | Runs `npm run dev` to launch the game locally.         |
| **Build**                | Runs `npm run build` to compile the app.               |
| **Test**                 | Runs `npm test` to run the unit tests.                 |
| **Format check**         | Runs `npm run format:check` to verify code formatting. |

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
