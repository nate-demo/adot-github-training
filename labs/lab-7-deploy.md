# Lab 7: Deploy to an Environment

In this lab you will use pull request comments to trigger deployments
to a GitHub Pages environment. This lets you preview a branch before
merging it.

## Prerequisites

- Lab 6 is complete (you have created a release)
- The `.deploy` slash-command workflow is installed in
  `.github/workflows/` (the template already includes it)

## Scenario

Merging to `main` deploys to GitHub Pages automatically. But how do
you preview an in-flight change _without_ merging it? GitHub
environments plus a comment-driven workflow let you deploy any branch
to your Pages environment on demand — and roll back just as easily.

## How the deploy workflow is wired

The template repo already contains a workflow that listens for
`issue_comment` events on pull requests. When someone comments `.deploy`, it
deploys the PR branch. When someone comments `.deploy <ref>`, it deploys the
requested ref, such as `main`.

The important parts look like this:

```yaml
name: Deploy on Comment

on:
  issue_comment:
    types: [created]

jobs:
  deploy:
    if: >-
      github.event.issue.pull_request &&
      startsWith(github.event.comment.body, '.deploy')
    runs-on: ubuntu-latest
    environment: github-pages # <- ties the run to the environment
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - name: Checkout requested ref
        uses: actions/checkout@v4
        with:
          ref: ${{ steps.ref.outputs.ref }}

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        uses: actions/deploy-pages@v4
```

> **Why this is safe:** the `environment:` line means the run shows
> up under **Environments** in the repo, and you can require reviewer
> approval, restrict which branches can deploy, or add a wait timer
> in the environment settings.

---

## Task 1: Create a feature branch

1. Make sure you are on `main`

   ```bash
   git checkout main
   git pull
   ```

1. Create a branch for a new feature

   ```bash
   git checkout -b feature/high-score
   ```

## Task 2: Add the feature

1. Open [`src/local_storage_manager.ts`](../src/local_storage_manager.ts)
1. Find the comment `// Lab 7: Update Best Score`
1. Add the following line below the comment

   ```ts
   LocalStorageManager.storage.setItem("bestScore", score.toString());
   ```

1. Save, stage, commit, push

   ```bash
   git add src/local_storage_manager.ts
   git commit -m "Save best score to local storage"
   git push -u origin feature/high-score
   ```

## Task 3: Open a pull request

1. Open the repo on GitHub
1. Click **Pull requests**, then **New pull request**
1. Base: `main`. Compare: `feature/high-score`
1. Title: `Save best score`
1. Click **Create pull request**

## Task 4: Deploy the branch to the `github-pages` environment

1. Scroll to the **Add a comment** section of your PR
1. Type `.deploy` and submit the comment

   Within a few seconds, a bot comment appears saying a deployment is
   in progress. The **Deployments** panel shows the run.

1. Wait for a follow-up bot comment with a link to your deployed game
1. Click the link and confirm your **BEST** score persists between
   games

## Task 5: Roll back to `main`

You only have one Pages environment, so let's put the shipped version
back.

1. In the same PR, add another comment: `.deploy main`
1. Wait for the bot to confirm the rollback
1. Open the link — best-score persistence should be gone again

## Task 6: Approve, merge, and confirm the automatic deploy

1. Ask your partner to review and approve the PR
1. Merge into `main`, delete the branch
1. Watch the **Deploy to GitHub Pages** workflow run automatically
1. Refresh your Pages link — best-score persistence is back, this
   time from `main`

---

## What you practiced

- Preview-deploying a branch with a PR comment
- Rolling a Pages environment back to `main`
- Confirming the automatic deploy on merge

## Prevention and safety notes

- **One environment.** In this training you have a single Pages
  environment. In production, use a `staging` environment separate
  from `production` so previews cannot affect real users.
- **Deploy protections.** Environments can require reviewers, restrict
  branches, or add wait timers. Explore those in the environment
  settings for extra safety.

## Need help?

If `.deploy` does not trigger anything, the slash-command workflow may
be missing or paused. Ask the instructor.
