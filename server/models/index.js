//MODELS
var db = require('../db');

//Gives SQL commands to database
//callbacks to controller


module.exports = {
  messages: {
    get: function (req, res, callback) { // a function which produces all the messages
    	//SQL command
    	//callback to controller
    	var data = "Hello from messages";
    	callback(null, data);
   	}, 	

    post: function (req, res, callback) {// a function which can be used to insert a message into the database
    	//Data should look like this: 
    	//posts = {messageID: stuff, message: stuff, time: stuff, userID: number, roomID: stuff}
    	//Name of table is Messages
		var post = {id:1, title: "Hello my SQL from messages"};
    	callback(null, post);


    } 
  },

  users: {
    // Ditto as above.
    get: function (data, res, callback) {
    	//Query first
    	var post = {username: data.username};
    	db.database.query('SELECT * FROM UserIDs WHERE ?', post, callback);
    },


    post: function (data, res, callback) { //accepts data = req.body

    	var post = {userID: data.userID, username: data.username};
    	db.database.query('INSERT INTO UserIDs SET ?', post, callback);
    	

    	////var post = {username: testUserDude, userID: 0};
    	//table name is UserIDs

    }
  }
};

//sample how to access SQL db, maybe we think
//db.dbConnection.query('SQL GOES HERE', function(err, rows){})
//var post = {id:1, title: "Hello my SQL"};
//var query = connection.query('INSERT INTO posts SET ?', post, function(err, result){};
//? acts as variable that post (second argument) goes into