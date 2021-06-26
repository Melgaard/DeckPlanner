export type Decklist = {
	name: string
	format: Format
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

export enum Format {
	STANDARD = "STANDARD",
	HISTORIC = "HISTORIC",
	PIONEER = "PIONEER",
	MODERN = "MODERN",
	VINTAGE = "VINTAGE",
	LEGACY = "LEGACY"
}