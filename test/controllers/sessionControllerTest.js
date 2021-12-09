const request = require('supertest');
const { StatusCodes } = require('http-status-codes');
const assert = require('assert');
const faker = require('faker');
const app = require('../../src/index');

describe('Session Controller', () => {

	describe('Login', () => {
		const LOGIN_PATH = '/api/login';

		it('should receive bad request when send empty body', async () => {
			await request(app)
				.post(LOGIN_PATH)
				.send({})
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(StatusCodes.BAD_REQUEST);
		});

		it('should receive bad request when send only email', async () => {
			let response = await request(app)
				.post(LOGIN_PATH)
				.send({ email: faker.internet.email() })
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(StatusCodes.BAD_REQUEST);

			assert.ok(response.body?.errors.length === 1);
			assert.ok(response.body?.errors[0]?.message === "should have required property 'password'");
		});

		it('should receive bad request when send only password', async () => {
			let response = await request(app)
				.post(LOGIN_PATH)
				.send({ password: faker.internet.password() })
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(StatusCodes.BAD_REQUEST);

			assert.ok(response.body.errors.length === 1);
			assert.ok(response.body?.errors[0]?.message === "should have required property 'email'");
		});

		it('should receive properly response when send valid data and nonexistent user', async () => {

			await request(app)
				.post(LOGIN_PATH)
				.send({ email: faker.internet.email(), password: faker.internet.password() })
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(StatusCodes.UNAUTHORIZED);

		});

	});

});