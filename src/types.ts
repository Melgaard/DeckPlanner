export type DeckList = {
	name: String
	mainDeck: Array<Card> | null,
	sideBoard?: Array<Card> | null,
	companion?: Card | null,
	frontCard?: String | null, //TODO: Should this be Card

}
export type Card = {
	name: String,
	quantity?: Number,
	set?: String,
	collectorNumber?: Number,
}