const checklistGenerator = require('./lib/checklist-generator');

module.exports = robot => {
    robot.on('pull_request.opened', checklistGenerator);
    robot.on('pull_request.reopened', checklistGenerator);
    robot.on('pull_request.synchronize', checklistGenerator);
};
