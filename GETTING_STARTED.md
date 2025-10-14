# 🎯 Getting Started - Week 1 Lab

Welcome to your first React + TypeScript project! Follow these steps to get started.

## 📋 Before You Begin

### ✅ Quick Environment Check

Run these commands to verify your setup:

```bash
node -v        # Should show v18.x.x or higher
pnpm -v        # Should show a version number
git --version  # Should show git version
firebase --version  # Should show firebase-tools version
```

If any command fails, go back to **PART A** of the lab instructions to set up your environment.

---

## 🚀 Step-by-Step Setup

### 1️⃣ Fork This Repository

1. Click the **Fork** button in the top right of this GitHub page
2. This creates a copy under your GitHub account

### 2️⃣ Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/week1-lab-text-tools.git
cd week1-lab-text-tools
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 3️⃣ Install Dependencies

```bash
pnpm install
```

This will take 1-2 minutes. You should see dependencies being installed.

### 4️⃣ Start Development Server

```bash
pnpm dev
```

You should see:

```
VITE v7.x.x  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### 5️⃣ Open in Browser

1. Open [http://localhost:5173](http://localhost:5173)
2. You should see "🔧 Mini Text Toolkit"
3. Try clicking the buttons - they won't work yet! ⚠️

**This is expected!** The UI is ready, but you need to implement the logic.

---

## ✍️ Your Mission

Open `src/utils/textTools.ts` - you'll see 3 empty functions:

1. **reverseText()** - Reverse a string
2. **countWords()** - Count words in text
3. **toTitleCase()** - Convert to Title Case

Each function has:

- ✅ Type signatures (already defined)
- ✅ TODO comments with hints
- ✅ Examples in comments

Your job is to fill in the logic!

---

## 🧪 Testing Your Code

### While Coding (Live Reload)

Just save your file - the browser will automatically refresh!

### Quality Checks

Before submitting, run:

```bash
pnpm typecheck  # TypeScript validation
pnpm lint       # Code quality check
pnpm format     # Auto-format code
```

All should pass with no errors ✅

---

## 🚢 Deployment Steps

Once your functions work:

### 1. Build for Production

```bash
pnpm build
```

This creates an optimized version in the `dist/` folder.

### 2. Update Firebase Config

Edit `.firebaserc` and replace with your Firebase project ID:

```json
{
  "projects": {
    "default": "YOUR-FIREBASE-PROJECT-ID"
  }
}
```

### 3. Deploy

```bash
firebase deploy
```

You'll get a URL like: `https://your-project.web.app`

---

## 📝 Before Submitting

1. **Customize footer** in `src/App.tsx` (add your name)
2. **Update README** with your info (name, cohort, Firebase URL)
3. **Test live URL** - make sure all buttons work
4. **Git commit and push** your changes

```bash
git add .
git commit -m "Complete Week 1 Lab"
git push origin main
```

---

## 🆘 Common Issues

### "pnpm: command not found"

→ Install pnpm: `npm install -g pnpm`

### "Cannot find module 'react'"

→ Run: `pnpm install`

### Buttons don't work

→ Have you implemented the functions in `textTools.ts`?

### TypeScript errors

→ Check function signatures match exactly
→ Make sure you're using the `input` parameter

### Build fails

→ Run `pnpm typecheck` to see specific errors

---

## 📚 Resources

- **Full Guide:** See [README.md](./README.md)
- **Quick Reference:** See [QUICKSTART.md](./QUICKSTART.md)
- **Help:** Discord #help-web-week1

---

**Ready to code?** Open `src/utils/textTools.ts` and start implementing! 🚀

Good luck! You've got this! 💪
