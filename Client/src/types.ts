export type Decklist = {
	name: string
	mainDeck: Array<Card> | null,
	sideBoard?: Array<Card> | null,
	companion?: Card | null,
	frontCard?: Card | null, //TODO: Should this be Card

}
export type Card = {
	name: string,
	quantity?: Number,
	set?: string,
	collectorNumber?: Number,
}