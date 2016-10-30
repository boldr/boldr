import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { checkResponseStatus, parseResponseToJSON } from './api';

describe('API Service', () => {
  describe('checkResponseStatus()', () => {
    it('should return response', () => {
      const response = { status: 200 };
      expect(checkResponseStatus(response)).to.equal(response);
    });

    it('should throw error', () => {
      const response = { status: 400, statusText: 'broken response' };
      expect(() => checkResponseStatus(response)).to.throw(Error, /broken response/);
    });
  });


  describe('parseResponseToJSON()', () => {
    it('should return object', () => {
      let parsed = false;
      const response = { json: () => { parsed = true; } };
      parseResponseToJSON(response);
      expect(parsed).to.be.true;
    });
  });
});
