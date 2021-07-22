
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
const departure = document.getElementById('departureDate');
const departureVal = document.getElementById('departureDate').value;
  
   
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
async function generateData(e) {
    e.preventDefault();
    const destinationCity = document.getElementById('destinationCity').value
    const departureVal = document.getElementById('departureDate').value;
    const countdown = getCountdown();
    console.log(destinationCity)
    console.log (departureVal)

    // getWeatherData(baseURL, newZip, apiKey)
    // .then(data => {
    //     addData("/postData", 
    //     {"destination_city": destinationCity, 
    //     "departure_day": departureVal,
    //     "weather": data.main.weather,
    //     // "countdown": countdown\
    // })
    //     .then(() => {
    //         updateUI();
    //     })
    // })
    // console.log(`Destination City is: ${destinationCity}`);
    // console.log(`You are Departing: ${departureVal}`);
    // console.log(`Countdown is : ${}`);

     if (countdown <= 7)  
    { weatherbitBase, weatherbitCurrent
} else {
  weatherbitBase, weatherbitFuture
}
///***COUNTDOWN FUNCTION****////
async function getCountdown (departure){
  let v  = new Date().departureVal;
  console.log (v);
  let d = new Date();
  let todaysDate = d.getFullYear() + '-' +  '0' + ( d.getMonth() + 1) + '-' + d.getDate();
  const distance = departureVal - todaysDate
  console.log(todaysDate)
  // console.log(depDate)
  console.log(distance)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
}

/* Function to GET Geonames API Data*/
const getGeonames = async(baseURL, geonamesApi, city) => {
  const res = await fetch(baseURL + 'username=' + geonamesApi + '&q=' + city)
      try{
          const data = await res.json();
          console.log(data)
          return data;
      } catch (error) {
          console.log("GEO ERROR", error);
      } 
 }

/* Function to GET Weatherbit API Data*/
const getWeatherbit = async(weatherbitBase, weatherbitApi, lat, lng) => {
  const res = await fetch(
    weatherbitBase + 'lat=' +
    lat +
    '&lon=' +
    lng +
    '&key=' + weatherbitApi)
      try{
          const data = await res.json();
          console.log(data)
          return data;
      } catch (error) {
          console.log("WEATHERBIT ERROR", error);
      } 
 }


/* Function to POST data to app */
const postData = async ( url='http://localhost:8080', data = {}) => {
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

 /* Function to GET Data */
const updateUI = async ()=> {
  const req = await fetch ('/all');
  try{
      const projectData = await req.json()
      document.getElementById('country').innerHTML=`Date - ${projectData.Country}`;
      document.getElementById('weather').innerHTML=`Temperature - ${projectData.Weather}`;
      document.getElementById('countdown').innerHTML=`Countdown- ${projectData.Countdown}`;
  } catch (error) {
      console.log("Update_UI", error);
  }
}
