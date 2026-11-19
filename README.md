# Finout — Engineering Interview

Two exercises on the same small codebase:

1. **[Code review](exercise-1-code-review.md)** — a function is about to ship to production. Read it, run it, tell us what you'd change. *No AI.*
2. **[Split costs](exercise-2-split-costs.md)** — extend it to split costs across teams. *With your AI assistant.*

## Setup

```bash
npm install
npm test           # should be green on a fresh clone
npm run show-db    # the rows in the (mock) DB
npm run allocate   # runs the function under review, step by step
```

## Files

```
src/api/cost-allocation.ts      the code under review
src/db/mock-db.ts               the mock DB — existing code, not part of the review. Its interface is the contract.
src/scripts/run-allocation.ts   npm run allocate — edit freely
src/scripts/show-db.ts          npm run show-db
```

- Nothing is destructive. The DB lives in memory and is reseeded on every run.
- We care about how you reason, not how much you finish.
