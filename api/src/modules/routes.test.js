import chai, { expect } from 'chai';
import supertest from 'supertest';
import server from '../engine';

function request() {
  return supertest(server.listen());
}

describe('API Routes', () => {
  afterEach(() => {
    server.close();
  });
  it('GET - /api/v1/heatlh | should return a json response', (done) => {
    request()
    .get('/api/v1/health-check')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});