# Exercise 2 — Split costs

Today, all untagged rows in an account go to **one** team.\
But a shared cluster is rarely one team's, so customers want to split its cost by percentage:

```
prod     →  team-x 75%, team-y 25%
staging  →  team-x 80%
```

Before they apply rules like these, we want to show a **preview**: what each team would owe, and what stays untagged.

## What to build

A function that takes cost rows and split rules, and returns **what each team owes, plus what's left untagged.**

It only calculates — no writes, no changes to the DB or to `allocateUntaggedCosts`.\
Feel free to put it in a new file.

Run it with these two rules on `Wiz`'s rows.

For example, the `prod` rule alone on `Wiz`'s rows gives:

```
team-x     1500   // 75% of prod (2000)
team-y      500   // 25% of prod (2000)
untagged    840   // staging (750) + data (90), no rule covers them
```

Yours to decide: the rule and result schema.\
Show it running.

*Use your AI assistant. Drive it however you normally would — we'll ask you about any line you keep.*
