// import express 
const express = require('express');
const app = express();
// path of current file
const path = require('path');
// port address
const port = 8000;
// importing mongoose
const db = require("./config/mongoose");
const { log } = require('console');




// middleware for parsing incoming requests 
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
<<<<<<< HEAD
        console.log("test2")
=======
        console.log("test1");
>>>>>>> 076d8cee73cff543ed8148f6ab332f65e64331e9
        // console.log(path);
    }
    else{
        console.log("Successfully Server is running");
        

    }
})