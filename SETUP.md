# Setup Guide

Complete this **before** Day 1 starts. It takes about 15 minutes on a clean machine, less if you already have some tools installed.

If you get stuck: the workshop repo has a `#setup-help` section in the class chat. Post there and someone (me, or another attendee ahead of you) will help.

---

## 1. Install Git

### Windows
Download the installer from [git-scm.com](https://git-scm.com/download/win) and run it. Accept the defaults — but on the **"Choosing the default editor"** page, pick **Visual Studio Code**.

### macOS
```bash
# Option A: Xcode Command Line Tools (bundles Git)
xcode-select --install

# Option B: Homebrew
brew install git
```

### Linux
```bash
# Debian / Ubuntu
sudo apt update && sudo apt install -y git

# Fedora / RHEL
sudo dnf install -y git
```

### Verify
```bash
git --version
# expect: git version 2.40+ (2.45 or later is ideal)
```

---

## 2. Configure Git

Substitute your name and enterprise email. **Use your real work email so commits attribute correctly.**

```bash
git config --global user.name "Alex Rivera"
git config --global user.email "alex.rivera@your-agency.gov"
git config --global init.defaultBranch main
git config --global pull.rebase false     # merge on pull (safer default for beginners)
git config --global core.autocrlf input   # Windows only: normalize line endings
```

Verify:
```bash
git config --global --list
```

---

## 3. Install Visual Studio Code

Download from [code.visualstudio.com](https://code.visualstudio.com/) and run the installer. Accept the defaults — but on Windows, **check the "Add to PATH" option** so you can launch it with `code .`.

Verify from a terminal:
```bash
code --version
```

---

## 4. Install these VS Code extensions

Open VS Code → Extensions view (Ctrl+Shift+X) → search and install each.

| Extension                        | Publisher              | Why                                                        |
|----------------------------------|------------------------|------------------------------------------------------------|
| **GitHub Pull Requests**         | GitHub                 | Open, review, and merge PRs without leaving the editor.    |
| **GitHub Actions**               | GitHub                 | Author, lint, and monitor workflows.                       |
| **GitLens — Git supercharged**   | GitKraken              | Blame overlays, timeline, powerful history views.          |
| **GitHub Repositories**          | GitHub                 | Browse and edit GitHub repos without cloning.              |
| **YAML**                         | Red Hat                | Syntax highlighting and schema validation for workflows.   |
| **Markdown All in One**          | Yu Zhang               | Nicer markdown editing (READMEs, PR descriptions).         |
| **EditorConfig**                 | EditorConfig           | Consistent whitespace across your team.                    |

Or install them all with one command:
```bash
code --install-extension GitHub.vscode-pull-request-github
code --install-extension GitHub.vscode-github-actions
code --install-extension eamodio.gitlens
code --install-extension GitHub.remotehub
code --install-extension redhat.vscode-yaml
code --install-extension yzhang.markdown-all-in-one
code --install-extension EditorConfig.EditorConfig
```

---

## 5. Install the GitHub CLI (optional but recommended)

The [`gh`](https://cli.github.com/) CLI makes many GitHub operations one command instead of a browser round-trip.

### Windows
```powershell
winget install --id GitHub.cli
```

### macOS
```bash
brew install gh
```

### Linux
See the [official install page](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for your distro.

### Verify
```bash
gh --version
```

---

## 6. Authenticate to your enterprise GitHub

Ask your platform team **which GitHub URL your organization uses** — for example:
- `github.com/your-enterprise-slug` (GitHub Enterprise Cloud)
- `github.<your-agency>.gov` or an internal URL (GitHub Enterprise Server)

### Option A — GitHub CLI (easiest)
```bash
gh auth login
```
Follow the prompts. Pick:
- **HTTPS** for the git protocol.
- **Yes** to authenticate Git with your GitHub credentials.
- **Browser** for the auth method — a one-time device code opens a page in your browser.

This configures your Git credential helper automatically for both HTTPS and API calls.

### Option B — SSH key (traditional)
```bash
ssh-keygen -t ed25519 -C "alex.rivera@your-agency.gov"
# accept the default path (~/.ssh/id_ed25519)
# set a passphrase (recommended)

# On macOS/Linux:
cat ~/.ssh/id_ed25519.pub

# On Windows (PowerShell):
Get-Content $HOME\.ssh\id_ed25519.pub
```

Copy the output, then in the GitHub UI go to **Settings → SSH and GPG keys → New SSH key**, paste, and save.

Verify:
```bash
ssh -T git@github.com
# expect: "Hi <your-username>! You've successfully authenticated..."
```

---

## 7. Verify you can reach the workshop repo

Your instructor will paste the workshop repo URL in chat during Day 1. As a pre-flight check, try opening `https://github.com/` in a browser and signing in. If your organization has SSO, complete that flow now so it's not blocking you Monday morning.

---

## Troubleshooting

### "Permission denied (publickey)"
You're trying SSH but the key isn't registered. Follow section 6 Option B, or fall back to `gh auth login`.

### "fatal: unable to access ... 407 Proxy Authentication Required"
Corporate proxy. Ask your platform team for the proxy URL, then:
```bash
git config --global http.proxy http://user:pass@proxy.example.com:8080
git config --global https.proxy http://user:pass@proxy.example.com:8080
```

### `code` command not found (macOS)
In VS Code: `Cmd+Shift+P` → "Shell Command: Install 'code' command in PATH".

### `code` command not found (Windows)
Reinstall VS Code and check the "Add to PATH" option, or manually add `C:\Users\<you>\AppData\Local\Programs\Microsoft VS Code\bin` to your PATH.

### Git says my commit was signed by someone else
You configured `user.email` with the wrong address. Update it (see section 2) and re-commit; existing commits will still show the old attribution.

### Corporate laptop restrictions
Some agencies restrict `winget`, `brew`, or direct downloads. In that case:
- Windows: get the Git and VS Code MSI installers from your internal software portal.
- Ask your platform team about a `~/.gitconfig` template — many agencies publish one.

---

## Ready for class?

You should be able to answer YES to all of these:

- [ ] `git --version` shows 2.40 or later
- [ ] `code --version` opens successfully  
- [ ] You can log in to your enterprise GitHub in the browser
- [ ] `gh auth status` (or `ssh -T git@github.com`) shows you're authenticated
- [ ] You've installed at least the **GitHub Pull Requests** and **GitLens** VS Code extensions

See you Day 1. 🚀
