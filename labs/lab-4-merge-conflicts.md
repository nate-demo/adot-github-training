# Lab 4: Merge Conflicts

In this lab, you will **create your own merge conflict** and then
resolve it — first in the GitHub UI, then on the command line. By the
end you will understand exactly why conflicts happen and how to fix
them with confidence.

## Background: Why do merge conflicts happen?

Git can automatically combine changes when two branches modify
**different** parts of a file. Git cannot decide safely when two
branches modify **the same lines** of the same file. Instead of
guessing, Git pauses the merge, marks the disagreement in the file,
and asks a human (you) which change wins.

A conflict is not an error. It is Git being careful.

## Prerequisites

- Lab 2 is complete (`main` is protected)
- Lab 3 is complete (you have opened and merged a PR)
- Your local `main` is up to date with `origin/main`

Refresh your local `main` first:

```bash
git checkout main
git pull
```

---

## Part A — Create and resolve a conflict in the GitHub UI

You are going to open two pull requests that each change the same line
of the same file in different ways. When you merge the first, the
second will conflict.

### Task 1: Create the first branch (`feature/fewer-tiles`)

1. Make sure you are on `main`

   ```bash
   git branch
   ```

   The current branch is marked with `*`. If it is not `main`, run
   `git checkout main` first.

1. Create and switch to the first feature branch

   ```bash
   git checkout -b feature/fewer-tiles
   ```

1. Open [`src/game_manager.ts`](../src/game_manager.ts)
1. Find the line that declares `startTiles`

   ```ts
   static startTiles: number = 2
   ```

1. Change the value to `1`

   ```ts
   static startTiles: number = 1
   ```

1. Save the file, then stage and commit

   ```bash
   git add src/game_manager.ts
   git commit -m "Start game with 1 tile"
   ```

1. Push the branch to GitHub

   ```bash
   git push -u origin feature/fewer-tiles
   ```

> **Why this works:** you just made a small, focused change on an
> isolated branch. Nothing on `main` has changed yet.

### Task 2: Create the second branch (`feature/more-tiles`) — from the same base

This is the key step. You will branch from `main` _before_ the first
change gets merged, then edit the **same line** a different way.

1. Switch back to `main`

   ```bash
   git checkout main
   ```

1. Create and switch to the second feature branch

   ```bash
   git checkout -b feature/more-tiles
   ```

1. Open [`src/game_manager.ts`](../src/game_manager.ts) again
1. Change the same `startTiles` line — this time to `4`

   ```ts
   static startTiles: number = 4
   ```

1. Save, stage, commit, push

   ```bash
   git add src/game_manager.ts
   git commit -m "Start game with 4 tiles"
   git push -u origin feature/more-tiles
   ```

> **What just happened:** both branches were created from the same
> commit on `main`, and both changed the same line in different ways.
> Git does not know which of `1` or `4` is correct.

### Task 3: Open both pull requests

1. In your browser, open your repository on GitHub

   > **Shortcut:** if you have the GitHub CLI installed, run `gh browse`
   > from inside the repo to open it on GitHub.com in your default
   > browser — no need to hunt for the URL.

1. Click the **Pull requests** tab
1. Open a PR from `feature/fewer-tiles` -> `main`
   - Title: `Start game with 1 tile`
1. Open a second PR from `feature/more-tiles` -> `main`
   - Title: `Start game with 4 tiles`

Both PRs should currently show a green "Able to merge" state. Neither
one knows about the other yet.

### Task 4: Merge the first PR

1. Open the `Start game with 1 tile` PR
1. Approve and merge it into `main`

Now `main` contains `startTiles: number = 1`.

### Task 5: Observe the conflict

1. Open the `Start game with 4 tiles` PR
1. Notice the banner near the merge button:

   > This branch has conflicts that must be resolved

   That is because `main` moved forward (thanks to your first PR) and
   the two changes disagree on the same line.

### Task 6: Resolve the conflict in the GitHub UI

1. Click **Resolve conflicts**
1. You will see conflict markers in `src/game_manager.ts`

   ```plain
   <<<<<<< feature/more-tiles
     static startTiles: number = 4
   =======
     static startTiles: number = 1
   >>>>>>> main
   ```

   - `<<<<<<< feature/more-tiles` = start of the change from this branch
   - `=======` = separator
   - `>>>>>>> main` = end of the change that is already on `main`

1. Decide which version to keep. For this lab, keep `4`.
1. Edit the file so it reads:

   ```ts
   static startTiles: number = 4
   ```

   Delete the three marker lines _and_ the value you are discarding.

1. Click **Mark as resolved**, then **Commit merge**
1. Approve and merge the PR

You have just created and resolved a merge conflict entirely on
GitHub.com.

---

