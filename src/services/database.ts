module.exports = {
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
			// const startingDecks = [
			// 	{name: 'Immersturm Sacrifice', frontCard: "Immersturm Predator", decklist: `Deck
			// 	4 Blightstep Pathway (KHM) 252
			// 	3 Bonecrusher Giant (ELD) 115
			// 	2 Castle Locthwain (ELD) 241
			// 	4 Claim the Firstborn (ELD) 118
			// 	4 Fabled Passage (ELD) 244
			// 	3 Immersturm Predator (KHM) 214
			// 	3 Kroxa, Titan of Death's Hunger (THB) 221
			// 	4 Mountain (THB) 253
			// 	7 Swamp (THB) 252
			// 	1 Temple of Malice (THB) 247
			// 	2 The Akroan War (THB) 124
			// 	3 Valki, God of Lies (KHM) 114
			// 	3 Village Rites (KHM) 117
			// 	4 Woe Strider (THB) 123
			// 	2 Skyclave Shade (ZNR) 125
			// 	4 Egon, God of Death (KHM) 92
			// 	2 Rankle, Master of Pranks (ELD) 101
			// 	1 Pharika's Libation (THB) 111
			// 	1 Bloodchief's Thirst (ZNR) 94
			// 	3 Shatterskull Smashing (ZNR) 161
				
			// 	Sideboard
			// 	3 Duress (M21) 96
			// 	2 Elspeth's Nightmare (THB) 91
			// 	1 Shredded Sails (IKO) 136
			// 	2 Skyclave Shade (ZNR) 125
			// 	2 The Akroan War (THB) 124
			// 	1 Heartless Act (IKO) 91
			// 	2 Agonizing Remorse (THB) 83
			// 	1 Redcap Melee (ELD) 135
			// 	1 Inscription of Ruin (ZNR) 108
			// 	`}, 
			// 	{name: 'Praise Muxus', frontCard: "Muxus, Goblin Grandee", decklist: `Deck
			// 	4 Skirk Prospector (DAR) 144
			// 	15 Mountain (THB) 253
			// 	4 Conspicuous Snoop (M21) 139
			// 	4 Wily Goblin (XLN) 174
			// 	2 Irencrag Feat (ELD) 127
			// 	4 Shatterskull Smashing (ZNR) 161
			// 	4 Goblin Matron (MH1) 129
			// 	4 Goblin Chieftain (JMP) 324
			// 	3 Goblin Warchief (DAR) 130
			// 	4 Krenko, Mob Boss (JMP) 339
			// 	4 Muxus, Goblin Grandee (JMP) 24
			// 	2 Phyrexian Tower (JMP) 493
			// 	3 Castle Embereth (ELD) 239
			// 	2 Herald's Horn (JMP) 469
			// 	1 Goblin Trashmaster (ANB) 72
				
			// 	Sideboard
			// 	2 Herald's Horn (JMP) 469
			// 	4 Abrade (AKR) 136
			// 	2 Gempalm Incinerator (LGN) 94
			// 	1 Chandra, Torch of Defiance (KLR) 117
			// 	3 Goblin Ringleader (M20) 143
			// 	1 Goblin Trashmaster (ANB) 72
			// 	1 Goblin Chainwhirler (DAR) 129
			// 	1 Goblin Cratermaker (GRN) 103
			// 	`},
			// 	{name: 'Lurrus Rogues', frontCard: "Soaring Thought-Thief", decklist: `Companion
			// 	1 Lurrus of the Dream-Den (IKO) 226
				
			// 	Deck
			// 	2 Agadeem's Awakening (ZNR) 90
			// 	2 Dead Weight (IKO) 83
			// 	4 Clearwater Pathway (ZNR) 260
			// 	1 Didn't Say Please (ELD) 42
			// 	4 Drown in the Loch (ELD) 188
			// 	2 Mystical Dispute (ELD) 58
			// 	4 Fabled Passage (ELD) 244
			// 	3 Heartless Act (IKO) 91
			// 	4 Into the Story (ELD) 50
			// 	4 Swamp (THB) 252
			// 	1 Eliminate (M21) 97
			// 	3 Merfolk Windrobber (ZNR) 70
			// 	2 Of One Mind (IKO) 60
			// 	4 Ruin Crab (ZNR) 75
			// 	4 Soaring Thought-Thief (ZNR) 236
			// 	4 Temple of Deceit (THB) 245
			// 	4 Thieves' Guild Enforcer (M21) 125
			// 	2 Zagoth Triome (IKO) 259
			// 	5 Island (THB) 251
			// 	1 Negate (M20) 69
				
			// 	Sideboard
			// 	2 Lullmage's Domination (ZNR) 66
			// 	3 Crippling Fear (KHM) 82
			// 	1 Lurrus of the Dream-Den (IKO) 226
			// 	1 Mystical Dispute (ELD) 58
			// 	3 Negate (M20) 69
			// 	3 Skyclave Shade (ZNR) 125
			// 	2 Cling to Dust (THB) 87
			// 	`}
			// ];

			localStorage.deckplanner = JSON.stringify(startingDecks);
		}
	},
	loadDB() {
		return JSON.parse(localStorage.deckplanner);
	},
	saveDB(decks) {
		localStorage.deckplanner = JSON.stringify(decks);
	},
}