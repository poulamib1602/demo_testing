const request = require('supertest');
const app = require('../index');

describe('POST /register', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/register')
      .send({ username: 'testuser', password: 'password' });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });

  it('should handle duplicate user registration', async () => {
    const response = await request(app)
      .post('/register')
      .send({ username: 'testuser', password: 'password' });

    expect(response.statusCode).toBe(409);
    expect(response.body.message).toBe('User already exists');
  });
});
