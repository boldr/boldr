import request from 'supertest';
import chai from 'chai';
import { expect } from 'chai';
import server from '../server';

const agent = request.agent(server);

describe('GET /api/v1/health-check', function() {
  it('returns OK', function(done) {
    agent
        .get('/api/v1/health-check')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(res.text).to.equal('OK');
          done();
        });
  });
});
