# DEVOPS CI/CD PIPELINE – REACT APP

## PROJECT OVERVIEW

This project demonstrates a complete CI/CD pipeline using GitHub Actions and AWS S3.

It automatically runs:
- Code Linting
- Testing
- Build Process
- Deployment to AWS S3

## CI PIPELINE

Runs automatically on every push and pull request.

Jobs:
- Lint code
- Run tests
- Build project

All jobs run in parallel.

## CD PIPELINE

Runs automatically when code is pushed to the main branch.

Steps:
- Build production files
- Upload build folder to AWS S3
- Deploy static website

## STATUS BADGES

CI Pipeline:

[![CI Pipeline](https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions/workflows/ci.yml/badge.svg)](https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions/workflows/ci.yml)

Deploy Pipeline:

[![Deploy to S3](https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions/workflows/deploy.yml/badge.svg)](https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions/workflows/deploy.yml)

## WORKFLOW LINK

https://github.com/TalalLiaquat/Devops-Portfolio-CICD/actions

## AWS DEPLOYMENT

Hosted on AWS S3 Static Website Hosting.

Build Output Folder:
dist/

## TECHNOLOGIES USED

- React (Vite)
- GitHub Actions
- AWS S3
- Node.js
- npm

## GITHUB SECRETS USED

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- S3_BUCKET

## FINAL RESULT

CI pipeline working ✔  
Build successful ✔  
Deploy successful ✔  
Full automation achieved ✔
