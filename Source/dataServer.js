// dataServer.js
// This is a seperate server that's dedicated to accepting data from acquisuites
// in real time.

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var fs       = require('fs'); // TEMP - for saving acquisuite POST data\
var bodyParser   = require('body-parser');
var morgan       = require('morgan');

// Connect to and configure the database connection.
var configDB = require('./config/database.js');

// configuration ===============================================================

mongoose.connect(configDB.url, { useMongoClient: true }); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected");
});

// log every request to the console
app.use(morgan('dev'));

// Parse post bodies
app.use(bodyParser.urlencoded({
  extended: true;
}));

// Obtain DB schema
var User = require('./app/models/user-schema');
var Building = require('./app/models/building-schema');

// Routes ======================================================================

//=====================================
// Data Collection
//=====================================
// Collects POST data from acquisuites,
// converts it to JSON, and saves it to
// the database.
app.post('/acquisuite/upload/:id', function (req, res) {

  console.log(req);

  // TEMP - A file with post data will be created, and data will be dumped.
  fs.appendFile('./acquisuite-data/postData.txt',
  'New Acquisuite Data from '
  + req.params.id
  + ':\n'
  + req.body
  + '\n',
  function(err) {
    if (err) throw err;
  });

  res.status("200");
  res.send("Thanks!"); // Prevents the client from timing out.
});

// launch ======================================================================
app.listen(6121); // 6121 is open on most PCs
console.log("I think it's working!");
