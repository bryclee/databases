var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//npm  mySQL module


var dbConnection = mysql.createConnection({
	//host: 'http://127.0.0.1:3000',
	user: "root",
	password: "",
	database: "chat"
});

dbConnection.connect();

module.exports.database = dbConnection;


