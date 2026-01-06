# Deploying to GitHub Pages

You have successfully configured your project for GitHub Pages deployment!

## Prerequisites
1.  **Git Installed**: Ensure you have Git installed on your computer.
2.  **GitHub Account**: You need a GitHub account.
3.  **New Repository**: Create a new **empty** repository on GitHub named `vincent-otieno-portfolio`.

## Deployment Steps

Run the following commands in your terminal (VS Code terminal is fine) one by one:

### 1. Initialize Git (if not done)
```powershell
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Connect to GitHub
Replace `<your-username>` with your actual GitHub username.
```powershell
git branch -M main
git remote add origin https://github.com/<your-username>/vincent-otieno-portfolio.git
git push -u origin main
```

### 3. Deploy
Now, simply run this command:
```powershell
npm run deploy
```

## What Happens Next?
- This command will build your project using `vite build` and push it to a `gh-pages` branch on your repository.
- After a few minutes, your site will be live at:
  `https://<your-username>.github.io/vincent-otieno-portfolio/`

> **Note:** If you see a blank page, ensure your repository name matches `vincent-otieno-portfolio` exactly.
