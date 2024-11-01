import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'production', // production // development // change this to development if you are working with localhost and configure the .env variables
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
} as SMTPTransport.Options);

type SendEmailDto = {
    sender: Mail.Address,
    recipients: Mail.Address[],
    subject: string;
    message: string;
}

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, recipients: recipients, subject, message } = dto;

    return await transport.sendMail({
        from: sender,
        to: recipients,
        subject,
        html: message,
        text: message,
    })
}