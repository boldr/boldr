/* global describe global it */
import request from 'supertest';
import chai, { expect } from 'chai';
import server from '../../index';

const agent = request.agent(server);

describe('Articles API Endpoint', () => {
  it('GET - returns a list of articles', (done) => {
    agent
        .get('/api/v1/articles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
  });
});
