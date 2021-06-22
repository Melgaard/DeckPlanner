
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("database.db");


db.serialize(function() {

	db.run("DROP TABLE decklists");

	const sql = `CREATE TABLE IF NOT EXISTS decklists(
		id INTEGER PRIMARY KEY,
		name TEXT,
		format TEXT,

		mainDeck BLOB,
		sideBoard BLOB,
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
				resolve(rows);
			})
		})
	},

	//Point of improvement: use id dynamically
	async getAllDecklistsByUser(id) {
		return new Promise(function(resolve, reject) {
			db.all(`SELECT * FROM decklists`, [], function(err, rows) { //TODO: use id to get specific user
				if (err) reject(err)
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
	async addDecklist(name, format, mainDeck, sideBoard, companion, frontCard) { 
		return new Promise(function(resolve, reject) {
			//TODO: Figure out if stmt as VALUES (?) or as ${?}
			const stmt = `
				INSERT INTO decklists (name, format, mainDeck, sideBoard, companion, frontCard)
				VALUES (?, ?, ?, ?, ?, ?)
			`

			db.run(stmt, [name, format, mainDeck, sideBoard, companion, frontCard], function(err) {
				if (err) reject(err)
				resolve(this.lastID);
			});
		})
	}
};



function addDefaultDecks() {
	var stmt = db.prepare(`INSERT INTO decklists (name, format, mainDeck, frontCard, sideBoard, companion )
			VALUES (?, ?, ?, ?, ?, ?)
		`);
	
	stmt.run("Azorious", "Historic", JSON.stringify([
		{name: "Absorb", quantity: 2, set: "RNA", collectorNumber: "151"},
		{name: "Baffling End", quantity: 4, set: "RIX", collectorNumber: "1"},
		{name: "Cast Out", quantity: 4, set: "AKR", collectorNumber: "9"},
		{name: "Castle Ardenvale", quantity: 3, set: "ELD", collectorNumber: "238"},
		{name: "Castle Vantress", quantity: 2, set: "ELD", collectorNumber: "242"},
		{name: "Censor", quantity: 4, set: "AKR", collectorNumber: "52"},
		{name: "Dovin's Veto", quantity: 1, set: "WAR", collectorNumber: "193"},
		{name: "Glacial Fortress", quantity: 4, set: "XLN", collectorNumber: "255"},
		{name: "Grafdigger's Cage", quantity: 1, set: "M20", collectorNumber: "227"},
		{name: "Hallowed Fountain", quantity: 4, set: "RNA", collectorNumber: "251"},
		{name: "Irrigated Farmland", quantity: 4, set: "AKR", collectorNumber: "304"},
		{name: "Narset, Parter of Veils", quantity: 2, set: "WAR", collectorNumber: "61"},
		{name: "Saw It Coming", quantity: 3, set: "KHM", collectorNumber: "76"},
		{name: "Search for Azcanta", quantity: 1, set: "XLN", collectorNumber: "74"},
		{name: "Shark Typhoon", quantity: 4, set: "IKO", collectorNumber: "67"},
		{name: "Teferi, Hero of Dominaria", quantity: 4, set: "DAR", collectorNumber: "207"},
		{name: "Wrath of God", quantity: 4, set: "AKR", collectorNumber: "46"},
		{name: "Plains", quantity: 3, set: "THB", collectorNumber: "250"},
		{name: "Island", quantity: 4, set: "THB", collectorNumber: "251"},
		{name: "Field of Ruin", quantity: 2, set: "XLN", collectorNumber: "254"}
	]), 
	JSON.stringify({name: "Teferi, Hero of Dominaria"}), 
	JSON.stringify([
		{name: "Authority of the Consuls", quantity: 2, set: "KLR", collectorNumber: "9"},
		{name: "Saw It Coming", quantity: 1, set: "KHM", collectorNumber: "76"},
		{name: "Doomskar", quantity: 2, set: "KHM", collectorNumber: "9"},
		{name: "Dovin's Veto", quantity: 3, set: "WAR", collectorNumber: "193"},
		{name: "Grafdigger's Cage", quantity: 1, set: "M20", collectorNumber: "227"},
		{name: "Narset, Parter of Veils", quantity: 2, set: "WAR", collectorNumber: "61"},
		{name: "Rest in Peace", quantity: 2, set: "AKR", collectorNumber: "33"},
		{name: "Tale's End", quantity: 2, set: "M20", collectorNumber: "77"}]), null);
	stmt.run("Rakdos", "Standard", JSON.stringify([]), JSON.stringify({name: "Immersturm Predator"}), JSON.stringify([]), JSON.stringify({name: "Lurrus of the Dream-Den", quantity: 1, set: "IKO", collectorNumber: "226"}));
	stmt.run("Izzet", "Standard", JSON.stringify([]), JSON.stringify({name: "Galazeth Prismari"}), JSON.stringify([]), null);
	stmt.finalize();
}