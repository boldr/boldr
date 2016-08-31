/* global describe global it */
import request from 'supertest';
import chai, { expect } from 'chai';
import server from '../../engine';

const agent = request.agent(server);

describe('Boldr API Endpoint', () => {
  it('GET - returns a list of settings', (done) => {
    agent
        .get('/api/v1/settings')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
  });
  it('PUT - should modify the settings', (done) => {
    agent
        .put('/api/v1/settings/1')
        .send({ siteUrl: 'localhost' })
        .expect(202)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
  });
});
