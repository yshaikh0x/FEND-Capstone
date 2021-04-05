// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=8a05806ff7d5740b4776d36fb369b102';

//Define Global Variables
const button = document.getElementById('generate');
const zip = document.getElementById('zip');
const feeling = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

//New Date
let d = new Date();
let currentDate = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
function generateData(e) {
    e.preventDefault();
    const newZip = document.getElementById('zip').value;
    const newFeelings = document.getElementById('feelings').value;
    getWeatherData(baseURL, zip, apiKey)
    console.log(`the date is: ${currentDate}`);
    console.log(`your zipcode is: ${newZip}`);
    console.log(`you are feeling: ${newFeelings}`);
    console.log(`your temperature is : ${temp}`);
}

/* Function to GET Web API Data*/
 const getWeatherData = async (baseURL, zip, apiKey) => {
     const res = await fetch('/all')
         try{
             const data = await res.json();
             console.log(getWeatherData)
             return getWeatherData;
         } catch (error) {
             console.log("ERROR2", error);
         }
    }




// /* Function to POST data to app */
const postData = async ( url='', data = {}) => {
    const res = await fetch( url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
}

/* Function to GET Project Data */
const updateUI = async ()=> {
    const req = await fetch ('/all')
    try{
        const sendData = await request.json()
        console.log(sendData)
        console.log(temp)
        date.innerHTML=sendData.date
        temperature.innerHTML=sendData.temp
        content.innerHTML=sendData.content
    } catch (error) {
        console.log("ERROR3", error);
    }
}