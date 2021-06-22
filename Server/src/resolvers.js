
module.exports = {
	Query: {
		decklistByID: async (_, { id }, { dataSources }) => {
			return await dataSources.decklistAPI.getByID({ id });
		},
		decklistsByUser: async (_, { id }, { dataSources }) => {
			return await dataSources.decklistAPI.getAllDecklistsByUser({ id });
		},
		me: (_, __, { dataSources }) => 
			dataSources.userAPI.getUser()
	},
	Mutation: {
		createDecklist: async (_, { name, format, mainDeck, sideBoard, companion, frontCard }, { dataSources }) => {
			
			const decklists = await dataSources.decklistAPI.create(name, format, mainDeck, sideBoard, companion, frontCard);

			return {
				success: true,
				message: 'Decklist created',
				decklists,
			};
		},
		updateDecklist: async (_, { id, name, mainDeck, sideBoard, companion, frontCard }, { dataSources }) => {
			
			// await dataSources.entryAPI.update(date, id);
			// const entries = await dataSources.entryAPI.getAllByUser({id});

			return {
				success: true,
				message: 'Decklist created',
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