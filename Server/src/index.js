require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const DecklistAPI = require('./datasources/decklist');
const UserAPI = require('./datasources/user');

const db = require('./database/db.ts');


// const addEntryToDB = async () => { 
// 	await db.addEntry("24-11-2020", "Marcus Jensen", 82); 
// }
// addEntryToDB()

const PrintInitializedDB = async () => { 
	const decklists = await db.getAllDecklists(); 
	console.log("Initalized db has these decklists: ", decklists);
}
PrintInitializedDB()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		decklistAPI: new DecklistAPI(),
		userAPI: new UserAPI()
	})
});

server.listen().then(( { url }) => {
	console.log(`
		Server ready at ${url}
	`);
});
