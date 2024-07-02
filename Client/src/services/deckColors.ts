import { Decklist, Card} from '../types';
import cardFetcher from './cardFetcher';
export default {
	async getColorsFromDeck(deck: Decklist): Promise<Colors[]> {
		let colorsInDeck: Array<Colors> = [];

		for (const card of deck.mainDeck ?? []) {
			//TODO: Refactor to not make multiple apicalls, but batch cards. Or save entire card data once loaded once.
			let cardData: any = await cardFetcher.getCard(card.name);
			let colorsObject: colorsObject = {
				name: cardData.name,
				color_identity: cardData.color_identity,
				colors: cardData.colors,
				mana_cost: cardData.mana_cost
			}

			if (colorsObject.color_identity == undefined) console.log(cardData.name, cardData)

			let colors = this.getColorsFromCard(colorsObject);

			
			colorsInDeck = [...new Set(colorsInDeck.concat(colors))]
		}
		
		return colorsInDeck ? colorsInDeck : [Colors.C];
	},

	getColorsFromCard(colors: colorsObject): Colors[] {
		//TODO: Multiface cards have a card_faces property that nest individual colors
		//TODO: Handle lands so they dont break code
		//TODO: Filter dual costs to only display already present colors

		let retVal: Colors[] = []

		retVal = colors.color_identity?.map(key => Colors[key])

		return retVal;
	}

	
}

type colorsObject = {
	name: string
	card_faces?: Array<CardFace>
	color_identity: Array<keyof typeof Colors>
	colors: Array<keyof typeof Colors>
	mana_cost: string
}

type CardFace = {
	name: string
	colors: Array<keyof typeof Colors>
	mana_cost: string
}

//TODO: Should Colors be moved to type file
export enum Colors {

	// 0 color
	C = "Colorless",

	// 1 color
	W = "White",
	U = "Blue",
	B = "Black",
	R = "Red",
	G = "Green",

	// 2 color
	WU = "Azorious",
	WB = "Orzhov",		//Silverquill
	WR = "Boros",		//Lorehold
	WG = "Selesnya",
	UB = "Dimir",
	UR = "Izzet",		//Prismari
	UG = "Simic",		//Quandrix
	BR = "Rakdos",
	BG = "Golgari",		//Witherbloom
	RG = "Gruul",
	
	// 3 color
	WUG = "Bant",
	WUB = "Esper",
	WUR = "Jeskai",		//Raugrin
	WBG = "Abzan",		//Indatha
	WBR = "Mardu",		//Savai
	WRG = "Naya",
	UBR = "Grixis",
	UBG = "Sultai",		//Zagoth
	URG = "Temur",		//Ketria
	BRG = "Jund",

	// 4 color
	WUBR = "Yore",		//Artifice
	WUBG = "Witch",		//Growth
	WURG = "Ink",		//Altruism
	WBRG = "Dune",		//Aggression
	UBRG = "Glint",		//Chaos

	// 5 color
	WUBRG = "WUBRG"

}