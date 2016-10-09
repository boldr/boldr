import chai, { expect } from 'chai';
import supertest from 'supertest';
import server from '../../engine';
import knex from '../../db/connection';

function request() {
  return supertest(server.listen());
}

describe('API -- Settings', () => {
  describe('GET /api/v1/settings', () => {
    it('It should return the site settings', (done) => {
      request()
        .get('/api/v1/settings')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
