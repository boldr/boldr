/* @flow */
import type { $Response, $Request, NextFunction } from 'express';
import { responseHandler } from '../../utils';
import { GeneralNotFoundError } from '../../utils/errors';
import Account from './account.model';

const debug = require('debug')('boldr:account-controller');

export async function listAccounts(req: $Request, res: $Response) {
  const accounts = await Account.query().eager('[profile, role]').omit(['password']);
  debug(accounts);
  if (!accounts) {
    return res.status(400).json('There seems to be a lack of accounts to choose from.');
  }
  return res.status(200).json(accounts);
}

export async function getAccount(req: $Request, res: $Response, next: NextFunction) {
  const account = await Account.query()
  .findById(req.params.id)
  .eager('[profile, role]')
  .omit(['password']);
  if (!account) return next(new GeneralNotFoundError());
  debug(account);
  return responseHandler(null, res, 200, account);
}

export function updateAccount(req: $Request, res: $Response, next: NextFunction) {
  if ('password' in req.body) {
    // $FlowIssue
    req.assert('password', 'Password must be at least 4 characters long').len(4);
  }
  // $FlowIssue
  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json(errors);
  }

  return Account.query()
    .patchAndFetchById(req.params.id, req.body)
    .then(account => res.status(202).json(account));
}

export async function destroyAccount(req: $Request, res: $Response, next: NextFunction) {
  await Account
    .query()
    .findById(req.params.id)
    .then(account => {
      return account.$relatedQuery('profile').delete();
    });
  await Account.query().deleteById(req.params.id);

  return res.status(204).json({ message: 'Account deleted.' });
}

export function unlinkAccount(req: $Request, res: $Response) {
  const provider = req.query.provider;

  const providers = ['facebook'];
  if (providers.indexOf(provider) === -1) {
    return res.status(404).send('Unknown provider');
  }

  return Account.query()
    // $FlowIssue
    .findById(req.user)
    .update({ [provider]: null })
    .then((account) => {
      res.status(200).send(account);
    });
}
