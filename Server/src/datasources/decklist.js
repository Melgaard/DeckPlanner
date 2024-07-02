const { RESTDataSource } = require('apollo-datasource-rest');
const db = require('../database/db.ts');

class DecklistAPI extends RESTDataSource {
	constructor() {
		super();
	}

	//TODO: replace retVal variable name
	async getByID( { id } ) {
		let retVal = await db.getDecklist(id);
		retVal = parseDeck(retVal);
		return retVal;
	}

	//TODO: replace retVal variable name
	async getAllDecklistsByUser( { id } ) {
		let retVal = await db.getAllDecklistsByUser(id);
		retVal.forEach(deck => {
			deck = parseDeck(deck);
		});
		return retVal;
	}

	async create(name, format, mainDeck, sideBoard, commander, companion, frontCard) {
		//TODO: STRINGIFY TOGETHER, OR BETTER HAVE DECKLIST INPUT TYPE
		const createdID = await db.addDecklist(name, format, JSON.stringify(mainDeck), JSON.stringify(sideBoard), JSON.stringify(commander), JSON.stringify(companion), JSON.stringify(frontCard)); 
		//TOOD: Create better return type to not wrap Decklist as [Decklist]
		return [await this.getByID({id: createdID})];
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
	if (dtp.commander) parsedDeck.commander = JSON.parse(dtp.commander);
	if (dtp.companion) parsedDeck.companion = JSON.parse(dtp.companion);
	if (dtp.frontCard) parsedDeck.frontCard = JSON.parse(dtp.frontCard);

	return parsedDeck;
}

module.exports = DecklistAPI;