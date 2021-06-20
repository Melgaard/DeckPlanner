
import { Card } from '../types';

const axios = require('axios');
export default {
	async getCard(input: number | string) {
		if (typeof input == "number")
			return await this.getCardFromArenaId(input);
		else if (typeof input == "string")
			return await this.getCardFromName(input);
	},

	async getCardFromArenaId(arenaId: number) {
		var res;
		await axios.get(`https://api.scryfall.com` + `/cards/arena/${arenaId}`)
			.then((response: any) => { //TODO: Fix any
				res = response.data;
			});
		return res;
	},

	async getCardFromName(name: string) {
		var res;
		await axios.get(`https://api.scryfall.com` + `/cards/named?exact=${name}`)
			.then((response: any) => { //TODO: Fix any
				res = response.data;
			});
		return res;
	},

	async getCardImageUrl(card: Card) {

		// if (card.image_uris?.art_crop) return card.image_uris.art_crop;
		
		const externalCard: any = await this.getCard(card.name); //TODO: Fix any
		const img: string = externalCard?.image_uris.art_crop
		
		return img;
	},



	// getCard: getCard,
	// getCardImageUrl: getCardImageUrl
}