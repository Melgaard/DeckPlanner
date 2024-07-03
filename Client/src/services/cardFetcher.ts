
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

		//TODO: Fix adventure cards

		const externalCard: any = await this.getCard(card.name); //TODO: Fix any

		//TODO: Allow getting of backside image
		let img: string = ''
		if (externalCard.card_faces != null) {
			img = externalCard.card_faces[0].image_uris.art_crop
		} else {
			img = externalCard?.image_uris.art_crop
		}
		
		return img;
	},
}