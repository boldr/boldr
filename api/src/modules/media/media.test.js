import chai, { expect } from 'chai';
import supertest from 'supertest';
import server from '../../engine';
import knex from '../../db/connection';

function request() {
  return supertest(server.listen());
}

describe('API -- Media', () => {
  describe('GET /api/v1/media', () => {
    it('It should return media from the db', (done) => {
      request()
        .get('/api/v1/media')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
