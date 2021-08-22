//Define Global Variables
const button = document.getElementById('generate');
const date = document.getElementById('date');
const destinationCity = document.getElementById('destinationCity').value
const departure = document.getElementById('departureDate');
const departureVal = document.getElementById('departureDate').value;
const temperature = document.getElementById('temp');
const description = document.getElementById('description');
  
// Geonames API
const geonamesApi = "yshaikh";
const geonamesBase = `http://api.geonames.org/searchJSON?q=${destinationCity}&maxRows=1&username=${geonamesApi}`;

//Weatherbit API
const weatherbitApi = 'd50c5f4915224a418089dd6bd26bf43b'
const weatherbitBase = `https://api.weatherbit.io/v2.0/current?`

//Pixabay API 
const pixabayApi = process.env.PIXABAY_KEY
const pixabayBase = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${destinationCity}`;


  
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
async function generateData(e) {
    e.preventDefault();
    const countdown = getCountdown(departureVal);
    console.log(destinationCity)
    console.log (departureVal)

    getGeonames(destinationCity)
    .then(async (geoData) => {
         const res = await 
        postData("/postData", 
        {"longitude": geoData.lng, 
        "latitude": geoData.lat ,
        "city": destinationCity,
    })
    getWeatherbit()
      .then((weatherInfo) => {
        postData("/postData", {
            "temperature": weatherInfo.temp,
            "description" : weatherInfo.description
        })
      })
        .then(() => {
            updateUI();
        })
    })
}
///***COUNTDOWN FUNCTION****////
const getCountdown = async(departureVal) => {
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
  console.log("You are leaving in " + days + " days! ")
}

/* Function to GET Geonames API Data*/
const getGeonames = async(destinationCity) => {
  const res = await fetch(`http://api.geonames.org/searchJSON?q=${destinationCity}&maxRows=1&username=${geonamesApi}`)
      try{
          const geoData = await res.json();
          console.log(geoData)
          console.log("Longitude: " + geoData.geonames[0].lng)
          console.log("Latitude: "+ geoData.geonames[0].lat)
          let lat = geoData.geonames[0].lat
          let lng = geoData.geonames[0].lng
          return {
            lat,
            lng
          };
      } catch (error) {
          console.log("GEO ERROR", error);
      } 
 }
/* Function to GET Weatherbit API Data*/

const getWeatherbit= async (lat,lng) => {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${weatherbitApi}`)
      try{
          const weatherInfo = await res.json();
          console.log(weatherInfo)
          console.log("Temp: " + weatherInfo.weatherbit[0].temp)
          console.log("Description: " + weatherInfo.weatherbit[0].description)
          return {
            temp, 
            description
          };
      } catch (error) {
          console.log("WEATHERBIT ERROR", error);
      } 
 }

 /* Function to GET Pixabay API Data*/
const getPixabay = async(destinationCity) => {
  const res = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${destinationCity}`)
      try{
          const data = await res.json();
          console.log(data)
          return data;
      } catch (error) {
          console.log("PIXA ERROR", error);
      } 
 }

/* Function to POST data to app */
const postData = async ( url='', data = {}) => {
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
}

 /* Function to GET Data */
const updateUI = async ()=> {
  const req = await fetch ('/all');
  try{
      const projectData = await req.json()
      console.log(projectData);
      document.getElementById('city').innerHTML=`City: ${projectData.geoData.City}`;
      document.getElementById('temp').innerHTML=`Temperature: ${data.projectData[0].temperature}`;
      document.getElementById('description').innerHTML=`Description: ${data.projectData[0].description}`;
      document.getElementById('countdown').innerHTML=`"Countdown:" ${getCountdown.days}`;

      
  }catch(error) {
      console.log("UI Error" , error)
  }
}
