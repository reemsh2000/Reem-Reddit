/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../src/app');

test('Testing for / endpoint and get status 200', (done) => {
  supertest(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('Testing for /profile endpoint and get status 200', (done) => {
  supertest(app)
    .get('/profile')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});
test('Testing for /home endpoint and get status 200', (done) => {
  supertest(app)
    .get('/home')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});
test('Testing for /login endpoint and get status 200', (done) => {
  supertest(app)
    .post('/login')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});
test('Testing for /signup endpoint and get status 200', (done) => {
  supertest(app)
    .post('/signup')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});
test('Testing for /delete/:postId endpoint and get status 200', (done) => {
  supertest(app)
    .delete('/delete/:postId')
    .expect(200)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});
