import Promise from 'bluebird';
import CryptoJS from 'crypto-js';

const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const debug = require('debug')('boldr:hashing');

const SALT_ROUNDS = 10;

const SALT = bcrypt.genSaltSync(SALT_ROUNDS);

function encryptPassword(password) {
  debug('encryptPassword', password);
  return bcrypt.hashAsync(password, SALT);
}

function checkPassword(password, hash) {
  debug('checkPassword', password);
  return bcrypt.compareSync(password, hash);
}

const randomString = () => Math.random().toString().substr(2, 8);

function generateVerifyCode() {
  const content = Array.from(new Array(5), randomString).join();
  return CryptoJS.HmacSHA256(content, SALT).toString();
}


export { encryptPassword, checkPassword, generateVerifyCode };
