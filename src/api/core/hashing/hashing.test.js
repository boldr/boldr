import { expect } from 'chai';
import { generateHash, SALT, randomString } from './hashing';

describe('Hashing -- generateVerifyCode()', () => {
  it('should generate a random token', (done) => {
    const token = generateHash();
    expect(token).to.be.a('string');
    done();
  });
});

describe('Hashing -- SALT', () => {
  it('should generate a salt string', (done) => {
    const slt = SALT;
    expect(slt).to.be.a('string');
    done();
  });
});

describe('Hashing -- randomString', () => {
  it('should generate a random string', (done) => {
    const rstring = randomString();
    expect(rstring).to.be.a('string');
    done();
  });
});
