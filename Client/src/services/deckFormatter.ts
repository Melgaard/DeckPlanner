import { Decklist, Card, Format} from '../types';
export default {
	decklistFromString(deckString: string): Decklist{
		const deck: Decklist = {
			name: 'new deck',
			format: Format.STANDARD, //TODO: DECK CURRENTLY DEFAULT TO STANDARD HERE!
			mainDeck: null
		};

		//Remove 'Tabs' and 'Carriage returns' before splitting on 'New line'
		var deckArray: string[] = deckString.replace(/[\t\r]/g, '').split('\n');

		//Set commander
		//maybe own method
		const commanderLine: number = deckString.indexOf('Commander');
		if (commanderLine != -1) {
			deck.commander = this.lineToCard(deckArray[commanderLine + 1]);
		}

		//Set companion
		//maybe own method
		const companionLine: number = deckString.indexOf('Companion');
		if (companionLine != -1) {
			deck.companion = this.lineToCard(deckArray[companionLine + 1]);
		}

		//Set deck
		//TODO: Refactor to make cleaner, maybe own method
		const dLine: number = deckArray.indexOf('Deck');
		const dLineEnd: number = deckArray.indexOf('', dLine);
		if (dLine != -1) {
			let decklist: Array<Card> = [];
			for (let i = dLine + 1; i < dLineEnd; i++) {
				decklist = decklist.concat(this.lineToCard(deckArray[i]));
			}
			deck.mainDeck = decklist;
		}

		//Set sideboard
		//TODO: Refactor to make cleaner, maybe own method
		const sLine = deckArray.indexOf('Sideboard');
		const sLineEnd = deckArray.indexOf('', sLine);
		if (sLine != -1) {
			let sideboard: Array<Card> = [];
			for (let i = sLine + 1; i < sLineEnd; i++) {
				sideboard = sideboard.concat(this.lineToCard(deckArray[i]));
			}
			deck.sideBoard = sideboard;
		}

		return deck;
	},
	lineToCard(line: string) {
		//TODO: Only accepts arena format 'quantity name (set) setnumber'. Make it accept without '(set) setnumber'.
		const card: Card = {name: ''};

		card.quantity = Number.parseInt(line.split(' ')[0]);

		const nameStart = line.indexOf(' ') + 1;
		const nameEnd = line.lastIndexOf(' (');
		card.name = line.slice(nameStart, nameEnd);
		
		const setSplit = line.split(/[()]/);
		card.set = setSplit[setSplit.length - 2];
		
		const cnSplit = line.split(' ');
		card.collectorNumber = parseInt(cnSplit[cnSplit.length - 1]);
		
		return card;
	}
}