const nodeMailer = require("nodemailer");
const SMTP_CONFIG = require("./config/smtp");

const transporter = nodeMailer.createTransport({
   service: SMTP_CONFIG.service,
   auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
   },
});

async function main() {
   const enviarEmail = await transporter.sendMail({
      text: SMTP_CONFIG.text,
      subject: SMTP_CONFIG.subject,
      from: SMTP_CONFIG.from,
      to: SMTP_CONFIG.to,
   });

   console.log(enviarEmail);
}

main();
