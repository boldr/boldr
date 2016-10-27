/* eslint-disable no-unused-expressions */
import supertest from 'supertest';
import nock from 'nock';
import server from '../../engine';

function request() {
  return supertest(server.listen());
}

describe('API -- Tokens /forgot-password', () => {
  afterEach(() => {
    server.close();
  });
  it('should trigger an email', () => {
    nock.restore() && nock.isActive() || nock.activate();
    nock('http://localhost:3000').post('/api/v1/tokens/forgot-password').reply(202);
    request()
      .post('/api/v1/tokens/forgot-password')
      .set('Accept', 'application/json')
      .send({ email: 'admin@boldr.io' })
      .expect('Content-Type', /json/)
      .expect(202);
  });
});

// describe('API -- Tokens /reset-password', () => {
//   it('should change the password', (done) => {
//     const token = '03d10b9027e8243a13f232b5728e50089e037334f880408f8a9e82c9433be7ee';
//     request()
//       .post('/api/v1/tokens/reset-password/03d10b9027e8243a13f232b5728e50089e037334f880408f8a9e82c9433be7ee')
//       .set('Accept', 'application/json')
//       .send({ password: 'password123', token })
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });
