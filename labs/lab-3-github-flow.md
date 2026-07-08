# Lab 3: GitHub Flow

Now that `main` is protected, you can no longer push directly. You need
a **pull request**. In this lab you and a partner will exchange PRs,
review each other's work, and merge using GitHub Flow.

## Prerequisites

- Lab 2 is complete (`main` is protected)
- You have a partner (or the instructor will pair you)

## Scenario

The game has a bug: tiles in the left- or bottom-most squares do not
move. You will propose a fix, but the change needs to be reviewed
before it can ship.

---

## Task 1: Create a fix branch

1. Make sure you are on the latest `main`

   ```bash
   git checkout main
   git pull
   ```

1. Create a fix branch

   ```bash
   git checkout -b fix/stuck-tiles
   ```

## Task 2: Introduce a change (that will need review)

1. Open [`src/application.ts`](../src/application.ts)
1. Find the comment `// Lab 3: Grid Size`
1. On the next line, change the grid size passed to `GameManager` from
   `4` to `5`. Change **only** the number — leave the rest of the line
   (the `, {` and the options object) exactly as it is:

   ```ts
   // Lab 3: Grid Size
   const manager = new GameManager(5, {
   ```

   > **Note:** `5` is intentionally not the correct fix. The whole
   > point of this lab is to catch that in review.

1. Save the file

## Task 3: Commit and push

1. Stage and commit

   ```bash
   git add src/application.ts
   git commit -m "Increase grid input size"
   ```

1. Push the branch

   ```bash
   git push -u origin fix/stuck-tiles
   ```

## Task 4: Open a pull request

1. Open the repo on GitHub
1. Click **Pull requests**, then **New pull request**
1. Base: `main`. Compare: `fix/stuck-tiles`
1. Give it a title (for example `Fix stuck tiles`) and a short
   description
1. Click **Create pull request**
1. Share the PR URL with your partner (or drop it in the meeting chat)

## Task 5: Review your partner's PR (suggest a change)

1. Open your partner's PR
1. Click the **Files changed** tab
1. Next to the changed line, click the blue `+` icon to add a comment
1. Click the **Add a suggestion** button
1. Change the suggested value from `5` to `4`
1. Click **Start a review**
1. Click **Finish your review**, add a brief comment, choose
   **Comment**, and submit

## Task 6: Accept the suggestion on your PR

1. Return to your own PR
1. Find the suggestion in the comments
1. Click **Commit suggestion**, add a message, and confirm

   Your PR now has an additional commit with the corrected value.

## Task 7: Review your partner's updated PR (approve)

1. Open your partner's PR
1. Confirm the suggestion was applied
1. Click **Review changes**, add a comment, select **Approve**, submit

## Task 8: Merge

Once your PR is approved and the required checks pass:

1. Click **Merge pull request**
1. Click **Confirm merge**
1. Click **Delete branch**

---

## What you practiced

- Creating a change on a feature branch
- Opening a PR against a protected `main`
- Reviewing with inline suggestions
- Applying a suggestion
- Approving and merging

## Need help?

If you have an odd number of participants, the instructor will play
partner. Ask if you are stuck.
