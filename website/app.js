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
    console.log(`the date is: ${currentDate}`);
    console.log(`your zipcode is: ${newZip}`);
    console.log(`you are feeling: ${newFeelings}`);
    updateUI()
}
/* Function to GET Web API Data*/
 const getWeatherData = async(baseURL, newZip, apiKey) => {
     const res = await fetch(baseURL + newZip + apiKey)
         try{
             const data = await res.json();
             updateUI();
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
        const projectData = await request.json()
        document.getElementById('date').innerHTML=projectData[0].currentDate;
        document.getElementById('zip').innerHTML=projectData[0].zip;
        document.getElementById('temp').innerHTML=projectData[0].temp;
        document.getElementById('content').innerHTML=projectData[0].content;
    } catch (error) {
        console.log("ERROR2", error);
    }
}