const request = require('supertest');
const { StatusCodes } = require('http-status-codes');
const assert = require('assert');
const faker = require('faker');
const app = require('../../src/index');
const UserModel = require('../../src/models/user');
const SessionModel = require('../../src/models/session');

describe('Session Controller', () => {

	const email = faker.internet.email().toLowerCase();
	const password = faker.internet.password();

	const mockedUser = {
		name: faker.name.findName(),
		email,
		password,
	};

	const mockedSession = {
		userId: null,
		token: faker.datatype.uuid(),
	};

	before(async() => {
		await UserModel.insertMany([mockedUser]);
		const createdUser = await UserModel.findOne({email: mockedUser.email});
		mockedSession.userId = createdUser._id;
		await SessionModel.insertMany([mockedSession]);
	});

	after(async() => {
		await SessionModel.deleteMany({ userId: mockedUser.userId });
		await UserModel.deleteMany({ email: mockedUser.email });
	});

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

		it('should receive properly response when send valid data', async () => {
			let response = await request(app)
				.post(LOGIN_PATH)
				.send({ email: mockedUser.email, password: password })
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(StatusCodes.OK);

			assert.ok(response.body?.name === mockedUser.name);
			assert.ok(response.body?.email === mockedUser.email);
		});

	});

	describe('Logout', () => {
		const LOGOUT_PATH = '/api/logout';

		it('should receive unauthorized when send nonexistent token', async () => {
			await request(app)
				.post(LOGOUT_PATH)
				.set('Accept', 'application/json')
				.set('x-access-token', faker.datatype.uuid())
				.expect('Content-Type', /json/)
				.expect(StatusCodes.UNAUTHORIZED);
		});

		it('should receive ok when send existent token', async () => {
			await request(app)
				.post(LOGOUT_PATH)
				.set('Accept', 'application/json')
				.set('x-access-token', mockedSession.token)
				.expect('Content-Type', /json/)
				.expect(StatusCodes.OK);
		});

	});

});