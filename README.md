🚀 DevOps CI/CD Pipeline – React App

This project demonstrates a complete CI/CD pipeline using GitHub Actions and deployment to AWS S3.

It automatically runs Lint, Test, Build, and Deploy whenever code is pushed to the main branch.

⚙️ CI/CD Pipeline Overview
🟢 Continuous Integration (CI)

On every push / pull request:

✔ Lint code quality check
✔ Run tests
✔ Build project

All CI jobs run in parallel using GitHub Actions.

🔵 Continuous Deployment (CD)

On push to main branch:

✔ Build production files
✔ Deploy dist/ folder to AWS S3 bucket
📊 CI/CD Status

👉 View full workflow runs here:
https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions

☁️ Live Deployment

The application is automatically deployed to AWS S3 after successful CI checks.

🛠️ Tech Stack
React (Vite)
GitHub Actions (CI/CD)
AWS S3 (Hosting)
Node.js
npm
📁 Workflow Structure
CI Pipeline
 ├── lint
 ├── test
 └── build
        ↓
CD Pipeline
 └── deploy to S3
🔑 AWS Setup Used
IAM User with S3 access
GitHub Secrets:
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET
📌 Author

Talal Liaquat