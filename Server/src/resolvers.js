
module.exports = {
	Query: {
		decklistByID: async (_, { id }, { dataSources }) => {
			console.log('0')
			return await dataSources.decklistAPI.getByID({ id });
		},
		decklistsByUser: async (_, { id }, { dataSources }) => {
			console.log('1')

			let decklists = await dataSources.decklistAPI.getAllDecklistsByUser({ id });

			//TODO: Sorted alphabetically. Make card type sort and mana value sort
			//TODO: Sort Sideboard too
			//TODO: Figure out where the user should choose sort type.
			for (const deck of decklists) {
				deck.mainDeck = deck.mainDeck.sort((card, card2) => {
					if (card.name > card2.name) return 1
					return -1
				})
			}

			

			return decklists
		},
		me: (_, __, { dataSources }) => 
			dataSources.userAPI.getUser()
	},
	Mutation: {
		createDecklist: async (_, { name, format, mainDeck, sideBoard, commander, companion, frontCard }, { dataSources }) => {
			
			const decklists = await dataSources.decklistAPI.create(name, format, mainDeck, sideBoard, commander, companion, frontCard);

			return {
				success: true,
				message: 'Decklist created',
				decklists,
			};
		},
		updateDecklist: async (_, { id, name, format, mainDeck, sideBoard, commander, companion, frontCard }, { dataSources }) => {
			
			dataSources.decklistAPI.updateDecklist(id, name, format, mainDeck, sideBoard, commander, companion, frontCard);
			const decklists = await dataSources.decklistAPI.getAllDecklistsByUser({id});

			return {
				success: true,
				message: 'Decklist updated',
				decklists,
			};
		},
		deleteDecklist: async (_, { id }, { dataSources }) => {
			
			// await dataSources.entryAPI.delete(date, id);
			// const entries = await dataSources.entryAPI.getAllByUser({id});

			return {
				success: true,
				message: 'Decklist deleted',
				decklists,
			};
		},
	},
}