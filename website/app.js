// Personal API Key for OpenWeatherMap API
const baseURL = 'api.openweathermap.org/data/2.5';
const apiKey = '8a05806ff7d5740b4776d36fb369b102';
//Define Global Variables
const button = document.getElementById('generate');
const zip = document.getElementById('zip');
const feeling = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
//date
let d = new Date();
const newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//Adds Inner Text


// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData)
/* Function called by event listener */
async function generateData(e) {
    const newZip = document.getElementById('zip').value;
    const newFeelings = document.getElementById('feelings').value;
    const newTemp = document.getElementById('temp').value;
    getWeather(baseURL, newZip, apiKey)
    console.log(`the date is: ${newDate}`);
    console.log(`your zipcode is: ${newZip}`);
    console.log(`you are feeling: ${newFeelings}`);
    console.log(`your temperature is: ${newTemp}`);
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, temp, apiKey)=>{
    const res = await fetch(baseURL+temp+apiKey)
    try{
        const weatherData = await res.json();
        console.log(weatherData)
        return weatherData;
    } catch(error) {
        console.log("ERROR1", error)
    }
}


const getDate = async (baseURL, date, apikey)
const getZip = async (baseURL, zip, apikey)
const getTemp = async (baseURL, temp, apikey)

/* Function to POST data */
const postWeatherData = async ( url = 'api.openweathermap.org/data/2.5', data = {}) =>{
    console.log(data)
    const res = await fetch( url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

/* Function to GET Project Data */
const getWeatherData = async (baseURL, temp, apiKey) => {
    const res = await fetch(baseURL+temp+apiKey)
     try{
        const res = await fetch(baseURL+`$zipcode`+`$apiKey`);
        try{
            const data = await res.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log("ERROR2", error);
        }
    }
}