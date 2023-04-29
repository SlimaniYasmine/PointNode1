const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, 
  auth: {
    user: "slimyasmine18@outlook.sa", // sender email address
    pass: "", // sender email password
  },
});

let mailOptions = {
  from: "slimyasmine18@outlook.sa", // sender
  to: "slimyasmine18@gmail.com", // receiver
  subject: "Hello Email automatique", 
  text: "Hello world?", 
  html: "<b>Hello world?</b>", 
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});

