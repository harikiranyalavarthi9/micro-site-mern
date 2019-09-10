const express = require('express');
const configRoutes = express.Router();

let ConfigData = require('./configdata.model');

configRoutes.route('/add').post(function(req, res) {
    let configdata = new ConfigData(req.body);
    configdata.save()
        .then(configdata => {
            res.status(200).json({'configdata': 'configdata is added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

configRoutes.route('/').get(function (req, res) {
    ConfigData.find(function(err, configdata){
        if(err){
            console.log(err);
        }
        else {
            res.json(configdata);
        }
    });
});

configRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    ConfigData.findById(id, function(err, configdata) {
        res.json(configdata);
    });
});

configRoutes.route('/update/:id').post(function(req, res) {
    ConfigData.findById(req.params.id, function(err, configdata) {
        if(!configdata) {
            res.status(404).send("data is not found");
        } else {
            configdata.jira_url = req.body.jira_url;
            configdata.jira_email = req.body.jira_email;
            configdata.jira_token = req.body.jira_token;
            configdata.qtest_url = req.body.qtest_url;
            configdata.qtest_token = req.body.qtest_token;
            configdata.project_id = req.body.project_id;
            configdata.requirement_count =  req.body.requirement_count;
            configdata.folder_id = req.body.folder_id;
            configdata.xml_filepath = req.body.xml_filepath;

            configdata.save()
            .then(configdata => {
                res.json("Update Complete");
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

configRoutes.route('/delete/:id').get(function(req, res) {
    ConfigData.findByIdAndRemove({_id: req.params.id}, function(err, configdata) {
        if(err) {
            res.json(err);
        } else {
            res.json("Sucessfully removed!");
        }
    });
});

module.exports = configRoutes;