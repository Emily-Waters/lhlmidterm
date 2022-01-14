const express = require('express');
const res = require('express/lib/response');
const router  = express.Router();

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const targetNumber = process.env.TWILIO_TARGET_NUMBER;
const senderNumber = process.env.TWILIO_PHONE_NUMBER;
const myMSSid = process.env.TWILIO_MSS_ID;

const client = require('twilio')(accountSid, authToken);

// send sms
router.post('/', (req, res) => {
  const queryParams = req.query;

  client.messages.create({
    body: queryParams.body,
    messagingServiceSid: myMSSid,
    to: targetNumber,
    from: senderNumber
  })
    .then(() => {
      res.status(200);
      res.json();
    })
    .catch(err => console.log('ERROR: ', err.messages));
});

// export router object
module.exports = router;
