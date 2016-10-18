import express from 'express';
import BaseController from '../BaseController';
import Account from './account.model';
import * as ctrl from './account.controller';

const controller = new BaseController(Account);

const router = new express.Router();
/**
 * @api {get} /accounts Retrieve all accounts
 * @apiName listAccounts
 * @apiGroup Account
 * @apiPermission public
 * @apiSuccess {Object[]} accounts List of accounts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/', ctrl.listAccounts);

/**
 * @api {get} /accounts/:id Retrieve account
 * @apiName getAccount
 * @apiGroup Account
 * @apiPermission public
 * @apiSuccess {Object} account Account's data.
 * @apiError 404 Account not found.
 */
router.get('/:id', ctrl.getAccount);

/**
 * @api {post} /accounts Create account
 * @apiName createAccount
 * @apiGroup Account
 * @apiPermission admin
 * @apiHeader {String} Authorization {token}
 * @apiParam {String} email Account's email address.
 * @apiParam {String} password Account's password.
 * @apiSuccess (Sucess 201) {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 * @apiError 409 Email already registered.
 */
router.post('/', controller.create.bind(controller));

/**
 * @api {put} /accounts/:id Update account
 * @apiName updateAccount
 * @apiGroup Account
 * @apiPermission member | admin
 * @apiHeader {String} Authorization {token}
 * @apiParam {String} [email] Account's email.
 * @apiParam {String} [password] Account's password.
 * @apiSuccess {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 Account not found.
 */
router.put('/:id', ctrl.updateAccount);

/**
 * @api {patch} /accounts/:id Update account
 * @apiName updateAccount
 * @apiGroup Account
 * @apiPermission member | admin
 * @apiHeader {String} Authorization {token}
 * @apiParam {String} [email] Account's email.
 * @apiParam {String} [password] Account's password.
 * @apiSuccess {Object} account Account's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 Account not found.
 */
router.patch('/:id', ctrl.updateAccount);

/**
 * @api {delete} /accounts/:id Delete account
 * @apiName destroyAccount
 * @apiGroup Account
 * @apiPermission admin
 * @apiHeader {String} Authorization {token}
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 Account not found.
 */

router.delete('/:id', ctrl.destroyAccount);

export default router;
