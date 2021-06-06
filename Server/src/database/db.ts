
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
		frontCard TEXT
	)`
	db.run(sql);
	
	var stmt = db.prepare(`INSERT INTO decklists (name, format, mainDeck )
			VALUES (?, ?, ?)
		`);
	
	stmt.run("Azorious", "Historic", []);
	stmt.run("Rakdos", "Standard", []);
	stmt.run("Izzet", "Standard", []);
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
			db.all(`SELECT * FROM decklists WHERE id = ${id}`, [], function(err, rows) {
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