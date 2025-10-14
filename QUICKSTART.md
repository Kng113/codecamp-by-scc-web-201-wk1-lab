# ⚡ Quick Start Guide

Get up and running with the Mini Text Toolkit in 5 minutes!

## 📋 Prerequisites Check

Before you begin, verify you have everything installed:

```bash
node -v        # Should be v18 or higher
pnpm -v        # Should show a version number
git --version  # Should show git version
firebase --version  # Should show firebase-tools version
```

If any command fails, go back to **PART A** of the lab instructions to set up your environment.

---

## 🚀 Steps to Complete the Lab

### Step 1: Install Dependencies (1 min)

```bash
pnpm install
```

### Step 2: Start Dev Server (30 sec)

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

You'll see the UI, but buttons won't work yet! ⚠️

---

### Step 3: Implement the Functions (30-45 min)

Open `src/utils/textTools.ts` and complete these 3 functions:

#### 🔄 Function 1: Reverse Text

**Hint:** Use `split('')`, `reverse()`, and `join('')`

**Example:**

- Input: `"hello"` → Output: `"olleh"`

#### 🔢 Function 2: Count Words

**Hint:** Use `trim()`, `split(/\s+/)`, and check for empty strings

**Example:**

- Input: `"hello world"` → Output: `2`
- Input: `"  "` → Output: `0`

#### 🔤 Function 3: Title Case

**Hint:** Split by spaces, capitalize first letter of each word (`charAt(0).toUpperCase()`), then join

**Example:**

- Input: `"hello world"` → Output: `"Hello World"`

---

**💡 Need more help?** Check the full README.md for detailed guidance and examples.

**Save the file** → Your browser will auto-reload → **Test the buttons!**

---

### Step 4: Verify Code Quality (2 min)

Run these commands to ensure your code is clean:

```bash
pnpm typecheck  # TypeScript check
pnpm lint       # ESLint check
pnpm format     # Auto-format code
```

All should pass with no errors! ✅

---

### Step 5: Customize (2 min)

1. **Update footer in `src/App.tsx`** (line 49):

   ```tsx
   <p>Built by YOUR NAME • Code Camp Week 1 Lab</p>
   ```

2. **Update `.firebaserc`** with your Firebase project ID:
   ```json
   {
     "projects": {
       "default": "cc-yourname-week1"
     }
   }
   ```

---

### Step 6: Build & Deploy (5 min)

```bash
# Build for production
pnpm build

# Deploy to Firebase
firebase deploy
```

You'll get a URL like: `https://cc-yourname-week1.web.app`

**Visit it and test!** 🎉

---

### Step 7: Update README & Submit (5 min)

1. **Edit `README.md`** (scroll to bottom):
   - Add your name, cohort, Firebase URL
   - Write 3 things you learned

2. **Take a screenshot** of your deployed app

3. **Submit to portal**:
   - GitHub repo URL
   - Firebase URL
   - Screenshot

---

## 🆘 Common Issues

### "Functions don't work"

→ Make sure you implemented all 3 functions in `textTools.ts`

### "TypeScript errors"

→ Run `pnpm typecheck` to see specific errors

### "Blank page after deploy"

→ Did you run `pnpm build` before `firebase deploy`?

### "Firebase deploy fails"

→ Make sure you updated `.firebaserc` with your project ID

---

## 🎯 Success Checklist

Before submitting, ensure:

- [ ] All 3 buttons work (Reverse, Count, Title Case)
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] Footer shows your name
- [ ] Firebase URL is live and working
- [ ] README is updated with your info

---

## 🌟 Stretch Goals (If You Have Extra Time)

Try adding these features:

1. **Character count** that updates as you type
2. **Copy to clipboard** button for the output
3. **Clear button** to reset everything
4. **Dark mode** toggle

---

**Need help?** Check Discord #help-web-week1 or ask a TA!

Good luck! 🚀
