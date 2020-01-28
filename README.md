## Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Create input form for initial deposit
| User enters name and that becomes the account Name - only 1 possible account | "Example" | "Example" |
| User puts in $1 for initial deposit and current balance becomes $1 | $1 | $1 |
| When user deposits $1 (starting balance of $1), current balance updates | +$1 | $2 |
| When user withdraws $1 (starting balance of $1), current balance updates | -$1 | $0 |
| User enters name and that becomes the account Name - multiple accounts | "Example 2" | "Example, Example 2" |