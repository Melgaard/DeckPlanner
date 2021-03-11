// import { DeckList, Card} from '../types';
module.exports = {
	objectFromString(deckString) {
		const deck = {mainDeck: null};

		var deckArray = deckString.replace(/\t/g, '').split('\n');

		//Set companion
		//maybe own method
		const cLine = deckString.indexOf('Companion');
		if (cLine != -1) {
			deck.companion = this.lineToCard(deckArray[cLine + 1]);
		}

		//Set deck
		//TODO: Refactor to make cleaner, maybe own method
		const dLine = deckArray.indexOf('Deck');
		const dLineEnd = deckArray.indexOf('', dLine);
		if (dLine != -1) {
			let deckList = [];
			for (let i = dLine + 1; i < dLineEnd; i++) {
				deckList = deckList.concat(this.lineToCard(deckArray[i]));
			}
			deck.mainDeck = deckList;
		}

		//Set sideboard
		//TODO: Refactor to make cleaner, maybe own method
		const sLine = deckArray.indexOf('Sideboard');
		const sLineEnd = deckArray.indexOf('', sLine);
		if (sLine != -1) {
			let sideboard = [];
			for (let i = sLine + 1; i < sLineEnd; i++) {
				sideboard = sideboard.concat(this.lineToCard(deckArray[i]));
			}
			deck.sideBoard = sideboard;
		}

		return deck;
	},
	lineToCard(line) {
		const card = {name: null};

		card.quantity = Number.parseInt(line.split(' ')[0]);

		const nameStart = line.indexOf(' ') + 1;
		const nameEnd = line.lastIndexOf(' (');
		card.name = line.slice(nameStart, nameEnd);
		
		const setSplit = line.split(/[()]/);
		card.set = setSplit[setSplit.length - 2];
		
		const cnSplit = line.split(' ');
		card.collectorNumber = cnSplit[cnSplit.length - 1];
		
		return card;
	}
}