# Finout — Engineering Interview

## The domain

Every day Finout pulls its customers' cloud bills (AWS, GCP, Azure, Kubernetes…) and stores them as **cost rows**.\
Each row belongs to one customer account (`Wiz`, `Elastic`).

Each row also has a `team` column. Setting it assigns the cost to a team,so later we can see how much each team costs the company.

A cloud bill arrives with rows nobody owns — $2000 for a cluster several teams share.\
Someone has to decide which team pays for what. All rows without a team are **untagged**.

## Setup

```bash
npm install
npm test           # should be green on a fresh clone
npm run show-db    # the rows in the (mock) DB
npm run allocate   # runs the function under review, step by step
```

## What we'll do

**First you'll review some code.**\
`allocateUntaggedCosts` in `src/api/cost-allocation.ts` lets a user assign **all** the untagged rows in their account to one team,
with a reason that goes to the audit trail.\
It compiles, it works, and it's about to ship to production.

`npm run allocate` prints the whole flow:\
the request → rows before → the untagged rows it reads → what it returns → every DB call it made → rows and audit trail after.

We'll run it, then read it — tell us what you think, starting with whatever worries you most:

- How does it work?
- What worries you?
- What would you change or add before it goes to production?

No AI for this part — we want your read.

**Then we'll extend the code, with your assistant.**

## Files

```
src/api/cost-allocation.ts   the code under review
src/db/mock-db.ts            the mock DB — existing code, not part of the review. It behaves like production; its interface is the contract.
scripts/run-allocation.ts    npm run allocate — edit freely
scripts/show-db.ts           npm run show-db
```

- Nothing is destructive. The DB lives in memory and is reseeded on every run - edit the request, seed different rows.
- We care about how you reason, not how much you finish.
