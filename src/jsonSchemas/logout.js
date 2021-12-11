module.exports = {
	type: 'object',
	required: ['token'],
	properties: {
		token: {
			description: 'Session token',
			type: 'string',
		},
	},
};
