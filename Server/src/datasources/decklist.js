const { RESTDataSource } = require('apollo-datasource-rest');
const db = require('../database/db.ts');

class DecklistAPI extends RESTDataSource {
	constructor() {
		super();
	}

	async getByID( { id } ) {
		let x = await db.getDecklist(id);

		x = parseDeck(x);
		console.log("end of getAllByUser", x);

		return x;
	}

	async getAllDecklistsByUser( { id } ) {
		let x = await db.getAllDecklistsByUser(id);
		x.forEach(element => {
			element = parseDeck(element);
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

//Helper functions
//TODO: Is parseDeck needed when save function is implemented or is it still important to parse/stringify
function parseDeck(dtp) {
	let parsedDeck = dtp;

	if (dtp.mainDeck) parsedDeck.mainDeck = JSON.parse(dtp.mainDeck);
	if (dtp.sideBoard) parsedDeck.sideBoard = JSON.parse(dtp.sideBoard);
	if (dtp.companion) parsedDeck.companion = JSON.parse(dtp.companion);
	if (dtp.frontCard) parsedDeck.frontCard = JSON.parse(dtp.frontCard);

	return parsedDeck;
}

module.exports = DecklistAPI;