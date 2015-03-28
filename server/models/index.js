var db = require('../db');

//Gives SQL commands to database
//callbacks to controller


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//sample how to access SQL db, maybe we think
//db.dbConnection.query('SQL GOES HERE', function(err, rows){})
//var post = {id:1, title: "Hello my SQL"};
//var query = connection.query('INSERT INTO posts SET ?', post, function(err, result){};
//? acts as variable that post (second argument) goes into