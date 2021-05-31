import { DeckList } from '../types';
export default {
	initDB() {
		if (!localStorage.deckplanner) {

			const startingDecks = [
				{
					name: 'Azorious Control', 
					frontCard: "Teferi, Hero of Dominaria",
					mainDeck: [
						{name: "Absorb", quantity: 2, set: "RNA", collectorNumber: "151"},
						{name: "Baffling End", quantity: 4, set: "RIX", collectorNumber: "1"},
						{name: "Cast Out", quantity: 4, set: "AKR", collectorNumber: "9"},
						{name: "Castle Ardenvale", quantity: 3, set: "ELD", collectorNumber: "238"},
						{name: "Castle Vantress", quantity: 2, set: "ELD", collectorNumber: "242"},
						{name: "Censor", quantity: 4, set: "AKR", collectorNumber: "52"},
						{name: "Dovin's Veto", quantity: 1, set: "WAR", collectorNumber: "193"},
						{name: "Glacial Fortress", quantity: 4, set: "XLN", collectorNumber: "255"},
						{name: "Grafdigger's Cage", quantity: 1, set: "M20", collectorNumber: "227"},
						{name: "Hallowed Fountain", quantity: 4, set: "RNA", collectorNumber: "251"},
						{name: "Irrigated Farmland", quantity: 4, set: "AKR", collectorNumber: "304"},
						{name: "Narset, Parter of Veils", quantity: 2, set: "WAR", collectorNumber: "61"},
						{name: "Saw It Coming", quantity: 3, set: "KHM", collectorNumber: "76"},
						{name: "Search for Azcanta", quantity: 1, set: "XLN", collectorNumber: "74"},
						{name: "Shark Typhoon", quantity: 4, set: "IKO", collectorNumber: "67"},
						{name: "Teferi, Hero of Dominaria", quantity: 4, set: "DAR", collectorNumber: "207"},
						{name: "Wrath of God", quantity: 4, set: "AKR", collectorNumber: "46"},
						{name: "Plains", quantity: 3, set: "THB", collectorNumber: "250"},
						{name: "Island", quantity: 4, set: "THB", collectorNumber: "251"},
						{name: "Field of Ruin", quantity: 2, set: "XLN", collectorNumber: "254"}
					],
					sideBoard: [
						{name: "Authority of the Consuls", quantity: 2, set: "KLR", collectorNumber: "9"},
						{name: "Saw It Coming", quantity: 1, set: "KHM", collectorNumber: "76"},
						{name: "Doomskar", quantity: 2, set: "KHM", collectorNumber: "9"},
						{name: "Dovin's Veto", quantity: 3, set: "WAR", collectorNumber: "193"},
						{name: "Grafdigger's Cage", quantity: 1, set: "M20", collectorNumber: "227"},
						{name: "Narset, Parter of Veils", quantity: 2, set: "WAR", collectorNumber: "61"},
						{name: "Rest in Peace", quantity: 2, set: "AKR", collectorNumber: "33"},
						{name: "Tale's End", quantity: 2, set: "M20", collectorNumber: "77"}
					]
				},
				{
					name: 'Rakdos Arcanist', 
					frontCard: "Thoughtseize",
					companion: {name: "Lurrus of the Dream-Den", quantity: 1, set: "IKO", collectorNumber: "226"},
					mainDeck: [
						{name: "Thoughtseize", quantity: 4, set: "AKR", collectorNumber: "127"},
						{name: "Bloodchief's Thirst", quantity: 2, set: "ZNR", collectorNumber: "94"},
						{name: "Young Pyromancer", quantity: 3, set: "JMP", collectorNumber: "372"},
						{name: "Dreadhorde Arcanist", quantity: 4, set: "WAR", collectorNumber: "125"},
						{name: "Kroxa, Titan of Death's Hunger", quantity: 3, set: "THB", collectorNumber: "221"},
						{name: "Fatal Push", quantity: 1, set: "KLR", collectorNumber: "84"},
						{name: "Stitcher's Supplier", quantity: 4, set: "M19", collectorNumber: "121"},
						{name: "Claim the Firstborn", quantity: 2, set: "ELD", collectorNumber: "118"},
						{name: "Claim /// Fame", quantity: 4, set: "AKR", collectorNumber: "229"},
						{name: "Spark Harvest", quantity: 2, set: "WAR", collectorNumber: "105"},
						{name: "Bedevil", quantity: 1, set: "RNA", collectorNumber: "157"},
						{name: "Village Rites", quantity: 4, set: "M21", collectorNumber: "126"},
						{name: "Castle Locthwain", quantity: 1, set: "ELD", collectorNumber: "241"},
						{name: "Blood Crypt", quantity: 4, set: "RNA", collectorNumber: "245"},
						{name: "Dragonskull Summit", quantity: 4, set: "XLN", collectorNumber: "252"},
						{name: "Swamp", quantity: 4, set: "THB", collectorNumber: "252"},
						{name: "Mountain", quantity: 2, set: "THB", collectorNumber: "253"},
						{name: "Fabled Passage", quantity: 2, set: "ELD", collectorNumber: "244"},
						{name: "Agadeem's Awakening", quantity: 2, set: "ZNR", collectorNumber: "90"},
						{name: "Spikefield Hazard", quantity: 1, set: "ZNR", collectorNumber: "166"},
						{name: "Valki, God of Lies", quantity: 2, set: "KHM", collectorNumber: "114"},
						{name: "Blightstep Pathway", quantity: 4, set: "KHM", collectorNumber: "252"}
					],
					sideBoard: [
						{name: "Lurrus of the Dream-Den", quantity: 1, set: "IKO", collectorNumber: "226"},
						{name: "Abrade", quantity: 3, set: "AKR", collectorNumber: "136"},
						{name: "Noxious Grasp", quantity: 1, set: "M20", collectorNumber: "110"},
						{name: "Soul-Guide Lantern", quantity: 3, set: "THB", collectorNumber: "237"},
						{name: "Valki, God of Lies", quantity: 1, set: "KHM", collectorNumber: "114"},
						{name: "Fatal Push", quantity: 1, set: "KLR", collectorNumber: "84"},
						{name: "Duress", quantity: 2, set: "M21", collectorNumber: "96"},
						{name: "Bedevil", quantity: 1, set: "RNA", collectorNumber: "157"},
						{name: "Angrath's Rampage", quantity: 1, set: "WAR", collectorNumber: "185"},
						{name: "Feed the Swarm", quantity: 1, set: "ZNR", collectorNumber: "102"}
					]
				},
				{
					name: 'Praise Muxus', 
					frontCard: "Muxus, Goblin Grandee", 
					mainDeck: [
						{name: "Skirk Prospector", quantity: 4, set: "DAR", collectorNumber: "144"},
						{name: "Mountain", quantity: 15, set: "THB", collectorNumber: "253"},
						{name: "Conspicuous Snoop", quantity: 4, set: "M21", collectorNumber: "139"},
						{name: "Wily Goblin", quantity: 4, set: "XLN", collectorNumber: "174"},
						{name: "Irencrag Feat", quantity: 2, set: "ELD", collectorNumber: "127"},
						{name: "Shatterskull Smashing", quantity: 4, set: "ZNR", collectorNumber: "161"},
						{name: "Goblin Matron", quantity: 4, set: "MH1", collectorNumber: "129"},
						{name: "Goblin Chieftain", quantity: 4, set: "JMP", collectorNumber: "324"},
						{name: "Goblin Warchief", quantity: 3, set: "DAR", collectorNumber: "130"},
						{name: "Krenko, Mob Boss", quantity: 4, set: "JMP", collectorNumber: "339"},
						{name: "Muxus, Goblin Grandee", quantity: 4, set: "JMP", collectorNumber: "24"},
						{name: "Phyrexian Tower", quantity: 2, set: "JMP", collectorNumber: "493"},
						{name: "Castle Embereth", quantity: 3, set: "ELD", collectorNumber: "239"},
						{name: "Herald's Horn", quantity: 2, set: "JMP", collectorNumber: "469"},
						{name: "Goblin Trashmaster", quantity: 1, set: "ANB", collectorNumber: "72"}
					],
					sideBoard: [
						{name: "Herald's Horn", quantity: 2, set: "JMP", collectorNumber: "469"},
						{name: "Abrade", quantity: 4, set: "AKR", collectorNumber: "136"},
						{name: "Gempalm Incinerator", quantity: 2, set: "LGN", collectorNumber: "94"},
						{name: "Chandra, Torch of Defiance", quantity: 1, set: "KLR", collectorNumber: "117"},
						{name: "Goblin Ringleader", quantity: 3, set: "M20", collectorNumber: "143"},
						{name: "Goblin Trashmaster", quantity: 1, set: "ANB", collectorNumber: "72"},
						{name: "Goblin Chainwhirler", quantity: 1, set: "DAR", collectorNumber: "129"},
						{name: "Goblin Cratermaker", quantity: 1, set: "GRN", collectorNumber: "103"}
					]
				}
			];

			localStorage.deckplanner = JSON.stringify(startingDecks);
		}
	},
	loadDB() {
		return JSON.parse(localStorage.deckplanner);
	},
	saveDB(decks: Array<DeckList>) {
		localStorage.deckplanner = JSON.stringify(decks);
	},
	deleteDeck(deckToDelete: DeckList) {
		let currentDecks = this.loadDB();
		let decks = currentDecks.filter((deck: DeckList) =>  deck.name != deckToDelete.name);
		this.saveDB(decks);
	}
}