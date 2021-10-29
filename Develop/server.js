//ccreate connections
//express server running 
//routes to be set up (folder maybe) (routes folder)

//templates online//class exc

const express = require("express");

const mongoose = require("mongoose");

mongoose.connect(proess.env.MONGODB_URI || 'mongodb:localhost/workout', {
    useNewUrlParser:true,
});
