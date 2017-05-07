// Set up MySQL connection
var mysql = require("mysql");

var source = {
	// Localhost
	localhost: {
		port	: 3306,
		host	: "localhost",
		user    : "root",
    	password: "",
    	database: "burgers_db"
	},
	// jawsDB
	jawsDB: {
		port	:3306,
		host	:"y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user	:"lh21rnz2elvp9ck6",
		password:"lr1o4031gshda3ll",
		database:"nxsxv7au4vao2gjy"
	}
};

var connection = mysql.createConnection(source.jawsDB);
	// Make connection
	connection.connect(function(err) {
	    if (err) {
	        console.error("error connecting: " + err.stack);
	        return;
	    }
	    console.log("connected as id " + connection.threadId);
	});

// Export connection for ORM to use
module.exports = connection;