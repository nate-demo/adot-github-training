# Setup Guide

Do this **before Day 1**. It takes about 15 minutes on a fresh machine — less if you already have some tools installed.

You don't need to be a command-line expert. Just follow each step in order, and run the little "check" commands to confirm things worked.

**Stuck on anything?** Post in the `#setup-help` channel in the class chat. Someone will help you get unblocked.

---

## What you'll install

1. Git — the version-control tool
2. Visual Studio Code — your editor
3. Node.js — runs the practice app
4. A few VS Code extensions
5. GitHub CLI — signs you in to GitHub

Work through them top to bottom.

---

## 1. Install Git

Git is the tool that tracks changes to your code.

### Windows

Download the installer from [git-scm.com](https://git-scm.com/download/win) and run it. Keep clicking **Next** to accept the defaults — but on the **"Choosing the default editor"** screen, pick **Visual Studio Code**.

### macOS

Open the **Terminal** app and run:

```bash
xcode-select --install
```

Click **Install** in the pop-up. (This gives you Git.)

### Check it worked

Open a terminal and run:

```bash
git --version
```

You should see something like `git version 2.45.0`. Any version 2.40 or higher is fine.

---

## 2. Tell Git who you are

Git stamps your name and email on every change you save. Run these two commands, replacing the name and email with **your real work name and email**:

```bash
git config --global user.name "Alex Rivera"
git config --global user.email "alex.rivera@your-agency.gov"
```

> **Why your real email?** It makes sure your work is credited to you.

Then run these to set beginner-friendly defaults (copy them exactly):

```bash
git config --global init.defaultBranch main
git config --global pull.rebase false
git config --global core.autocrlf input
git config --global core.editor "code --wait"
```

> **Why `core.editor`?** Some Git commands open a text editor for you to
> type a message. By default that's Vim, which is famously hard to exit
> if you've never used it. This setting makes Git use VS Code instead, so
> you won't get stuck. (Install VS Code in the next step first.)

### Check it worked

```bash
git config --global --list
```

You should see your name and email in the output.

---

## 3. Install Visual Studio Code

VS Code is the editor you'll use all workshop.

Download it from [code.visualstudio.com](https://code.visualstudio.com/) and run the installer. Accept the defaults — and on Windows, **check the box that says "Add to PATH"**. This lets you open the editor by typing `code .` in a terminal.

### Check it worked

```bash
code --version
```

---

## 4. Install Node.js

Node.js runs the small practice app we'll use in the labs. Installing Node also gives you `npm`.

### Windows

```powershell
winget install --id OpenJS.NodeJS.LTS
```

### macOS

```bash
brew install node
```

(If you don't have Homebrew, download the installer from [nodejs.org](https://nodejs.org/) instead — pick the **LTS** version.)

> If your agency blocks these installers, download the **LTS** version from [nodejs.org](https://nodejs.org/) or use your internal software portal.

### Check it worked

```bash
node --version
npm --version
```

`node --version` should show `v22` or higher.

---

## 5. Install VS Code extensions

Open VS Code, click the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X`), then search for and install each of these:

| Extension                      | Publisher | What it does                                   |
| ------------------------------ | --------- | ---------------------------------------------- |
| **GitHub Pull Requests**       | GitHub    | _(Recommended)_ Review and merge pull requests inside VS Code. |
| **GitHub Actions**             | GitHub    | _(Recommended)_ Write and watch automated workflows. |
| **GitLens — Git supercharged** | GitKraken | _(Optional)_ See who changed each line and when. |
| **YAML**                       | Red Hat   | _(Optional)_ Helps you edit workflow files.    |
| **Markdown All in One**        | Yu Zhang  | _(Optional)_ Nicer editing for READMEs and PR descriptions. |

**Faster option:** paste all of these into a terminal to install them at once:

```bash
code --install-extension GitHub.vscode-pull-request-github
code --install-extension GitHub.vscode-github-actions
code --install-extension eamodio.gitlens
code --install-extension redhat.vscode-yaml
code --install-extension yzhang.markdown-all-in-one
```

---

## 6. Install the GitHub CLI

The GitHub CLI (`gh`) is the easiest way to sign in to GitHub.

### Windows

```powershell
winget install --id GitHub.cli
```

> If `winget` is blocked at your agency, download the `.msi` installer
> from the [GitHub CLI releases page](https://github.com/cli/cli/releases/latest)
> (look for `gh_*_windows_amd64.msi`) and run it, or grab it from your
> internal software portal.

### macOS

```bash
brew install gh
```

### Check it worked

```bash
gh --version
```

---

## 7. Sign in to GitHub

Run:

```bash
gh auth login
```

Answer the prompts like this:

- **What account do you want to log into?** → GitHub.com (or your enterprise, if your instructor tells you otherwise)
- **What is your preferred protocol?** → **HTTPS**
- **Authenticate Git with your GitHub credentials?** → **Yes**
- **How would you like to authenticate?** → **Login with a web browser**

A one-time code appears in the terminal. Copy it, press Enter, and paste it into the page that opens in your browser. That's it — you're signed in.

> If your organization uses single sign-on (SSO), complete that prompt in the browser now so it's not blocking you on Day 1.

### Check it worked

```bash
gh auth status
```

You should see a green checkmark saying you're logged in.

---

## Are you ready for class?

Go through this checklist. You should be able to check every box:

- [ ] `git --version` shows 2.40 or later
- [ ] `git config --global --list` shows your name and email
- [ ] `code --version` works
- [ ] `node --version` shows v22 or later
- [ ] `gh auth status` shows you're logged in
- [ ] You installed the VS Code extensions (at least **GitHub Pull Requests** and **GitLens**)

## Setup complete — what's next?

Once every box above is checked, head to the [README](./README.md) and
follow **"Getting your own copy"** to create and clone your training repo.
That's where the labs begin.

---

## Troubleshooting

**`code` command not found (Windows)**
Reinstall VS Code and check the "Add to PATH" box. Or restart your terminal.

**`code` command not found (macOS)**
In VS Code, press `Cmd+Shift+P`, type "Shell Command", and pick **"Install 'code' command in PATH"**.

**"407 Proxy Authentication Required"**
You're behind a corporate proxy. Ask your platform team for the proxy address, then run (with their values):

```bash
git config --global http.proxy http://user:pass@proxy.example.com:8080
git config --global https.proxy http://user:pass@proxy.example.com:8080
```

**My installer is blocked by my agency**
Some agencies block `winget`, `brew`, or direct downloads. Get Git, VS Code, and Node.js from your internal software portal instead, or ask in `#setup-help`.

**Still stuck?**
Post in `#setup-help` with the command you ran and the error you got. We'll sort it out before Day 1.

See you in class. 🚀
