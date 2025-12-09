const request = require('supertest');
const app = require('./app');

describe('API Health Check', () => {
  it('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('GET / should return API info', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toContain('DevOps CI/CD Demo API');
  });
});

