var connection = require("mysql").createConnection({
	host : "localhost",
	user : "",// YOUR USER OF DB
	password : ""// YOUR PASSWORD DB
});

connection.connect();

connection.query("USE db_prueba;")

module.exports = connection;


/**
*  Structure DB
*
CREATE DATABASE db_prueba;
USE db_prueba;
CREATE TABLE user(
user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(30)
);
*/

