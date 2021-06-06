const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
	constructor() {
		super();
	}

	getUser() {
		return {
			id: 0,
			email: "user@email.com",
			name: "Marcus Jensen"
		}
	}	
}

module.exports = UserAPI;