import crypto from 'crypto';
import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import config from '../../config/boldr';
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
    const DEFAULT_URL = 'http://localhost:3000';
    if (!to || !title || !verifyCode) {
      throw new Error('Incorrect mailing parameters');
    }
    return nodemailerMailgun.sendMail({
      from: config.mail.from,
      to,
      subject: title,
      html: `
        <div style='margin: 0; padding: 0; width: 100%; font-family: Trebuchet MS, sans-serif;'>
        <div style='background-color: #f2f2f2; padding: 45px;'>
        <div style='background-color: #ffffff; padding: 40px; text-align: center;'>
        <p style='color: #5f5f5f;'>Click the big button below to activate your account.</p>
        <a href="${DEFAULT_URL}/verify-email/?email=${email}&token=${verifyCode}" style='background-color: #288feb; color: #fff; padding: 14px; text-decoration: none; border-radius: 5px; margin-top: 20px; display: inline-block;'>Activate Account</a>
        </div> <h3 style='color: #5f5f5f; text-align: center; margin-top: 30px;'>BoldrCMS Team</h3></div></div>
      `
    });
  }
}
export function mailResetPassword(email, subj, token) {
  if (config.mail === undefined) { // Env variables are strings. :S
    logger.warn('Attempted to mail, but no credentials were present.');
    return new Promise((resolve, reject) => { return resolve(); });
  } else {
      // If we can!
    const to = email;
    const title = subj;
    const resetToken = token;
    const DEFAULT_URL = 'http://localhost:3000';
    if (!to || !title || !resetToken) {
      throw new Error('Incorrect mailing parameters');
    }
    return nodemailerMailgun.sendMail({
      from: config.mail.from,
      to,
      subject: title,
      html: `
        <div style='margin: 0; padding: 0; width: 100%; font-family: Trebuchet MS, sans-serif;'>
        <div style='background-color: #f2f2f2; padding: 45px;'>
        <div style='background-color: #ffffff; padding: 40px; text-align: center;'>
        <p style='color: #5f5f5f;'>Click the big button below to activate your account.</p>
        <a href="${DEFAULT_URL}/reset-password/?email=${email}&token=${resetToken}" style='background-color: #288feb; color: #fff; padding: 14px; text-decoration: none; border-radius: 5px; margin-top: 20px; display: inline-block;'>Activate Account</a>
        </div> <h3 style='color: #5f5f5f; text-align: center; margin-top: 30px;'>BoldrCMS Team</h3></div></div>
      `
    });
  }
}
export function mailPasswordConfirm(email, subj) {
  if (config.mail === undefined) { // Env variables are strings. :S
    logger.warn('Attempted to mail, but no credentials were present.');
    return new Promise((resolve, reject) => { return resolve(); });
  } else {
      // If we can!
    const to = email;
    const title = subj;
    const DEFAULT_URL = 'http://localhost:3000';
    if (!to || !title) {
      throw new Error('Incorrect mailing parameters');
    }
    return nodemailerMailgun.sendMail({
      from: config.mail.from,
      to,
      subject: title,
      html: `
        <div style='margin: 0; padding: 0; width: 100%; font-family: Trebuchet MS, sans-serif;'>
        <div style='background-color: #f2f2f2; padding: 45px;'>
        <div style='background-color: #ffffff; padding: 40px; text-align: center;'>
        <p style='color: #5f5f5f;'>This email is confirming that your password has been changed successfully.</p>
        </div> <h3 style='color: #5f5f5f; text-align: center; margin-top: 30px;'>BoldrCMS Team</h3></div></div>
      `
    });
  }
}
