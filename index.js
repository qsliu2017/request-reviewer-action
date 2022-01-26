const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        if (github.context.eventName !== 'pull_request') {
            throw new Error('This action can only be used in pull requests');
        }

        const octokit = github.getOctokit(core.getInput('token', { required: true }));

        const context = github.context;
        const payload = context.payload;
        const prNumber = payload.pull_request.number;

        const reviewers = core.getMultilineInput('reviewers', { required: true });

        await octokit.rest.pulls.requestReviewers({
            owner: context.repo.owner,
            repo: context.repo.repo,
            pull_number: prNumber,
            reviewers: reviewers
        });
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run();
