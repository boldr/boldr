import crypto from 'crypto';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import { config } from '../../config/boldr';
import logger from '../logger';

const auth = {
  auth: {
    api_key: config.mail.key,
    domain: config.mail.domain
  }
};
const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const randomString = () => Math.random().toString().substr(2, 8);

export function generateVerifyCode() {
  const content = Array.from(new Array(5), randomString).join();
  return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

export function handleMail(email, subj, verificationToken) {
  if (config.mail === undefined) { // Env variables are strings. :S
    logger.warn('Attempted to mail, but no credentials were present.');
    return new Promise((resolve, reject) => { return resolve(); });
  } else {
      // If we can!
    const to = email;
    const title = subj;
    const verifyCode = verificationToken;

    if (!to || !title || !verifyCode) {
      throw new Error('Incorrect mailing parameters');
    }
    return nodemailerMailgun.sendMail({
      from: config.mail.from,
      to,
      subject: title,
      html: `
        <p>
          Click link: https://boldr.io/account/register/email-check?code=${verifyCode}
        </p>
      `
    });
  }
}
