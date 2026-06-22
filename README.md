🚀 DevOps CI/CD Pipeline – React App

This project demonstrates a complete CI/CD pipeline using GitHub Actions and deployment to AWS S3.

⚙️ CI/CD Overview
🟢 CI (Continuous Integration)

Runs on every push / pull request:

Lint code
Run tests
Build project
🔵 CD (Continuous Deployment)

Runs on push to main branch:

Build production files
Deploy dist/ folder to AWS S3
📊 Status
CI Pipeline

Deploy Pipeline

👉 View all workflow runs:
https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions

☁️ Deployment
Hosting: AWS S3 Static Website
Output folder: dist/
Auto deployment on push to main
🧰 Tech Stack
React (Vite)
GitHub Actions
AWS S3
Node.js
npm
🔑 GitHub Secrets Used
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET
🏁 Result

✔ CI runs successfully
✔ Build successful
✔ Deploy to S3 successful
✔ GitHub Actions fully working
