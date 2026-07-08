# Workshop Agenda

Two days, ~3 hours 20 minutes each (9:00 – 12:20 each day). Times are wall-clock.

## Day 1 — Fundamentals + Everyday Git

| Time          | Section                                                   | Duration |
| ------------- | --------------------------------------------------------- | -------- |
| 9:00 – 9:15   | Welcome & introductions                                   | 15 min   |
| 9:15 – 9:50   | **GitHub Fundamentals**                                   | 35 min   |
| 9:50 – 10:00  | ☕ Break                                                  | 10 min   |
| 10:00 – 10:30 | Guided setup (template → clone → `npm ci` → enable Pages) | 30 min   |
| 10:30 – 11:10 | **Lab 1: Everyday Git**                                   | 40 min   |
| 11:10 – 11:20 | ☕ Break                                                  | 10 min   |
| 11:20 – 11:40 | **Pull Requests & Code Reviews**                          | 20 min   |
| 11:40 – 11:55 | **Lab 2: Protect Main**                                   | 15 min   |
| 11:55 – 12:15 | **Lab 3: GitHub Flow** (paired) _(flex)_                  | 20 min   |
| 12:15 – 12:20 | Day 1 wrap                                                | 5 min    |

### Day 1 topics

- **GitHub Fundamentals** — why version control; Git vs GitHub; GitHub Enterprise flavors (GHEC, GHES, GHEC-with-data-residency, EMU); core objects (repos, commits, branches, PRs); collaboration workflows (GitHub Flow, Git Flow, trunk-based); web tour; VS Code integration.
- **Lab 1: Everyday Git** — verify setup; the four places code lives (working / staging / local / remote); clone in VS Code; create + switch branch; make a change; stage, commit, push; open a PR, merge, and clean up the branch.
- **Pull Requests & Code Reviews** — anatomy of a great PR (small, focused, self-explaining); PR templates and Conventional Commits; draft vs. ready-for-review; batching line comments; suggested changes (one-click commit); Approve / Request Changes / Comment; branch protection basics; CODEOWNERS teaser.
- **Lab 2: Protect Main** — use CODEOWNERS and a ruleset to block direct pushes to `main`, so every change must go through a PR.
- **Lab 3: GitHub Flow** — end-to-end PR flow with a partner: open a PR, review it, leave suggested changes, and approve. _(If time runs short, this can spill into the start of Day 2.)_

---

## Day 2 — Organize · Secure · Automate

| Time          | Section                                                                 | Duration |
| ------------- | ----------------------------------------------------------------------- | -------- |
| 9:00 – 9:10   | Recap & warm-up                                                         | 10 min   |
| 9:10 – 9:45   | **Organizing work in GitHub**                                           | 35 min   |
| 9:45 – 10:10  | **Secure development fundamentals**                                     | 25 min   |
| 10:10 – 10:20 | ☕ Break                                                                | 10 min   |
| 10:20 – 11:00 | **Lab 4: Merge Conflicts**                                              | 40 min   |
| 11:00 – 11:20 | **GitHub Actions intro**                                                | 20 min   |
| 11:20 – 11:30 | ☕ Break                                                                | 10 min   |
| 11:30 – 11:50 | **Lab 5: Run a Workflow**                                               | 20 min   |
| 11:50 – 12:10 | **Capstone: Lab 6 Release + Lab 7 Deploy** _(optional / demo if short)_ | 20 min   |
| 12:10 – 12:20 | Q&A and close _(+ optional Codespaces / GHAS / Copilot preview)_        | 10 min   |

### Day 2 topics

- **Organizing work in GitHub** — repo structure & standards (README, LICENSE, .gitignore, CODEOWNERS, CONTRIBUTING.md, SECURITY.md, .github/, docs/); issues as the unit of work (labels, milestones, assignees); linking Issues ↔ PRs (Closes/Fixes/Resolves); README best practices; _[optional]_ GitHub Projects v2.
- **Secure development fundamentals** — why credentials don't belong in code; what counts as a "secret"; the harsh truth about removing leaked secrets; secrets management in GitHub (repo, environment, organization scopes); GitHub Advanced Security teaser (secret scanning + push protection, code scanning with CodeQL, Dependabot).
- **Lab 4: Merge Conflicts** — create your own conflict, then resolve it two ways: in the GitHub web UI and on the command line.
- **GitHub Actions intro** — what is CI/CD; anatomy of a workflow (YAML: events, jobs, runners, steps); GitHub-hosted vs. self-hosted runners; Actions and the Marketplace; version pinning; reading run results.
- **Lab 5: Run a Workflow** — trigger a workflow manually, inspect the logs, then re-run and cancel a run.
- **Capstone (Lab 6 + Lab 7)** — version-bump and cut a tagged **Release**, then **Deploy** a preview of a branch to GitHub Pages and roll it back. The end-to-end finale: feature branch → PR → review → merge → green CI → release → deploy. Run hands-on if time allows, otherwise demo.
- **What's next** — Codespaces overview, Advanced Security deep-dive, Copilot preview (light — full workshop after your rollout), Actions cost model, learning paths.

---

## Optional content bank

If you're running fast or want to swap something in, these slides in the deck are marked `[OPTIONAL]`:

- **Undoing mistakes** — reset/revert/restore/amend cheat sheet.
- **GitHub Projects (v2)** — cross-repo work tracking as a Jira alternative.
- **Codespaces** — cloud dev environments in the browser.
- **GitHub Advanced Security** — deep dive on the three modules.
- **GitHub Copilot** — preview and what's coming.
- **Actions cost model** — minutes, storage, runner-type economics.

---

## Break policy

- Two 10-minute breaks per day, mid-morning/afternoon.
- Bio breaks anytime — you don't need permission.
- If we finish a section early, we bank the time toward earlier finish, not extra content.
