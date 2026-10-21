# Extend it - Part two

**Use your AI assistant**\
Drive the assistant however you normally would — we'll ask you about any line you keep.

Today, all untagged rows in an account go to **one** team.\
But a shared cluster is rarely one team's, so customers want to split its cost by percentage:

```
prod     →  team-x 60%, team-y 40%
staging  →  team-x 60%
```

Before they apply rules like these, we want to show a **preview**: what each team would owe, and what stays untagged.

## What to build

A function that takes cost rows and split rules, and returns **what each team owes, plus what's left untagged.**

It only calculates — no writes, no changes to the DB or to `allocateUntaggedCosts`.\
Feel free to put it in a new file.

Run it with these two rules on `Wiz`'s rows — they are the `seedRows()` at the bottom of `src/db/mock-db.ts`.\
Reminder - `npm run show-db` prints them.

For example, the `prod` rule alone on `Wiz`'s rows gives:

```
team-x     1200   60% of prod's 2000
team-y      800   40% of prod's 2000
untagged    840   staging 750 + data 90 — no rule covers them
```

Yours to decide: the rule and result schema.\
Show it running.
