import { expect } from 'chai';
import supertest from 'supertest';
import server from '../../engine';

function request() {
  return supertest(server.listen());
}

describe('API -- Account', () => {
  afterEach(() => {
    server.close();
  });
  describe('GET /api/v1/accounts', () => {
    it('It should return a list of accounts', (done) => {
      request()
        .get('/api/v1/accounts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
        })
        .end(done);
    });
    it('It should retrieve an account by id', (done) => {
      request()
        .get('/api/v1/accounts/1b062e26-df71-48ce-b363-4ae9b966e7a0')
        .set('Accept', 'application/json')
        .send({ email: 'admin@boldr.io', password: '' })
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys('email');
        })
        .end(done);
    });
    it('It should create an account', (done) => {
      request()
        .post('/api/v1/accounts')
        .set('Accept', 'application/json')
        .send({ email: 'testaccount@boldr.io', password: 'password' })
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
        })
        .end(done);
    });
  });
});
