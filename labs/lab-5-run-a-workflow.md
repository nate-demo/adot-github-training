# Lab 5: Run a GitHub Actions Workflow

In this lab you will manually trigger the **Continuous Integration**
workflow, review the run logs, and see how a failed workflow behaves.

## Prerequisites

- Lab 3 is complete (you have merged at least one PR)
- Your repository has the workflow files in `.github/workflows/`

## Scenario

GitHub Actions can run on many events: pushes, PRs, schedules,
external webhooks, and manual triggers. You will use the manual
trigger (workflow dispatch) to run the CI workflow on demand.

## The workflow file

The Continuous Integration workflow lives in
`.github/workflows/continuous-integration.yml`. Take a quick look at
its structure before running it:

```yaml
name: Continuous Integration

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch: # <- allows the manual "Run workflow" button

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22.x

      - name: Install Dependencies
        run: npm ci

      - name: Check Format
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Build
        run: npm run build
```

> **Key parts:**
>
> - `on:` — what events cause this workflow to run
> - `jobs:` — one or more jobs that run in parallel (unless linked
>   with `needs:`)
> - `runs-on:` — the runner OS for the job
> - `steps:` — the ordered actions and shell commands inside the job

---

## Task 1: Trigger the CI workflow manually

1. In your browser, open your repository on GitHub
1. Click the **Actions** tab
1. In the left sidebar, click **Continuous Integration**
1. On the right, click the **Run workflow** dropdown
1. Make sure the **main** branch is selected
1. Click **Run workflow**

   A new run appears at the top of the list within a few seconds.

## Task 2: Inspect the run

1. Click the new run
1. Click the **build** job (or whichever job name is used)
1. Expand each step and read the output:

   - **Checkout**
   - **Setup Node.js**
   - **Install Dependencies**
   - **Check Format**
   - **Lint**
   - **Test**

   > **What to notice:** every step has its own log, timing, and exit
   > code. Green = success. Red = failure. Grey = skipped.

## Task 3: See a failure (optional)

Cause a failing check on purpose, then re-run only the failed job.

1. Locally, create a branch

   ```bash
   git checkout main
   git pull
   git checkout -b experiment/broken-lint
   ```

1. Open any `.ts` file in `src/` and introduce a real type error so the
   check fails reliably, for example:

   ```ts
   const brokenValue: number = "this is not a number";
   ```

1. Commit and push

   ```bash
   git add -A
   git commit -m "Intentional type error"
   git push -u origin experiment/broken-lint
   ```

1. Open a PR. The **Continuous Integration** check will fail.
1. Click the failed check, then **Re-run failed jobs** to confirm the
   failure is real
1. Close the PR without merging and delete the branch on GitHub
1. Clean up the branch on your machine too

   ```bash
   git checkout main
   git branch -D experiment/broken-lint
   ```

   > **Why `-D` here:** this branch was never merged, so the safe
   > `git branch -d` would refuse to delete it. The capital `-D`
   > forces the delete — which is what you want for a throwaway
   > experiment.

## Task 4: Cancel a run (optional)

1. Trigger the CI workflow again from **Actions**
1. Click into the new run
1. Click **Cancel workflow** in the top-right

   The run stops mid-execution. You will see the cancelled state.

---

## What you practiced

- Manually triggering a workflow with **Run workflow**
- Reading step-by-step logs
- Re-running only the failed jobs
- Cancelling a running workflow

## Need help?

If **Run workflow** is missing, the workflow file may not have
`workflow_dispatch` in its `on:` triggers. Ask the instructor.
