/* global describe global it */
import request from 'supertest';
import chai, { expect } from 'chai';
import server from '../../engine';

const agent = request.agent(server);

describe('Tag API Endpoint', () => {
  it('GET - returns a list of tags', (done) => {
    agent
        .get('/api/v1/tags')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
  });
});
