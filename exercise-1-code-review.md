# Exercise 1 — Code review

## Background

Every day Finout pulls its customers' cloud bills (AWS, GCP, Azure, Kubernetes…) and stores them as **cost rows**.\
Each row belongs to one customer account (`Wiz`, `Elastic`).

Each row also has a `team` column. Setting it assigns the cost to a team,\
so later we can see how much each team costs the company.

Rows with no team are **untagged**.

## The code

`allocateUntaggedCosts` in `src/api/cost-allocation.ts` lets a user assign **all** the untagged rows in their account to one team,\
with a reason that goes to the audit trail.

It compiles, it works, and it's about to ship to production.

The DB is a mock that lives in memory.\
The code calls its functions in `src/db/mock-db.ts` — they behave exactly like production.

## Run it

```bash
npm run show-db    # the rows in the DB
npm run allocate   # runs allocateUntaggedCosts once, as user-17 from Wiz
```

`npm run allocate` prints the whole flow:\
the request → rows before → the untagged rows it reads → what it returns → every DB call it made → rows and audit trail after.

## Your task

Review `src/api/cost-allocation.ts` as if it ships tomorrow:

- How does it work?
- What worries you? Start with what worries you most.
- What would you change or add before it goes to production?

*No AI for this part — we want your read.*
