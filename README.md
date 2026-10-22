# nodejs-demo-app: CI/CD with GitHub Actions

A simple Node.js web app with an automated CI/CD pipeline.

## Pipeline (`.github/workflows/main.yml`)
Triggers on every push to `main`:
1. **test**: checkout, set up Node.js 20, run `npm test`
2. **build-and-push** (runs only if tests pass): log in to DockerHub, build the Docker image, push it with `latest` and commit-SHA tags

## Secrets used
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

## Run locally
npm test
npm start
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app

## Docker image
https://hub.docker.com/r/hyiamkaran0011/nodejs-demo-app

## What I learned
CI/CD concepts, GitHub Actions jobs, steps and runners, secrets handling, Docker build-push workflow.
