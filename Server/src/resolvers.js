
module.exports = {
	Query: {
		decklistByID: async (_, { id }, { dataSources }) => {
			return await dataSources.entryAPI.getByID({ id });
		},
		me: (_, __, { dataSources }) => 
			dataSources.userAPI.getUser()
	},
	Mutation: {
		createDecklist: async (_, { name, mainDeck, sideBoard, companion, frontCard }, { dataSources }) => {
			
			// await dataSources.entryAPI.create(date, name, weight);
			// const entries = await dataSources.entryAPI.getAllByUser({name});
			console.log('Running create on: ', name);

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