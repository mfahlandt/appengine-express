var express = require('express');
var router = express.Router();
var slack = require('../src/helper/slack')

/* GET home page. */
router.get('/', function(req, res, next) {

    slack.slackPostMessage('icon', "called!", "warning");

    res.status(200).send('successfull slacked');
});

module.exports = router;
