import chai, { expect } from 'chai';
import supertest from 'supertest';
import server from '../../engine';
import knex from '../../db/postgres';

function request() {
  return supertest(server.listen());
}

describe('API -- User', () => {
  afterEach(() => {
    server.close();
  });
  describe('GET /api/v1/users', () => {
    it('It should return an array of users', (done) => {
      request()
        .get('/api/v1/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
  describe('GET /api/v1/users/:id', () => {
    it('it should return the requested user', (done) => {
      request()
        .get('/api/v1/users/1b062e26-df71-48ce-b363-4ae9b966e7a0')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('first_name');
        })
        .end(done);
    });
  });
  describe('PUT /api/v1/users/:id', () => {
    it('it should fail without authentication', (done) => {
      request()
        .put('/api/v1/users/1b062e26-df71-48ce-b363-4ae9b966e7a0')
        .set('Accept', 'application/json')
        .set('Authorization', 'INCORRECT')
        .send({ first_name: 'Yolo' })
        .expect(401, done);
    });
  });
});
