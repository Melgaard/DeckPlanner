
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
	
	var stmt = db.prepare(`INSERT INTO decklists (name, format, mainDeck, frontCard )
			VALUES (?, ?, ?, ?)
		`);
	
	stmt.run("Azorious", "Historic", [], JSON.stringify({name: "Teferi, Hero of Dominaria"}));
	stmt.run("Rakdos", "Standard", [], JSON.stringify({name: "Immersturm Predator"}));
	stmt.run("Izzet", "Standard", [], JSON.stringify({name: "Galazeth Prismari"}));
	stmt.finalize();
	
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
	addDecklist(name, format, mainDeck, sideBoard, companion, frontCard) { 
		return new Promise(function(resolve, reject) {
			var stmt = db.prepare(`INSERT INTO decklists (name, format, mainDeck, sideBoard, companion, frontCard)
				VALUES (?, ?, ?)
			`);
			stmt.run(name, format, mainDeck, sideBoard, companion, frontCard);
			stmt.finalize();
			resolve();
		})
	}
};