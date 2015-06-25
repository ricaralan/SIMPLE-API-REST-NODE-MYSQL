var connection = require("mysql").createConnection({
	host : "localhost",
	user : "root",
	password : "RAOR940203"
});

connection.connect();

connection.query("USE db_prueba;")

module.exports = connection;

