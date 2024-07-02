
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("database.db");


db.serialize(function() {

	db.run("DROP TABLE IF EXISTS decklists");

	const sql = `CREATE TABLE IF NOT EXISTS decklists(
		id INTEGER PRIMARY KEY,
		name TEXT,
		format TEXT,

		mainDeck BLOB,
		sideBoard BLOB,
		commander BLOB,
		companion BLOB,
		frontCard BLOB
	)`
	db.run(sql);
	addDefaultDecks();
	
});

module.exports = {
	
	//Get all decklists probably not needed as theres no need for other user decklist functionality right now
	//Potential for sharing/lookup of other user decklist, but probably not through a getAll
	async getAllDecklists() {
		return new Promise(function(resolve, reject) {
			db.all("SELECT * FROM decklists", [], function(err, rows) {
				if (err) reject(err)
				console.log(rows)
				resolve(rows);
			})
		})
	},

	//Point of improvement: use id dynamically
	async getAllDecklistsByUser(id) {
		return new Promise(function(resolve, reject) {
			db.all(`SELECT * FROM decklists`, [], function(err, rows) { //TODO: use id to get specific user
				if (err) reject(err)
				console.log(rows);
				resolve(rows);
			})
		})
	},

	async getDecklist(id) {
		return new Promise(function(resolve, reject) {
			db.get(`SELECT * FROM decklists WHERE id = ${id}`, [], function(err, rows) {
				if (err) reject(err)
				resolve(rows);
			})
		})
	},

	//Point of improvement: Should catch entering duplicate date (can suggest update instead)
	async addDecklist(name, format, mainDeck, sideBoard, commander, companion, frontCard) { 
		return new Promise(function(resolve, reject) {
			//TODO: Figure out if stmt as VALUES (?) or as ${?}
			const stmt = `
				INSERT INTO decklists (name, format, mainDeck, sideBoard, commander, companion, frontCard)
				VALUES (?, ?, ?, ?, ?, ?, ?)
			`

			db.run(stmt, [name, format, mainDeck, sideBoard, commander, companion, frontCard], function(err) {
				if (err) reject(err)
				resolve(this.lastID);
			});
		})
	}
};



