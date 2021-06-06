const { RESTDataSource } = require('apollo-datasource-rest');
const db = require('../database/db.ts');

class DecklistAPI extends RESTDataSource {
	constructor() {
		super();
	}

	async getByID( { id } ) {
		console.log("TODO: finish getAllByUser with non-mocked data");
		const x = await db.getAllDecklistsByID(id);
		console.log("end of getAllByUser", x);

		return x;
	}

	async create(name, mainDeck, sideBoard, companion, frontCard) {
		return await db.addDecklist(name, mainDeck, sideBoard, companion, frontCard); 
	}

	update() {
		console.log("TODO: finish update decklist ");
		return [];
	}

	delete() {
		console.log("TODO: finish delete decklist ");
		return [];
	}
}

module.exports = DecklistAPI;