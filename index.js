const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const db = require("./config/mongoose");
const { log } = require('console');





app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'assests')))
// console.log(path.join(__dirname,'assests'));


// use express router
app.use('/', require('./routes'));



// set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

// server creation
app.listen(8000,function(err){
    if(err){
        console.log("error in running server");
        // console.log(path);
    }
    else{
        console.log("Successfully Server is running");
        

    }
})