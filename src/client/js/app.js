
// Geonames API
const geonamesBase = 'http://api.geonames.org/searchJSON?q=';
const geonamesApi = 'yshaikh'

//Weatherbit API
const weatherbitApi = 'd50c5f4915224a418089dd6bd26bf43b'
const weatherbitBase = 'http://api.weatherbit.io/v2.0/'
const weatherbitCurrent = 'http://api.weatherbit.io/v2.0/current?'
const weatherbitFuture = 'http://api.weatherbit.io/v2.0/forecast/daily?'

//Pixabay API 
const pixabayBase = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=`;

//Define Global Variables
const button = document.getElementById('generate');
const date = document.getElementById('date');
// const departure = document.getElementById('departureDate');


       
   
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
function generateData(e) {
    e.preventDefault();
    const destinationCity = document.getElementById('destinationCity').value
    const countDownDate = document.getElementById('departureDate').value;
    console.log(destinationCity)
    console.log (countDownDate)
    const countdown = getCountdown
    if (countdown <= 7)  
    { weatherbitBase = weatherbitCurrent
} else {
  weatherbitBase = weatherbitFuture
}



   

/* Function to POST data to app */
const addData = async ( url='http://localhost:8080', data = {}) => {
    const res = await fetch( url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
try {
    const newData = await res.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log('post_error', error)
  }
}}

 
