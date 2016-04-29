/* global it, __DEV__, describe, before, post, get */
import { expect } from 'chai';
import { mapUrl } from '../../tools/url';
import Post from '../../src/server/db/models/post';
import app from '../../src/server/server.test';

const request = require('supertest');

describe('API - Posts', () => {
  describe('GET /api/v1/posts', () => {
    it('respond with json', done => {
      const server = app.listen();
      request(server)
        .get('/api/v1/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});