var Slack = require('slack-node');

var config = require('../../config').Config;
webhookUri = config.slack;
slack = new Slack();
slack.setWebhook(webhookUri);

exports.slackPostMessage = slackPostMessage;

function slackPostMessage(receiver, title, status) {
    var attachment = [
        {
            "fallback": "Message from crawler",
            "color": status,
            "title": title
        }
    ];
    slack.webhook({
        channel: "#crawler",
        username: receiver + "-crawler",
        icon_emoji: ":" + receiver + "-emoji:",
        attachments: attachment
    }, function (err, response) {
    })

}

