import chai, { expect } from 'chai';
import { generateVerifyCode } from './hashing';

describe('Hashing -- generateVerifyCode()', () => {
  it('should generate a random token', (done) => {
    const token = generateVerifyCode();
    expect(token).to.be.a('string');
    done();
  });
});
