export type DeckList = {
	mainDeck: Array<Card>,
	sideBoard?: Array<Card>,
	companion?: Card,
}
export type Card = {
	name: String,
	quantity?: Number,
	set?: String,
	collectorNumber?: Number,
}