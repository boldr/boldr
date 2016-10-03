import Promise from 'bluebird';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

const debug = require('debug')('boldr:hashing');

const SALT = bcrypt.genSaltSync(10);
const randomString = () => Math.random().toString().substr(2, 8);

function generateVerifyCode() {
  const content = Array.from(new Array(5), randomString).join();
  return CryptoJS.HmacSHA256(content, SALT).toString();
}


export { generateVerifyCode };
