// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8a05806ff7d5740b4776d36fb369b102&units=imperial';

//Define Global Variables
const button = document.getElementById('generate');
const zip = document.getElementById('zip');
const feeling = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

//New Date
let d = new Date();
let currentDate =  d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
function generateData(e) {
    e.preventDefault();
    const newZip = document.getElementById('zip').value;
    const newFeelings = document.getElementById('feelings').value;
   getWeatherData(baseURL, newZip, apiKey)
    .then(data => {
        addData("/postData", {Date: 'currentDate', "zip": newZip, "temp": data.main.temp, "content": newFeelings})
        .then(() => {
            updateUI();
        })
    })
    console.log(`the date is: ${currentDate}`);
    console.log(`your zipcode is: ${newZip}`);
    console.log(`you are feeling: ${newFeelings}`);
}
/* Function to GET Web API Data*/
 const getWeatherData = async(baseURL, newZip, apiKey) => {
     const res = await fetch(baseURL + newZip + apiKey)
         try{
             const data = await res.json();
             console.log(data)
             return data;
         } catch (error) {
             console.log("ERROR1", error);
         } 
    }


// /* Function to POST data to app */
const addData = async ( url='', data = {}) => {
    const res = await fetch( url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}


/* Function to GET Project Data */
const updateUI = async ()=> {
    const req = await fetch ('/all');
    try{
        const projectData = await req.json()
        document.getElementById('date').innerHTML=`Date - ${projectData.Temperature}`;
        document.getElementById('temp').innerHTML=`Temp - ${projectData.Temperature}`;
        document.getElementById('content').innerHTML=`Feeling - ${projectData.Feelings}`;
    } catch (error) {
        console.log("ERROR2", error);
    }
}