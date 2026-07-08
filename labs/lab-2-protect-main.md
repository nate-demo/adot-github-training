# Lab 2: Protect Main

In this lab you will add a `CODEOWNERS` file, enable branch protection
with a repository ruleset, and see what happens when someone tries to
push directly to `main`.

## Prerequisites

- Lab 1 is complete
- You have admin access to your training repository

## Scenario

Up to now you have been pushing directly to `main`. On a real team this
causes conflicts, missed reviews, and lost history. GitHub lets you
enforce a review process with branch protection rules and CODEOWNERS.

---

## Task 1: Create or update the `CODEOWNERS` file

CODEOWNERS tells GitHub who must approve changes to specific files.

1. Make sure you are on `main` with the latest changes

   ```bash
   git checkout main
   git pull
   ```

1. Create or replace the file at `.github/CODEOWNERS` with the following contents

   Replace `your-username` with your actual GitHub username. Keep the
   `@` symbol.

   ```plain
   # Game project code owners
   * @your-username
   ```

   > **What the `*` means:** every file in the repo. You can also target
   > specific paths, for example `docs/ @your-org/docs-team`.

1. Commit and push

   ```bash
   git add .github/CODEOWNERS
   git commit -m "Add CODEOWNERS file"
   git push
   ```

## Task 2: Protect the `main` branch with a ruleset

1. In your browser, go to the repository on GitHub
1. Click **Settings**
1. In the left sidebar, expand **Rules** and click **Rulesets**
1. Click **New ruleset**, then **New branch ruleset**
1. Name it `Default Branch`
1. Set **Enforcement status** to **Active**
1. In **Target branches**, click **Add target** then **Include default
   branch**
1. In **Rules**, enable:

   - **Require a pull request before merging**

   Leave **Required approvals** at **0** and do **not** enable
   **Require review from Code Owners**.

   > **Why 0 approvals?** In this workshop everyone owns their **own**
   > repo, so you are the only person who can merge it — and GitHub
   > never lets you approve your _own_ pull request. Requiring an
   > approval (or a code-owner review) would make the solo labs (like
   > Lab 4) impossible to merge. You will still practice requesting
   > reviews, suggesting changes, and approving in Labs 3, 6, and 7 —
   > the review is just not _enforced_ here.
   >
   > If you and a partner both have access to each other's repos and
   > want the stricter experience, you can set **Required approvals: 1**
   > for the paired labs.

1. Click **Create**

## Task 3: Try to push directly to `main`

You should not be able to.

1. Back in your terminal, make sure you are on `main`

   ```bash
   git checkout main
   ```

1. Make a small change to `README.md` (add any line)
1. Stage, commit, and try to push

   ```bash
   git add README.md
   git commit -m "Test direct push"
   git push
   ```

   You should see an error like:

   ```plain
   remote: error: GH013: Repository rule violations found
   remote: - Changes must be made through a pull request.
   ! [remote rejected] main -> main (push declined due to repository rule violations)
   ```

   That is your ruleset working. Direct pushes to `main` are blocked.

## Task 4: Reset the failed push

Undo the local commit that never made it upstream.

1. Reset `main` back one commit

   ```bash
   git reset --hard HEAD~1
   ```

   > **What `HEAD~1` means:** the commit one step before the current
   > `HEAD`. `--hard` also throws away the working-tree change. This is
   > safe here because the commit was never pushed.

---

## What you practiced

- Writing a `CODEOWNERS` file
- Creating a repository ruleset on GitHub
- Confirming that direct pushes are blocked
- Recovering with `git reset --hard`

## Need help?

If you get stuck, ask a neighbor or raise your hand.
