import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { parseJWT } from './token';

describe('Token Service', () => {
  describe('parseJWT()', () => {
    it('should parse valid JSON Web Token', () => {
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
      const token = parseJWT(jwt);
      expect(token).to.have.property('header').that.is.an('object');
      expect(token).to.have.property('payload').that.is.an('object');
      expect(token).to.have.property('signature').that.is.an('string');
    });

    it('should return null for invalid token', () => {
      const brokenJWT = 'nR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIi';
      expect(() => { return parseJWT(brokenJWT); }).to.not.throw(Error);
      expect(parseJWT(brokenJWT)).to.be.null;
    });
  });
});
