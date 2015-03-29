//MODELS
var db = require('../db');

//Gives SQL commands to database
//callbacks to controller


module.exports = {
  messages: {
    get: function (req, res, callback) { // a function which produces all the messages
    	//SQL command
    	//callback to controller

    	db.database.query('SELECT * FROM Messages \
    					   left outer join UserIDs on (Messages.userID = UserIDs.userID) \
    					   order by Messages.messageID', callback);
   	}, 	

    post: function (data, res, callback) {// a function which can be used to insert a message into the database
    	//Data should look like this: 
    	//posts = {messageID: stuff, message: stuff, time: stuff, userID: number, roomID: stuff}
    	//Name of table is Messages
    	//console.log(data);
		var post = {username: data.username, message: data.message, roomname: data.roomname};
		//Needed to put post.roomname into an array
		db.database.query('INSERT INTO Rooms (roomname) values (?)', [post.roomname], function(err, roomData) {
			if (err) throw err;
			//console.log('room data insert: ', roomData)
			//roomID is pulled by running the INSERT on the table and the insertId also happens to track its roomID
			var params = [post.message, post.username, roomData.insertId];
			//console.log(params);
			// Nested select in second parameter to get the UserID from username
			//It's using the params[1] (post.username) as its ? value
			db.database.query('INSERT INTO Messages (message, userID, roomID) values \
							   (?, (select min(userID) from UserIDs where username = ?), ?)', params, callback);
		});
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