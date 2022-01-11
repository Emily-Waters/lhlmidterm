// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNumber = process.env.TWILIO_PHONE_NUMBER;
const myMSSid = process.env.TWILIO_MSS_ID;

const client = require('twilio')(accountSid, authToken);

client
  .messages
  .create({
    body: 'Test message',
    messagingServiceSid: myMSSid,
    to: myNumber
  })
  .then(message => console.log(message.sid))
  .done();
