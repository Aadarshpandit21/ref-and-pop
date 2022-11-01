const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');
const http = require("http");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://AadarshPandit21:TzUH6bos1cHJeK4K@cluster0.qs2wbxg.mongodb.net/Aadarsh21-db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        const igit P = req.ip;
        const currentDate = moment().format('YYYY-MM-DD,HH-mm-ss')
        console.log ("inside GLOBAL MW");
        const url = req.originalUrl;
        console.log("the url is :"+" "+url);
        console.log("The Ip address is :"+" " + iP);
        console.log("the current date is :"+" "+ currentDate);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

//mongodb+srv://AadarshPandit21:TzUH6bos1cHJeK4K@cluster0.qs2wbxg.mongodb.net/Aadarsh21-db