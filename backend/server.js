// goto https://www.google.com/settings/security/lesssecureapps turn on unless securite before run this script

var nodemailer = require('nodemailer');
const BASE_MAILADDRESS="galliumwang199@gmail.com"
const TARGET_MAILADDRESS="galliumwang1999@gmail.com"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: BASE_MAILADDRESS,
    pass: 'wangjia19990908'
  },
  // proxy: "https://127.0.0.1:7890" // FIXME
  proxy: "http://127.0.0.1:7890"
});


var mailOptions = {
  from: BASE_MAILADDRESS,
  to: TARGET_MAILADDRESS,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});