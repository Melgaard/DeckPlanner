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

//Custom typeguards
export function isDecklist(obj: Decklist): obj is Decklist {
	const isDecklist =
		(obj as Decklist)?.name !== undefined &&
		(obj as Decklist)?.format !== undefined &&
		(obj as Decklist)?.mainDeck !== undefined;

	return isDecklist;
}

export function isCard(obj: Card): obj is Card {
	const isCard = (obj as Card)?.name !== undefined;
	return isCard;
}