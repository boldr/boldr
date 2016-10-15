/* eslint-disable no-unused-expressions */
import supertest from 'supertest';
import nock from 'nock';
import server from '../../engine';

function request() {
  return supertest(server.listen());
}

describe('API -- Tokens /forgot-password', () => {
  it('should trigger an email', (done) => {
    nock.restore() && nock.isActive() || nock.activate();
    nock('http://localhost:3000').post('/api/v1/tokens/forgot-password').reply(202);
    request()
      .post('/api/v1/tokens/forgot-password')
      .set('Accept', 'application/json')
      .send({ email: 'admin@boldr.io' })
      .expect('Content-Type', /json/)
      .expect(202, done);
  });
});

describe('API -- Tokens /reset-password', () => {
  it('should change the password', (done) => {
    const resetToken = '03d10b9027e8243a13f232b5728e50089e037334f880408f8a9e82c9433be7ee';
    request()
      .post(`/api/v1/tokens/reset-password/${resetToken}`)
      .set('Accept', 'application/json')
      .send({ password: 'password123', token: resetToken })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
