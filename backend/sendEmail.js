const nodemailer = require("nodemailer");

async function sendEmail(mailObj) {
    const { toEmail, subject, text } = mailObj;

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "ayla55@ethereal.email",
                pass: "tqnTXGTy1RF8s2fYm8",
            },
            secure: false,
            logger: true,
            debug: true,
        });

        let info = await transporter.sendMail({
            from: '"Magdalena" <test@example.com>',
            to: toEmail,
            subject: subject,
            html: `<h1>${text}</h1>`,
        });
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        console.log(`Message sent: ${info.messageId}`);
        return `Message sent: ${info.messageId}`;


    } catch (error) {
        console.error(error);
    }
}

module.exports = sendEmail;
