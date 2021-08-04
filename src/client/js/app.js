
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
const pixabayApi = '22391342-c4af7b5f68dd6481aa4bc801e'

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
    const countdown = getCountdown(departureVal);
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
async function getCountdown (departureVal){
//Set the date we're counting down to
const depDate = new Date(departureVal);
  //get todays date
  let d = new Date();
  let todaysDate = new Date();
  todaysDate = new Date(todaysDate);
  //calculate difference between 2 dates
  const distance = depDate - todaysDate
  let days = Math.ceil(distance / (1000 * 60 * 60 * 24));
  let hours = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.ceil((distance % (1000 * 60)) / 1000);
  //writing out the countdown
  console.log("You are leaving in " + days + " days")
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

 /* Function to GET Pixabay API Data*/
const getPixabay = async(pixabayBase, pixabayApi) => {
  const res = await fetch(pixabayBase + pixabayApi )
      try{
          const data = await res.json();
          console.log(data)
          return data;
      } catch (error) {
          console.log("PIXA ERROR", error);
      } 
 }

/* Function to POST data to app */
const postData = async ( url=`http://localhost:8080/getGeonames`, data = {}) => {
    const res = await fetch( url, {
        method: 'POST',
        credentials: "same-origin",
        mode: 'cors',
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
    console.log('POST Error', error)
  }
}}

 /* Function to GET Data */
const updateUI = async ()=> {
  const req = await fetch ('/all');
  try{
      const projectData = await req.json()
      document.getElementById('country').innerHTML=`Country: ${data.geonames[0].countryName}`;
      document.getElementById('longitude').innerHTML=`Longitude: ${data.geonames[0].lng}`;
      document.getElementById('latitude').innerHTML=`Latitude: ${data.geonames[0].lat}`

      
  }catch(error) {
      console.log("UI Error" , error)
  }
}
