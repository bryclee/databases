//CONTROLLER CONTROLLER CONTROLLER CONTROLLER CONTROLLER
var models = require('../models');
var Promise = require('bluebird');

//gives models commands //no SQL here. tells model what to do


module.exports = {
  messages: {
    get: function (req, res) {// a function which handles a get request for all messages
    	var status = 200;
		models.messages.get(req, res, function(err, data){
			   	if (err){ throw(err);}
			   	else{res.status(status).send(data) }
					} )
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
    	var status = 200;

		models.messages.post(req.body, res, function(err, data){
			   	if (err){ throw(err);}
			   	else{res.status(status).send(data) }
					} )
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	//res.send("This is a test from USERS directory");
    	var status = 200;
		models.users.get(req.query, res, function(err, data){
			   	if (err){ throw(err);}
			   	else{
                    var userID = data[0].userID;
                    console.log(userID);
			   		//[ { userID: 2 } ]
			   		res.status(status).send(JSON.stringify(userID));
			   	}
			} )
		
    },
    post: function (req, res) {  //ie creating a user for the first time
    	//var post = {username: testUserDude, userID: 0};
    	//We want our post data to look like this
		console.log("Body: ", req.body);   
		models.users.get(req.body, res, function(err, data){

		});
    	var status = 200;
		models.users.post(req.body, res, function(err, data){
			   	if (err){ throw(err);}
			   	else{res.status(status).send(data) }
					} )

		////var post = {id:1, title: "Hello my SQL"};

    }
  }
};

