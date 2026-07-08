# Instructor Runbook — ADOT GitHub for Developers

Run-of-show, timing, and pre-flight checklist for a **2-day** delivery to
~16 attendees of mixed experience. Times assume instructor-led pacing
(gated by the slowest few, plus Q&A), not solo speed-runs.

---

## Before the session (instructor pre-flight)

Do these on `nate-demo/adot-github-training` **before Day 1**:

- [ ] **Mark the repo as a template.** Settings -> General -> check
      **Template repository**. Attendees cannot fork, so they will use
      **Use this template** to create their own copy.
- [ ] **Confirm cross-repo review access** for the paired labs (3, 6, 7).
      Attendees create repos in the **sandbox org** with **Internal**
      visibility so org members can review each other's PRs. If repos
      end up private, pre-pair people and have them add their partner as
      a collaborator.
- [ ] **Verify GitHub Pages is allowed** in the sandbox org for the repo
      visibility you choose (needed for Labs 1 and 7). Pages source must
      be **GitHub Actions**.
- [ ] Confirm all four workflows exist under `.github/workflows/`:
      `continuous-integration.yml`, `continuous-delivery.yml`,
      `deploy-to-pages.yml`, `deploy-on-comment.yml`.
- [ ] Have a spare account/repo ready to play "partner" for an odd
      person out.

### Line endings

The repo ships a `.gitattributes` (`* text=auto eol=lf`) so fresh clones
check out LF line endings on every OS. This keeps `npm run format:check`
green on Windows, macOS, Linux, and CI. If you converted an older working
copy that still has CRLF files, run `git add --renormalize .` once and
commit.

---

## Attendee setup (Day 1, first 25–35 min)

Walk through together before Lab 1:

1. On the training repo, **Use this template -> Create a new repository**
   in the sandbox org, **Internal** visibility, name `adot-git-<name>`.
2. **Settings -> Pages -> Source: GitHub Actions.**
3. Clone the new repo, `npm ci`.
4. Confirm `git --version`, `git config user.name`, `user.email`.

Budget extra time here: HTTPS auth / Git Credential Manager prompts are
the #1 time sink for first-timers.

---

## Day 1

| Segment            | Wall-clock | Notes                                           |
| ------------------ | ---------- | ----------------------------------------------- |
| Attendee setup     | 25–35 min  | Template -> clone -> `npm ci` -> enable Pages   |
| Lab 1 Everyday Git | 40–50 min  | First clone/branch/PR/merge; auth friction      |
| Lab 2 Protect Main | 25–35 min  | Rulesets UI; set approvals to **0** (see below) |
| Lab 3 GitHub Flow  | 35–45 min  | Pairing + cross-repo review access; flex item   |

Day 1 hands-on total: **~2.1–2.9 hrs**. Full but workable in a 3h20m
day. **Lab 3 is the flex item** — if you run long, finish it at the top of
Day 2 before Lab 4.

---

## Day 2

| #   | Lab             | Wall-clock | Watch out for                                 |
| --- | --------------- | ---------- | --------------------------------------------- |
| 4   | Merge Conflicts | 50–65 min  | Hardest lab; two rounds (UI + CLI)            |
| 5   | Run a Workflow  | 25–30 min  | Failure task is optional                      |
| 6   | Create Release  | 30–40 min  | Pairing again; wait on CD workflow            |
| 7   | Deploy          | 30–45 min  | Pages/env, comment-bot latency, rollback wait |

Day 2 hands-on total: **~2.3–3.0 hrs** — fits a 3h20m day. Labs 6 and 7
form the **capstone**; run them hands-on if time allows, otherwise demo.

### If you are running long, cut in this order

1. **Lab 4 Part B** (command-line conflict) -> demo it instead of hands-on.
2. **Lab 5 Task 3–4** (force a failure / cancel a run) -> optional.
3. **Lab 7 Task 5** (rollback to `main`) -> demo instead of hands-on.

---

## Why Lab 2 uses 0 required approvals

Each attendee owns their **own** repo and is its only code owner. GitHub
never lets you approve your **own** pull request, so requiring an approval
(or a Code Owners review) would make the solo labs — especially **Lab 4**
— impossible to merge. Lab 2 therefore requires a PR with **0 approvals**
and no Code Owners rule. The blocked-direct-push demo still works, and
attendees still practice requesting/suggesting/approving reviews in the
paired labs (3, 6, 7). If a pair both have access to each other's repos
and want the stricter experience, they can bump **Required approvals** to
**1** for those labs.

---

## Quick health check (run locally before class)

```bash
npm ci
npm test        # expect 2 passing tests
npm run build   # expect a clean tsc + vite build
```
