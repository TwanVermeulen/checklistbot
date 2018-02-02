const checklistGenerator = async context => {
    const params = context.issue({body: `
# PR Checklist:
- [ ] This PR is related to a TargetProcess entity
- [ ] I have performed a self-review of my own code
- [ ] This PR contains clean code and is therefore easy to understand by my peers
- [ ] I have added and run tests that prove my fix is effective or that my feature works
- [ ] I added before/after screenshots (in case of visual changes)
- [ ] Any dependent changes have been merged already
`});
    return context.github.issues.createComment(params)
};

module.exports = checklistGenerator;
