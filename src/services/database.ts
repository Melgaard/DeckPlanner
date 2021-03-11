module.exports = {
	initDB() {
		if (!localStorage.deckplanner) {

			const startingDecks = [
				{name: 'Immersturm Sacrifice', frontCard: "Immersturm Predator", decklist: `Deck
				4 Blightstep Pathway (KHM) 252
				3 Bonecrusher Giant (ELD) 115
				2 Castle Locthwain (ELD) 241
				4 Claim the Firstborn (ELD) 118
				4 Fabled Passage (ELD) 244
				3 Immersturm Predator (KHM) 214
				3 Kroxa, Titan of Death's Hunger (THB) 221
				4 Mountain (THB) 253
				7 Swamp (THB) 252
				1 Temple of Malice (THB) 247
				2 The Akroan War (THB) 124
				3 Valki, God of Lies (KHM) 114
				3 Village Rites (KHM) 117
				4 Woe Strider (THB) 123
				2 Skyclave Shade (ZNR) 125
				4 Egon, God of Death (KHM) 92
				2 Rankle, Master of Pranks (ELD) 101
				1 Pharika's Libation (THB) 111
				1 Bloodchief's Thirst (ZNR) 94
				3 Shatterskull Smashing (ZNR) 161
				
				Sideboard
				3 Duress (M21) 96
				2 Elspeth's Nightmare (THB) 91
				1 Shredded Sails (IKO) 136
				2 Skyclave Shade (ZNR) 125
				2 The Akroan War (THB) 124
				1 Heartless Act (IKO) 91
				2 Agonizing Remorse (THB) 83
				1 Redcap Melee (ELD) 135
				1 Inscription of Ruin (ZNR) 108
				`}, 
				{name: 'Praise Muxus', frontCard: "Muxus, Goblin Grandee", decklist: `Deck
				4 Skirk Prospector (DAR) 144
				15 Mountain (THB) 253
				4 Conspicuous Snoop (M21) 139
				4 Wily Goblin (XLN) 174
				2 Irencrag Feat (ELD) 127
				4 Shatterskull Smashing (ZNR) 161
				4 Goblin Matron (MH1) 129
				4 Goblin Chieftain (JMP) 324
				3 Goblin Warchief (DAR) 130
				4 Krenko, Mob Boss (JMP) 339
				4 Muxus, Goblin Grandee (JMP) 24
				2 Phyrexian Tower (JMP) 493
				3 Castle Embereth (ELD) 239
				2 Herald's Horn (JMP) 469
				1 Goblin Trashmaster (ANB) 72
				
				Sideboard
				2 Herald's Horn (JMP) 469
				4 Abrade (AKR) 136
				2 Gempalm Incinerator (LGN) 94
				1 Chandra, Torch of Defiance (KLR) 117
				3 Goblin Ringleader (M20) 143
				1 Goblin Trashmaster (ANB) 72
				1 Goblin Chainwhirler (DAR) 129
				1 Goblin Cratermaker (GRN) 103
				`},
				{name: 'Lurrus Rogues', frontCard: "Soaring Thought-Thief", decklist: `Companion
				1 Lurrus of the Dream-Den (IKO) 226
				
				Deck
				2 Agadeem's Awakening (ZNR) 90
				2 Dead Weight (IKO) 83
				4 Clearwater Pathway (ZNR) 260
				1 Didn't Say Please (ELD) 42
				4 Drown in the Loch (ELD) 188
				2 Mystical Dispute (ELD) 58
				4 Fabled Passage (ELD) 244
				3 Heartless Act (IKO) 91
				4 Into the Story (ELD) 50
				4 Swamp (THB) 252
				1 Eliminate (M21) 97
				3 Merfolk Windrobber (ZNR) 70
				2 Of One Mind (IKO) 60
				4 Ruin Crab (ZNR) 75
				4 Soaring Thought-Thief (ZNR) 236
				4 Temple of Deceit (THB) 245
				4 Thieves' Guild Enforcer (M21) 125
				2 Zagoth Triome (IKO) 259
				5 Island (THB) 251
				1 Negate (M20) 69
				
				Sideboard
				2 Lullmage's Domination (ZNR) 66
				3 Crippling Fear (KHM) 82
				1 Lurrus of the Dream-Den (IKO) 226
				1 Mystical Dispute (ELD) 58
				3 Negate (M20) 69
				3 Skyclave Shade (ZNR) 125
				2 Cling to Dust (THB) 87
				`}
			];

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