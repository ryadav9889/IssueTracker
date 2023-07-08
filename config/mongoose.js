const mongoose = require('mongoose');

// connecting to mongodb
mongoose.connect('mongodb://0.0.0.0/IssueTracker');

const db = mongoose.connection;
// printing err on not connecting to db
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// printing connected message on getting connecting
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;