## Part B — Create and resolve a conflict on the command line

Now do the same thing again with a different setting, and resolve it
locally in your editor.

### Task 7: Set up two more conflicting branches

1. Update `main` locally

   ```bash
   git checkout main
   git pull
   ```

1. Create the first branch and change the tile value logic

   ```bash
   git checkout -b feature/rare-fours
   ```

1. Open [`src/game_manager.ts`](../src/game_manager.ts)
1. Find the line that decides new-tile values (look for `Math.random()`)

   ```ts
   const value = Math.random() < 0.9 ? 2 : 4;
   ```

1. Change the threshold to `0.95` (fours become rarer)

   ```ts
   const value = Math.random() < 0.95 ? 2 : 4;
   ```

1. Commit and push

   ```bash
   git add src/game_manager.ts
   git commit -m "Make 4-tiles rarer"
   git push -u origin feature/rare-fours
   ```

1. Return to `main` and branch again

   ```bash
   git checkout main
   git checkout -b feature/common-fours
   ```

1. Change the **same line** to a lower threshold (fours become common)

   ```ts
   const value = Math.random() < 0.5 ? 2 : 4;
   ```

1. Commit and push

   ```bash
   git add src/game_manager.ts
   git commit -m "Make 4-tiles common"
   git push -u origin feature/common-fours
   ```

### Task 8: Merge the first PR (rare-fours)

1. Open a PR for `feature/rare-fours`, approve, and merge it

### Task 9: Bring the conflict to your machine

1. Update `main` locally

   ```bash
   git checkout main
   git pull
   ```

1. Switch to the second branch

   ```bash
   git checkout feature/common-fours
   ```

1. Merge `main` into your branch — this is where Git will stop

   ```bash
   git merge main
   ```

   You will see:

   ```plain
   Auto-merging src/game_manager.ts
   CONFLICT (content): Merge conflict in src/game_manager.ts
   Automatic merge failed; fix conflicts and then commit the result.
   ```

   ```bash
   git status
   ```

   `git status` will list `src/game_manager.ts` under "Unmerged
   paths". Run `git status` any time you are unsure of what is
   happening during a merge.

### Task 10: Resolve the conflict in your editor

1. Open `src/game_manager.ts`
1. Locate the conflict markers

   ```plain
   <<<<<<< HEAD
     const value = Math.random() < 0.5 ? 2 : 4
   =======
     const value = Math.random() < 0.95 ? 2 : 4
   >>>>>>> main
   ```

   > **What each marker means on the command line:**
   >
   > - `HEAD` is the branch you have checked out (`feature/common-fours`)
   > - `main` is the branch you are merging in
   > - Everything between the markers is the disagreement

1. Choose the version to keep. For this lab, keep the `0.5` version.
1. Delete the three marker lines _and_ the losing version. The final
   line should read:

   ```ts
   const value = Math.random() < 0.5 ? 2 : 4;
   ```

1. Save the file

### Task 11: Complete the merge

1. Confirm the conflict is resolved

   ```bash
   git status
   ```

   The file should now be listed as _modified_ rather than _unmerged_.

1. Stage the fix and commit

   ```bash
   git add src/game_manager.ts
   git commit -m "Resolve merge conflict: keep common 4-tiles"
   ```

   > **Tip:** committing after a conflict resolution creates a _merge
   > commit_. Git pre-fills a helpful commit message; you can accept
   > it or write your own.

1. Push the resolved branch

   ```bash
   git push
   ```

1. Return to the PR in your browser and refresh it — the conflict
   banner is gone. Approve and merge.

> **Tip: clean up your local branches.** This lab left four merged
> branches behind. Switch back to `main`, then delete them so
> `git branch` stays focused on active work:
>
> ```bash
> git checkout main
> git pull
> git branch -d feature/fewer-tiles feature/more-tiles feature/rare-fours feature/common-fours
> ```
>
> `git branch -d` only deletes branches that are fully merged, so it
> is safe. To prune stale remote-tracking branches too, run
> `git fetch --prune`.

---

## What to take away

- Conflicts happen when two commits change the same lines. That is it.
- The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are just text
  Git writes into the file. You edit the file to keep the version you
  want.
- `git status` is your best friend during a merge. Run it often.
- Pulling `main` into your branch _before_ opening a PR (or often,
  during long work) surfaces conflicts early — while your changes are
  still fresh in your head.

## Prevention tips

- Keep branches short-lived
- Rebase or merge `main` into your feature branch frequently
- Split large changes into smaller PRs
- Communicate when two people plan to touch the same file

## Need help?

If you get stuck, ask a neighbor or raise your hand. You can also
abort a merge and start over:

```bash
git merge --abort
```

That resets the working tree to the state before the merge began.
