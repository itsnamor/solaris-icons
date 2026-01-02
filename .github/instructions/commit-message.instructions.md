Generate a concise, informative commit message using the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) format: 

<type>(<scope>): <subject>
<body>
<footer>

## Type

| Type     | Description                           |
| -------- | ------------------------------------- |
| feat     | New feature                           |
| fix      | Bug fix                               |
| chore    | Maintenance (e.g., tooling, deps)     |
| docs     | Documentation changes                 |
| refactor | Code restructure (no behavior change) |
| test     | Adding or refactoring tests           |
| style    | Code formatting (no logic change)     |
| perf     | Performance improvements              |


## Scope

Scope: Specify the part of the codebase affected (e.g., api, ui, auth).  Omit if the change is broad or system-wide.

## Subject 

Subject: Write a short, imperative mood description of the change (e.g., 'Add feature', not 'Added feature'). Keep it under 50 characters.  Do not end with a period. Capitalize the first word.

## Body (optional)

Body: Provide more detailed explanatory text, if necessary. Wrap at 72 characters. Explain what and why, not how. Always use bullets for multiple points.

## Footer: 
Reference any issue numbers with a # prefix (e.g., Closes #123).  For breaking changes, start with BREAKING CHANGE: followed by an explanation.
