/* global describe global it */
import request from 'supertest';
import chai, { expect } from 'chai';
import server from '../engine';

const agent = request.agent(server);
const userData = {
  email: 'test@boldr.io',
  password: 'password',
  displayName: 'Test User',
  firstName: 'Test',
  lastName: 'User',
  gender: 'male',
  location: 'The Internet',
  bio: 'Something of a robot',
  website: 'https://boldr.io'
};

describe('Auth API Endpoint', () => {
  it('Allows you to create an account - ', (done) => {
    agent
        .post('/api/v1/auth/signup')
        .send(userData)
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          done();
        });
  });
  // it('Allows you to login to your account.', (done) => {
  //   agent
  //       .post('/api/v1/auth/login')
  //       .send(userData)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         res.body.should.be.instanceof(Object);
  //         res.body.should.property('token');
  //         res.body.should.property('user');
  //         done();
  //       });
  // });
});
