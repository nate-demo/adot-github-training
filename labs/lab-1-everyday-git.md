# Lab 1: Everyday Git

In this lab you will walk through the everyday Git workflow used by every
software team: **clone → branch → edit → commit → push → pull request →
merge**. By the end you will have added a small feature to your game and
seen it deploy to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed and configured (see the setup slides)
- Access to your copy of the training repository

## Scenario

The game already works, but players do not know how to play it. You will
add the rules to the page so new players know what to do.

---

## Task 1: Confirm your Git identity

Every commit is stamped with a name and email. Getting this right **before**
your first commit is what makes your work show up as _you_ in your
organization.

1. Check what Git currently has

   ```bash
   git config --global user.name
   git config --global user.email
   ```

1. If either is blank or wrong, set it

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@your-org.com"
   ```

> **Use your org email.** The email must match the one you use to
> authenticate to your organization on GitHub. If it doesn't, your
> commits won't be linked to your account and you'll show up as the
> wrong user (or an unknown one) in the org.

## Task 2: Clone the repository

If you have not already, clone your copy of the training repository.

1. In your browser, go to your training repository on GitHub.com
1. Click **Code**, then copy the HTTPS or SSH URL
1. Open a terminal and clone

   ```bash
   git clone <your-repo-url>
   cd <your-repo>
   ```

1. Verify Git can see the project

   ```bash
   git status
   git log --oneline -n 5
   ```

> **What happened:** `git clone` copied the repo, its full history, and
> its remote configuration to your machine. `origin` now points at
> GitHub.

## Task 3: Create a feature branch

Never work directly on `main`. Always branch first.

1. Create and switch to a new branch

   ```bash
   git checkout -b feature/rules
   ```

1. Confirm you are on the new branch

   ```bash
   git branch
   ```

   The current branch is marked with `*`.

> **Why branch first:** branches keep unfinished work isolated. If you
> break something, `main` is untouched.

## Task 4: Add the feature

The rules for the game are simple; you just need to display them.

1. Open [`index.html`](../index.html) in your editor
1. Find the comment `<!-- Lab 1: Add Game Rules -->`
1. Add the following markup below the comment

   ```html
   <p class="game-explanation">
     <strong class="important">How to play:</strong>
     Use your <strong>arrow keys</strong> to move the tiles. When two tiles with
     the same number touch, they
     <strong>merge into one!</strong>
   </p>
   ```

1. Save the file

## Task 5: Test locally

Before committing, make sure your change works.

1. Run `npm run dev` and open the local URL printed by Vite (usually
   `http://localhost:5173`). Opening `index.html` directly from disk
   will not work — this is a Vite app that must be served.
1. Confirm the rules appear above the game board
1. Stop the dev server with `Ctrl+C`, then check your formatting

   ```bash
   npm run format:check
   ```

   If the check **fails**, your edit doesn't match the project's
   formatting. Try to fix the spacing and indentation by hand. If you
   can't get it to pass, let Prettier fix it for you automatically:

   ```bash
   npx prettier --write .
   ```

   Then run `npm run format:check` again — it should now pass.

## Task 6: Stage and commit

Now capture the change in your local history.

1. See what Git thinks changed

   ```bash
   git status
   ```

   `index.html` should appear under **Changes not staged for commit**.

1. Stage the file

   ```bash
   git add index.html
   ```

1. Run `git status` again

   The file has moved to **Changes to be committed**.

1. Commit with a clear message

   ```bash
   git commit -m "Add game rules to index.html"
   ```

> **What each command did:**
>
> - `git status` shows the state of every file in the working tree
> - `git add` moves a change from the working tree to the staging area
> - `git commit` snapshots everything in the staging area into your
>   local repository history

## Task 7: Push your branch to GitHub

Your commit still lives only on your machine. Publish it.

1. Push the branch and set the upstream

   ```bash
   git push -u origin feature/rules
   ```

1. GitHub prints a URL you can click to open a pull request

## Task 8: Open a pull request

1. In your browser, open the repository on GitHub
1. GitHub shows a yellow banner: **feature/rules had recent pushes** —
   click **Compare & pull request**
1. Confirm the base is `main` and the compare is `feature/rules`
1. Give the PR a title and short description
1. Click **Create pull request**

## Task 9: Merge and verify

Because `main` is not yet protected, you can merge your own PR. Later
labs will require a review first.

1. Click **Merge pull request**, then **Confirm merge**
1. Click **Delete branch** to keep your branch list tidy
1. Wait for the **Deploy to GitHub Pages** action to run
1. Open your GitHub Pages link (in the repo's **About** panel) and
   verify the rules are displayed

## Task 10: Clean up your local branch

Your feature branch is done. Remove it locally.

1. Switch back to `main` and pull the merged change

   ```bash
   git checkout main
   git pull
   ```

1. Delete the local feature branch

   ```bash
   git branch -d feature/rules
   ```

> **Why delete:** merged branches are dead weight. Deleting keeps
> `git branch` output focused on active work.

---

## What you practiced

- Clone
- Branch
- Edit + stage + commit
- Push
- Pull request
- Merge
- Local cleanup

This exact loop is the daily workflow for professional teams. Everything
else in this workshop is a variation or a safeguard on top of it.

## Need help?

If you get stuck, ask a neighbor or raise your hand. Reference solutions
are in the `solutions/` folder in the repo.
