const request = require('supertest');
const assert = require('assert');
const app = require('../../src/index');
const appData = require('../../package.json');

describe('Health Check Controller', () => {

	it('should check the current state API', async () => {
		const response = await request(app).get('/api/healthCheck');
		assert.ok(response.body?.result === 'I am alive!');
		assert.ok(response.body?.version === appData.version);
		assert.ok(response?.statusCode === 200);
	});

	it('should receive 404 to nonexistent route', async () => {
		const response = await request(app).get('/nonexistent');
		assert.ok(response?.statusCode === 404);
	});

});