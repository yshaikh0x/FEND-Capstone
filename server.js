// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
//Cors is a package that lets the browser and server talk without security interuptions 
const cors = require("cors");
const { response } = require("express");
app.use(cors());
// Initialize the main project folder
//coining the app to the folder we want them to look at. allows server side code
app.use(express.static('website'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
} 
//const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

// Initialize all route with a callback function
app.get('/all', sendData)
// Callback function to complete GET '/all'
function sendData (req, res){
    console.log(projectData);
    res.send(projectData);
};
// Post Route
app.post('/postData', addData);
function addData (req, res){
        newEntry = {
            Date: req.body.date,
            ZipCode: req.body.zip,
            Temperature: req.body.temp,
            Feeling: req.body.content
        };
        projectData = newEntry;
       console.log(projectData);
    }
