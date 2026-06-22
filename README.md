🚀 DevOps CI/CD Pipeline (React + AWS S3)

A complete CI/CD pipeline using GitHub Actions that automates:

Code Quality Checks (CI)
Build Process
Deployment to AWS S3 (CD)
📊 System Architecture (Flow)
        ┌──────────────────────────┐
        │      GitHub Repo         │
        └──────────┬───────────────┘
                   │ push / PR
                   ▼
        ┌──────────────────────────┐
        │        CI PIPELINE       │
        │                          │
        │  ┌───────┐ ┌────────┐    │
        │  │ Lint  │ │ Test   │    │
        │  └───────┘ └────────┘    │
        │        ┌────────┐        │
        │        │ Build  │        │
        │        └────────┘        │
        └──────────┬───────────────┘
                   │ success
                   ▼
        ┌──────────────────────────┐
        │        CD PIPELINE       │
        │     Deploy to AWS S3     │
        └──────────┬───────────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │   Live Static Website    │
        │   (AWS S3 Bucket URL)    │
        └──────────────────────────┘
⚙️ CI Pipeline (Continuous Integration)

Runs automatically on every:

Push
Pull Request
Jobs:

✔ Lint (code quality check)
✔ Test (unit tests)
✔ Build (production build)

All jobs run in parallel (same box).

🚀 CD Pipeline (Continuous Deployment)

Runs only when:

Code is pushed to main branch
Steps:

✔ Build production files
✔ Upload dist/ folder
✔ Deploy to AWS S3 bucket

📊 GitHub Actions Status

👉 View Workflow Runs:
https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions

☁️ AWS Deployment
Hosting: Amazon S3 Static Website
Output Folder: dist/
Auto deployed via GitHub Actions
🧰 Tech Stack
React (Vite)
GitHub Actions (CI/CD)
AWS S3 (Hosting)
Node.js
npm
🔑 GitHub Secrets Used
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET
🧠 CI/CD Logic
CI (Parallel)
 ├── Lint
 ├── Test
 └── Build
        ↓
CD (Separate)
 └── Deploy to S3
📌 Result

✔ Fully automated pipeline
✔ Clean CI/CD separation
✔ Production build deployed automatically
✔ Real DevOps workflow implemented
