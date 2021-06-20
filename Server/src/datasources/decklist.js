const { RESTDataSource } = require('apollo-datasource-rest');
const db = require('../database/db.ts');

class DecklistAPI extends RESTDataSource {
	constructor() {
		super();
	}

	async getByID( { id } ) {
		const x = await db.getDecklist(id);

		x.frontCard = JSON.parse(x.frontCard)
		console.log("end of getAllByUser", x);

		return x;
	}

	async getAllDecklistsByUser( { id } ) {
		let x = await db.getAllDecklistsByUser();
		x.forEach(element => {
			element.frontCard = JSON.parse(element.frontCard)
		});
		console.log('hola', x)
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