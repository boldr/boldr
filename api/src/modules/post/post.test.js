import chai, { expect } from 'chai';
import supertest from 'supertest';
import faker from 'faker';
import server from '../../engine';
import knex from '../../db/connection';

function request() {
  return supertest(server.listen());
}

const postData = {
  title: faker.name.title(),
  feature_image: faker.image.imageUrl(),
  content: faker.lorem.paragraphs(),
  excerpt: faker.lorem.paragraph(),
  status: 'published',
  tags: 'foo,bar'
};
const userCredentials = {
  email: 'admin@boldr.io',
  password: 'password'
};
describe('GET /api/v1/posts', () => {
  afterEach(() => {
    server.close();
  });
  it('It should return an array of posts', (done) => {
    request()
        .get('/api/v1/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body.results).to.be.an('array');
        })
        .end(done);
  });
  it('It should return the total number of posts', (done) => {
    request()
        .get('/api/v1/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.status).to.equal(200);
          expect(res.body.total).to.not.be.null;
        }).end(done);
  });
  it('It should return posts with tags included', (done) => {
    request()
        .get('/api/v1/posts?include=[tags]')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.results[0]).to.include.keys('tags');
          done();
        });
  });
  it('It should return posts with tags and author', (done) => {
    request()
        .get('/api/v1/posts?include=[tags,author]')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.results[0]).to.include.keys('tags');
          expect(res.body.results[0]).to.include.keys('author');
          expect(res.body.results[0]).to.include.keys('slug');

          done();
        });
  });
});
describe('GET /api/v1/posts/pid/:id', () => {
  afterEach(() => {
    server.close();
  });
  it('It should return the requested post', (done) => {
    request()
        .get('/api/v1/posts/pid/5c9ed236-79f0-4ff7-93bd-2815f06c74b4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.include.keys('title');
          expect(res.body).to.include.keys('slug');
          done();
        });
  });
});
describe('GET /api/v1/posts/slug/:slug', () => {
  afterEach(() => {
    server.close();
  });
  it('It should return the requested post', (done) => {
    request()
        .get('/api/v1/posts/slug/just-another-post')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.include.keys('title');
          expect(res.body).to.include.keys('slug');
          done();
        });
  });
});

describe('POST /api/v1/posts', () => {
  afterEach(() => {
    server.close();
  });
  it('It should require authentication', (done) => {
    request()
        .post('/api/v1/posts')
        .set('Accept', 'application/json')
        .send(postData)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          // expect(res.body.results).to.be.an('array');
          done();
        });
  });
  // it('It should create a new post and save to the database', (done) => {
  //   request()
  //       .post('/api/v1/posts')
  //       .set('Accept', 'application/json')
  //       .set('')
  //       .end((err, res) => {
  //         expect('Content-Type', /json/);
  //         expect(res.status).to.equal(200);
  //         expect(res.body.total).to.not.be.null;
  //         done();
  //       });
  // });
  // it('It should return posts with tags included', (done) => {
  //   request()
  //       .get('/api/v1/posts?include=[tags]')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         expect(res.body.results[0]).to.include.keys('tags');
  //         done();
  //       });
  // });
  // it('It should return posts with tags and author', (done) => {
  //   request()
  //       .get('/api/v1/posts?include=[tags,author]')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         expect(res.body.results[0]).to.include.keys('tags');
  //         expect(res.body.results[0]).to.include.keys('author');
  //         expect(res.body.results[0]).to.include.keys('slug');
  //
  //         done();
  //       });
  // });
});
