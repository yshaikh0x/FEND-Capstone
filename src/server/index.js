const dotenv = require('dotenv');
dotenv.config();


/*** Dependencies ****/
const bodyParser = require("body-parser");
var path = require('path')
const cors = require('cors') //cors for cross origin allowance
const express = require('express')
const fetch = require("node-fetch")
const mockAPIResponse = require('./mockAPI.js');
const { url } = require('inspector');
const { application } = require('express');
// Start up an instance of app
const app = express();


/***Middleware***/
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/****API ACCESS****/
const apiKey = process.env.API_KEY;

// Geonames API
const geonamesBase = 'http://api.geonames.org/searchJSON?q=';

//Weatherbit API
const weatherbitBase = 'https://api.weatherbit.io/v2.0/forecast/daily?';

//Pixabay API 
const pixabayBase = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=`;


//Initialize main project folder
app.use(express.static('dist'));
console.log(__dirname)

//Port app will listen to
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}


// Storing data in object
const projectData = {};


app.get('/all', sendData)
// Callback function to complete GET '/all'
function sendData (req, res){
    console.log(projectData);
    res.send(projectData);
};

// Post Route
app.post('/postData', addData);
function addData (req, res){
    newData = {
        City: req.body.Destination,
        Departure: req.body.Departure
    };
    projectData = newData;
   console.log(projectData);
   res.send(projectData);
}


//POST route
app.post('/postGeo', async (req, res) => {
    const {destinationCity, geonamesApi} = req.body;
    console.log(req.body);
    projectData = req.body;
    let geonamesURL = await fetch 
    (`http://api.geonames.org/searchJSON?q=${destinationCity}&maxRows=1&username=${geonamesApi}`);
        res.send({
         destinationCity,
            lng,
            lat
      });
    } catch (error) {
      console.log('Geo_Post_Error', error);
    };