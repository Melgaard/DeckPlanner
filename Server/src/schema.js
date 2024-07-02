const { gql } = require('apollo-server');
//TODO: format: Format! ||	format(format: Format): String!

const typeDefs = gql`

	type User {
		id: ID!
		email: String!
		name: String!
		decklists: [Decklist]!
	}
	
	type Decklist {
		id: ID!
		name: String!
		format(format: Format): String!


		mainDeck: [Card]
		sideBoard: [Card]
		commander: Card
		companion: Card
		frontCard: Card
	}

	type Card  {
		name: String!
		quantity: Int
		set: String
		collectorNumber: Int
	}

	input CardInput {
		name: String!
		quantity: Int
		set: String
		collectorNumber: Int
	}
	
	enum Format {
		STANDARD
		HISTORIC
		PIONEER
		MODERN
		VINTAGE
		LEGACY
	}

	type Query {
		decklistByID(id: ID!): Decklist!
		decklistsByUser(id: ID): [Decklist]!
		me: User
	}

	type Mutation {
		createDecklist(name: String!, format: Format, mainDeck: [CardInput], sideBoard: [CardInput], commander: CardInput, companion: CardInput, frontCard: CardInput): UpdateResponse!
		updateDecklist(id: ID!, name: String, format: Format, mainDeck: [CardInput], sideBoard: [CardInput], commander: CardInput, companion: CardInput, frontCard: CardInput): UpdateResponse!
		deleteDecklist(id: ID!): UpdateResponse!
	}

	type UpdateResponse {
		success: Boolean!
		message: String
		decklists: [Decklist]!
	}
`;

module.exports = typeDefs;