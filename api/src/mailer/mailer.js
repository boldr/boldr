import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

import config from '../../../config';

const conf = config.conf;

const debug = require('debug')('boldr:auth:controller');

const auth = {
  auth: {
    api_key: conf.get('mail.key'),
    domain: conf.get('mail.domain')
  }
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

export default function handleMail(user, mailBody, mailSubject) {
  const to = user.email;
  if (!to || !mailSubject) {
    throw new Error('Incorrect mailing parameters');
  }
  return nodemailerMailgun.sendMail({
    from: conf.get('mail.from'),
    to,
    subject: mailSubject,
    html: mailBody
  });
}
