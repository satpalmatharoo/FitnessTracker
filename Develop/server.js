//ccreate connections
//express server running 
//routes to be set up (folder maybe) (routes folder)

//templates online//class exc

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.staatic("public"));

mongoose.connect(proess.env.MONGODB_URI || 'mongodb:localhost/workout', {
    useNewUrlParser:true,
});

//routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});