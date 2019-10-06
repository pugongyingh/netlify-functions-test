'use strict';

var request = require("request");
var qs = require('querystring');

// populate environment variables locally.
require('dotenv').config();


exports.handler = function(event, context, callback) {

  var json = JSON.parse(qs.parse(event.body).payload);
  // var answer = json.actions[0].value;
  console.log('payload: ', json);

  var slackURL = process.env.SLACK_WEBHOOK_URL
  var slackPayload = {
    "text": "You clicked the Button in Slack!",
  }

  // post the notification to Slack
  request.post({url:slackURL, json: slackPayload}, function(err, httpResponse, body) {
    var msg;
    if (err) {
      msg = 'Post to Slack failed:' + err;
    } else {
      msg = 'callback-slack successful!  Server responded with:' + body;
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg })
    })
    return console.log(msg);
  });

  
}