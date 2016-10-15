import { expect } from 'chai';
import supertest from 'supertest';
import server from '../../engine';

function request() {
  return supertest(server.listen());
}

const loginData = {
  email: 'admin@boldr.io',
  password: 'password'
};

const badLoginData = {
  email: 'admin@boldr.io',
  password: 'fa'
};

describe('API -- Auth', () => {
  afterEach(() => {
    server.close();
  });
  describe('POST /api/v1/auth/login', () => {
    it('It should fail to login with an incorrect password', (done) => {
      request()
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .send(badLoginData)
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(500);
          expect(res.body).to.equal('Email or password is invalid. Please try again.');
        })
        .end(done);
    });
    it('It should fail to login without a password', (done) => {
      request()
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'admin@boldr.io', password: '' })
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
    it('It should be able to login', (done) => {
      request()
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .send(loginData)
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.include.keys('token');
          expect(res.body).to.include.keys('account');
          expect(res.body.account).to.include.keys('profile');
          expect(res.body.account).to.include.keys('role');
        })
        .end(done);
    });
    it('It should be return a jsonwebtoken', (done) => {
      request()
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .send(loginData)
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body.token).to.not.be.null; // eslint-disable-line
        })
        .end(done);
    });
  });
  describe('POST /api/v1/auth/signup', () => {
    it('Should fail without the required fields', (done) => {
      request()
        .post('/api/v1/auth/signup')
        .set('Accept', 'application/json')
        .send({ email: 'abc@test.com' })
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
    it('Should fail using an existing email', (done) => {
      request()
        .post('/api/v1/auth/signup')
        .set('Accept', 'application/json')
        .send({
          email: 'admin@boldr.io',
          password: 'test'
        })
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).to.equal('An account is already registered with that email address');
          expect(res.status).to.equal(409);
        })
        .end(done);
    });
  });
});
