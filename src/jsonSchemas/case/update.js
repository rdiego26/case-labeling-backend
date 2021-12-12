module.exports = {
	type: 'object',
	required: ['labels', 'description'],
	properties: {
		description: {
			type: 'string',
		},
		labels: {
			type: 'array',
			minItems: 1,
			items: {
				id: {
					description: 'Id of condition',
					type: 'string',
				},
			}
		},
	},
};
