const dotenv = require('dotenv');
dotenv.config();


/*** Dependencies ****/
const bodyParser = require("body-parser");
var path = require('path')
const cors = require('cors') //cors for cross origin allowance
const express = require('express')
const fetch = require("node-fetch")
//const mockAPIResponse = require('./mockAPI.js');
const { url } = require('inspector');
const { application } = require('express');
// Start up an instance of app
const app = express();


/***Middleware***/
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/****API ACCESS****/
// Geonames API
const geonamesApi = process.env.GEONAMES_USERNAME
const geonamesBase = 'http://api.geonames.org/searchJSON?q=';

//Weatherbit API
const weatherbitApi = process.env.WEATHERBIT_API_KEY
const weatherbitBase = 'http://api.weatherbit.io/v2.0/'
const weatherbitCurrent = 'current?'
const weatherbitFuture = 'forecast/daily?'

//Pixabay API 
const pixabayApi = process.env.PIXABAY_KEY
const pixabayBase = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=`;


//Initialize main project folder
app.use(express.static('dist'));
console.log(__dirname)

//Port app will listen to
const port = 8080
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// Storing data in object
let projectData = {};


app.get('/all', sendData)

// Callback function to complete GET '/all'
function sendData (req, res){
    console.log(projectData);
    res.send(projectData);
};
  app.post("/postData", (req, res) => {
    //POST Geonames Route
    if (req.body.city) {
      let geoData = {
        City: req.body.city,
        Latitude: req.body.latitude,
        Longitude: req.body.longitude,
      };
      projectData.geoData = geoData;
      console.log("geoData ", geoData);
    } //POST Weatherbit Route
    else if (req.body.temperature) {
      let weatherbitData = {
        Temperature: req.body.temperature,
        Description: req.body.description,
      };
      projectData.weatherbitData = weatherbitData;
      console.log("weatherbitData ", weatherbitData);
    } //POST Pixabay Route
    else if (req.body.image) {
      let pixabayImage = {
        Image: req.body.image,
      };
      projectData.pixabayImage = pixabayImage;
      console.log("pixabayImage ", pixabayImage);
    }
    res.send(projectData);
  });


  //jest testing function
const portCheck = num => {
  return num === port;
};

//exporting function
module.export = portCheck;