function addDefaultDecks() {
	var stmt = db.prepare(`INSERT INTO decklists (name, format, mainDeck, sideBoard, commander, companion, frontCard )
			VALUES (?, ?, ?, ?, ?, ?, ?)
		`);
	
	stmt.run(
		'Jeskai Control',
		'HISTORIC',
		`[{"name":"Lightning Helix","quantity":4,"set":"STA","collectorNumber":62},{"name":"Hallowed Fountain","quantity":4,"set":"RNA","collectorNumber":251},{"name":"Hengegate Pathway","quantity":2,"set":"KHM","collectorNumber":260},{"name":"Teferi, Hero of Dominaria","quantity":4,"set":"DAR","collectorNumber":207},{"name":"Steam Vents","quantity":4,"set":"GRN","collectorNumber":257},{"name":"Narset, Parter of Veils","quantity":3,"set":"WAR","collectorNumber":61},{"name":"Search for Azcanta","quantity":1,"set":"XLN","collectorNumber":74},{"name":"Shark Typhoon","quantity":4,"set":"IKO","collectorNumber":67},{"name":"Brazen Borrower","quantity":1,"set":"ELD","collectorNumber":39},{"name":"Censor","quantity":4,"set":"AKR","collectorNumber":52},{"name":"Saw It Coming","quantity":3,"set":"KHM","collectorNumber":76},{"name":"Day of Judgment","quantity":1,"set":"STA","collectorNumber":2},{"name":"Wrath of God","quantity":2,"set":"AKR","collectorNumber":46},{"name":"Doomskar","quantity":1,"set":"KHM","collectorNumber":9},{"name":"Grafdigger's Cage","quantity":2,"set":"M20","collectorNumber":227},{"name":"Prismari Command","quantity":3,"set":"STX","collectorNumber":214},{"name":"Commit /// Memory","quantity":1,"set":"AKR","collectorNumber":54},{"name":"Glacial Fortress","quantity":4,"set":"XLN","collectorNumber":255},{"name":"Raugrin Triome","quantity":4,"set":"IKO","collectorNumber":251},{"name":"Castle Ardenvale","quantity":2,"set":"ELD","collectorNumber":238},{"name":"Sacred Foundry","quantity":2,"set":"GRN","collectorNumber":254},{"name":"Riverglide Pathway","quantity":2,"set":"ZNR","collectorNumber":264},{"name":"Island","quantity":1,"set":"THB","collectorNumber":251},{"name":"Dovin's Veto","quantity":1,"set":"WAR","collectorNumber":193}]`,
		`[{"name":"Rest in Peace","quantity":2,"set":"AKR","collectorNumber":33},{"name":"Baffling End","quantity":3,"set":"RIX","collectorNumber":1},{"name":"Narset, Parter of Veils","quantity":1,"set":"WAR","collectorNumber":61},{"name":"Mystical Dispute","quantity":1,"set":"ELD","collectorNumber":58},{"name":"Mystical Dispute","quantity":1,"set":"ELD","collectorNumber":58},{"name":"Wrath of God","quantity":2,"set":"AKR","collectorNumber":46},{"name":"Dovin's Veto","quantity":3,"set":"WAR","collectorNumber":193},{"name":"Brazen Borrower","quantity":2,"set":"ELD","collectorNumber":39}]`,
		null,
		null,
		'{"name":"Shark Typhoon","quantity":4,"set":"IKO","collectorNumber":67}'
	);

	stmt.run(
		'Curiosity',
		'HISTORIC',
		'[{"name":"Curious Obsession","quantity":4,"set":"JMP","collectorNumber":148},{"name":"Island","quantity":23,"set":"THB","collectorNumber":251},{"name":"Curiosity","quantity":3,"set":"JMP","collectorNumber":147},{"name":"Spectral Sailor","quantity":4,"set":"M20","collectorNumber":76},{"name":"Sea-Dasher Octopus","quantity":2,"set":"IKO","collectorNumber":66},{"name":"Essence Capture","quantity":2,"set":"RNA","collectorNumber":37},{"name":"Lofty Denial","quantity":4,"set":"M21","collectorNumber":56},{"name":"Negate","quantity":2,"set":"M20","collectorNumber":69},{"name":"Spell Pierce","quantity":4,"set":"XLN","collectorNumber":81},{"name":"Unsubstantiate","quantity":2,"set":"M21","collectorNumber":82},{"name":"Brazen Borrower","quantity":3,"set":"ELD","collectorNumber":39},{"name":"Siren Stormtamer","quantity":4,"set":"XLN","collectorNumber":79},{"name":"Pteramander","quantity":3,"set":"RNA","collectorNumber":47}]',
		'[{"name":"Essence Capture","quantity":2,"set":"RNA","collectorNumber":37},{"name":"Aether Gust","quantity":2,"set":"M20","collectorNumber":42},{"name":"Bubble Snare","quantity":3,"set":"ZNR","collectorNumber":47},{"name":"Tempest Djinn","quantity":3,"set":"DAR","collectorNumber":68},{"name":"Brazen Borrower","quantity":1,"set":"ELD","collectorNumber":39},{"name":"Negate","quantity":2,"set":"M20","collectorNumber":69},{"name":"Mystical Dispute","quantity":2,"set":"ELD","collectorNumber":58}]',
		null,
		null,
		'{"name":"Curious Obsession","quantity":4,"set":"JMP","collectorNumber":148}'
	);

	stmt.run(
		'Snow Dragons',
		'STANDARD',
		`[{"name":"Bonecrusher Giant","quantity":4,"set":"ELD","collectorNumber":115},{"name":"Brazen Borrower","quantity":4,"set":"ELD","collectorNumber":39},{"name":"Goldspan Dragon","quantity":4,"set":"KHM","collectorNumber":139},{"name":"Galazeth Prismari","quantity":3,"set":"STX","collectorNumber":189},{"name":"Faceless Haven","quantity":3,"set":"KHM","collectorNumber":255},{"name":"Fabled Passage","quantity":4,"set":"ELD","collectorNumber":244},{"name":"Alrund's Epiphany","quantity":3,"set":"KHM","collectorNumber":41},{"name":"Volatile Fjord","quantity":4,"set":"KHM","collectorNumber":273},{"name":"Snow-Covered Mountain","quantity":4,"set":"KHM","collectorNumber":282},{"name":"Mazemind Tome","quantity":3,"set":"M21","collectorNumber":232},{"name":"Saw It Coming","quantity":3,"set":"KHM","collectorNumber":76},{"name":"Riverglide Pathway","quantity":4,"set":"ZNR","collectorNumber":264},{"name":"Mystical Dispute","quantity":3,"set":"ELD","collectorNumber":58},{"name":"Frost Bite","quantity":3,"set":"KHM","collectorNumber":138},{"name":"Expressive Iteration","quantity":4,"set":"STX","collectorNumber":186},{"name":"Disdainful Stroke","quantity":1,"set":"KHM","collectorNumber":54},{"name":"Snow-Covered Island","quantity":6,"set":"KHM","collectorNumber":278}]`,
		'[{"name":"Scorching Dragonfire","quantity":1,"set":"M21","collectorNumber":158},{"name":"Shadowspear","quantity":1,"set":"THB","collectorNumber":236},{"name":"Redcap Melee","quantity":2,"set":"ELD","collectorNumber":135},{"name":"The Akroan War","quantity":1,"set":"THB","collectorNumber":124},{"name":"Disdainful Stroke","quantity":1,"set":"KHM","collectorNumber":54},{"name":"Frost Bite","quantity":1,"set":"KHM","collectorNumber":138},{"name":"The Akroan War","quantity":1,"set":"THB","collectorNumber":124},{"name":"Cinderclasm","quantity":1,"set":"ZNR","collectorNumber":136},{"name":"Shark Typhoon","quantity":2,"set":"IKO","collectorNumber":67},{"name":"Negate","quantity":1,"set":"STA","collectorNumber":18},{"name":"Ox of Agonas","quantity":2,"set":"THB","collectorNumber":147},{"name":"Soul-Guide Lantern","quantity":1,"set":"THB","collectorNumber":237}]',
		null,
		null,
		'{"name":"Galazeth Prismari","quantity":3,"set":"STX","collectorNumber":189}'
	);

	stmt.finalize();
}