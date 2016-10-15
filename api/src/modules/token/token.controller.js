/* eslint-disable no-unused-vars */
import uuid from 'node-uuid';
import handleMail from '../../mailer';
import { passwordModifiedEmail, forgotPasswordEmail } from '../../mailer/templates';
import Account from '../account/account.model';
import { responseHandler, generateVerifyCode } from '../../utils';
import Token from './token.model';

/**
 * forgottenPassword takes an email address, generates a reset token, updates the user in the database, then sends
 * an email with the token to reset the account password.
 * @param req
 * @param res
 * @returns {*}
 */
export async function forgottenPassword(req, res, next) {
  const user = await Account.query().where({ email: req.body.email }).first();
  if (!user) {
    return res.status(404).json({ error: 'Unable to locate an account with the provided email.' });
  }
  const mailSubject = '[Boldr] Password Reset';
  const verificationToken = generateVerifyCode();
  const account = await Account
    .query()
    .findById(user.id);

  await account.$relatedQuery('tokens').insert({
    id: uuid.v4(),
    reset_password_token: verificationToken,
    account_id: account.id
  });
  const mailBody = forgotPasswordEmail(verificationToken);

  await handleMail(account, mailBody, mailSubject);
  return responseHandler(null, res, 202, { message: 'Sending email with reset link' });
}

/**
 * resetPassword takes the user's reset_password_token, and a new password, hashes it and updates the password
 * @param req
 * @param res
 * @returns {*}
 */
export async function resetPassword(req, res, next) {
  const findToken = await Token.query().where({ reset_password_token: req.body.token }).first();
  if (!findToken) {
    return res.status(404).json({ error: 'Unable to locate an account with the provided token.' });
  }
  const mailSubject = '[Boldr] Password Changed';

  const account = await Account.query().findById(findToken.account_id);
  await Account.query().patchAndFetchById(account.id, {
    password: req.body.password
  });
  const mailBody = await passwordModifiedEmail(account);
  handleMail(account, mailBody, mailSubject);
  return res.status(200).json('Sent');
}
