const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConfigData = new Schema({
    jira_url: {
        type: String
    },
    jira_email: {
        type: String
    },
    jira_token: {
        type: String
    },
    qtest_url: {
        type: String
    },
    qtest_token: {
        type: String
    },
    project_id: {
        type: Number
    },
    requirement_count: {
        type: Number
    },
    folder_id: {
        type: Number
    },
    xml_filepath: {
        type: String
    }
}, {
    collection: 'configdata'
});

module.exports = mongoose.model('ConfigData', ConfigData);