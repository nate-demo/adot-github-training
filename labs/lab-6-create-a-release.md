# Lab 6: Create a Release

In this lab you will create your first tagged release of the game
using a `release/*` branch and the existing continuous delivery
workflow.

## Prerequisites

- Lab 2 is complete (`main` is protected)
- Lab 3 is complete (you have opened and merged a PR)

## Scenario

You have shipped several changes. How do users know which version they
are running? GitHub Releases attach a name, tag, and changelog to a
specific commit so users (and other systems) can pin to a known
version.

---

## Task 1: Create a release branch

1. Make sure you are on the latest `main`

   ```bash
   git checkout main
   git pull
   ```

1. Create a release branch

   ```bash
   git checkout -b release/v2.0.0
   ```

## Task 2: Bump the version

The continuous delivery workflow reads the version from
`package.json`.

1. Open [`package.json`](../package.json)
1. Change `"version"` to `"2.0.0"`

   ```jsonc
   {
     "name": "adot-github-developers-training",
     "description": "Hands-on training repository for the ADOT GitHub for Developers workshop.",
     "version": "2.0.0",
     // ...
   }
   ```

1. Save the file
1. Stage, commit, push

   ```bash
   git add package.json
   git commit -m "Release version 2.0.0"
   git push -u origin release/v2.0.0
   ```

## Task 3: Open the release PR

1. Open the repository on GitHub
1. Click **Pull requests**, then **New pull request**
1. Base: `main`. Compare: `release/v2.0.0`
1. Title: `Release v2.0.0`
1. Add a short description of what changed since v1
1. Click **Create pull request**
1. Share the PR URL with your partner and ask for a review

## Task 4: Review and approve a partner's release PR

1. Open your partner's release PR
1. Click **Files changed** and confirm the version bump is the only
   change
1. Click **Review changes**, choose **Approve**, submit

## Task 5: Merge the release PR

1. Return to your own PR
1. Once approved, click **Merge pull request**
1. Click **Confirm merge**
1. Delete the release branch

## Task 6: Watch the release workflow

The Continuous Delivery workflow watches for pushes to `main` that include
`package.json` and creates a release when the package version has not already
been tagged:

```yaml
name: Continuous Delivery

on:
  push:
    branches: [main]
    paths:
      - package.json

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      # ... setup Node, install dependencies, build ...
      - name: Read version
        id: package
        run: echo "version=$(node -p \"require('./package.json').version\")" >> "$GITHUB_OUTPUT"
      - name: Create tag
        id: tag
        run: |
          # creates tag v<version> only if it does not already exist
      - name: Create Release
        if: steps.tag.outputs.created == 'true'
        uses: softprops/action-gh-release@v2
        with:
          tag_name: v${{ steps.package.outputs.version }}
          generate_release_notes: true
```

Now watch it run:

1. Click the **Actions** tab
1. Open the running **Continuous Delivery** workflow
1. Watch the steps run, including:

   - Checkout
   - Read version
   - Create tag
   - Create Release

## Task 7: View the release

1. Click the **Code** tab
1. On the right, find the **Releases** section and click **v2.0.0**
1. Review the auto-generated release notes and the linked commit

---

## What you practiced

- Semantic versioning with `major.minor.patch`
- Using a `release/*` branch pattern
- Letting a workflow tag and publish the release
- Reading auto-generated release notes

## Need help?

If the Continuous Delivery workflow does not run, confirm the workflow
file is present and the version format is `MAJOR.MINOR.PATCH`.
