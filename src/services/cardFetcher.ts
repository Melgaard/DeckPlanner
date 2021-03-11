const axios = require('axios');

async function getCard(input) {
	if (typeof input == "number")
		return await getCardFromArenaId(input);
	else if (typeof input == "string")
		return await getCardFromName(input);
}

async function getCardFromArenaId(arenaId) {
	var res;
	await axios.get(`https://api.scryfall.com` + `/cards/arena/${arenaId}`)
		.then(response => {
			res = response.data;
		});
	return res;
}

async function getCardFromName(name) {
	var res;
	await axios.get(`https://api.scryfall.com` + `/cards/named?exact=${name}`)
		.then(response => {
			res = response.data;
		});
	return res;
}

async function getCardImageUrl(arenaId) {
	const card = await getCard(arenaId);
	const img = card.image_uris.art_crop
	return img;
}


module.exports = {
	getCard: getCard,
	getCardImageUrl: getCardImageUrl
}