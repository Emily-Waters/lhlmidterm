// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const targetNumber = process.env.TWILIO_TARGET_NUMBER;
const senderNumber = process.env.TWILIO_PHONE_NUMBER;
const myMSSid = process.env.TWILIO_MSS_ID;

const client = require('twilio')(accountSid, authToken);

client
  .messages
  .create({
    body: '',
    messagingServiceSid: myMSSid,
    to: targetNumber,
    from: senderNumber
  })
  .then(message => console.log(message.sid))
  .done();
