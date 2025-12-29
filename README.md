# Steps tp push your code to GitHub:
# 1. Open the repo in GitHub
https://github.com/lmsoftwaresolutions/ssa-portal

# 2. Fork it
Click "Fork" (top-right) → "Create fork"

# 3. Clone your fork
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# 4. Add original repo as upstream
git remote add upstream https://github.com/<original-username>/<repo>.git

# 5. Create a new branch
git checkout -b <branch-name>

# 6. Make changes, then commit
git add .
git commit -m "message"

# 7. Push your branch to your fork
git push origin <branch-name>

# 8. Open Pull Request on GitHub
(Go to your fork → "Compare & Pull Request")


# Technical Stack
## Front-end / Web: 
React for building dynamic UIs
Next.js (for both web and PWA)

## Mobile: 
React Native

## Backend: 
Python FastAPI for REST/async services. (Independent microservices)
and
Node.js Express or NestJS to tightly couple with Javascript/TypeScript end-to-end

## Database: 
PostgreSQL (relational)
MongoDB (NoSQL)

## CI/CD:
GitHub Actions
Docker

## Cloud: 
Hostinger

