# Request reviewer action

This actions add reviewers to pull request.

## Inputs

### `token`

**Required** `GITHUB_TOKEN` or PAT

### `reviewers`

**Required** Multiline input, one GitHub username each line.

## Example usage

```yaml
name: request reviewer
on: [pull_request]
jobs:
  request_reviewer:
    runs-on: ubuntu-latest
    steps:
      - uses: qsliu2017/request-reviewer-action
        with:
          token: ${{ secret.GITHUB_TOKEN }}
          reviewers: |
            qsliu2017
```