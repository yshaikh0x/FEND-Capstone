//Define Global Variables
const button = document.getElementById('generate');
const date = document.getElementById('date');
const destinationCity = document.getElementById('destinationCity').value
const departure = document.getElementById('departureDate');
const departureVal = document.getElementById('departureDate').value;
const returnVal = document.getElementById('returnDate').value;
const temperature = document.getElementById('temp');
const description = document.getElementById('description');
  
// Geonames API
const geonamesApi = "yshaikh";
const geonamesBase = `http://api.geonames.org/searchJSON?q=${destinationCity}&maxRows=1&username=${geonamesApi}`;

//Weatherbit API
const weatherbitApi = 'd50c5f4915224a418089dd6bd26bf43b'
const weatherbitBase = `http://api.weatherbit.io/v2.0/forecast/daily?`

//Pixabay API 
const pixabayApi = `22391342-c4af7b5f68dd6481aa4bc801e`
const pixabayBase = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${destinationCity}`;


  
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
async function generateData(e) {
    e.preventDefault();
    const destinationCity = document.getElementById('destinationCity').value;
    const departureVal = document.getElementById('departureDate').value;
    const countdown = getCountdown(departureVal);
    const tripLength = getLengthOfTrip(returnVal, departureVal)
    console.log(destinationCity)
    console.log (departureVal)

    getGeonames(destinationCity)
    .then(async (geoData) => {
         const res = await 
        postData("/postData", 
        {
         "city": destinationCity,
        "latitude": geoData.lat,
        "longitude": geoData.lng,
    })
    getWeatherbit(geoData.lat, geoData.lng)
      .then(async (weatherbitData) => {
        const res = await 
        postData("/postData", 
        {
          "temperature": weatherbitData.temp,
          "description" : weatherbitData.description
        })
      })
      getPixabay(destinationCity)
      .then(async (pixabayImage)=>{
        const res = await
        postData("/postData",
        {
          "image": pixabayImage.hits[0].webformatURL
        })
      })
      .then(() => {
        getCountdown(departureVal);
    })
      .then(() => {
        getLengthOfTrip(returnVal, departureVal);
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
  // let hours = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // let minutes = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.ceil((distance % (1000 * 60)) / 1000);
  //writing out the countdown
  console.log("You are leaving in " + days + " days! ")
}

///***TRIP LENGTH FUNCTION****////
const getLengthOfTrip = async(returnVal, departureVal) => {
  //Set the date we're counting down to
  const depDate = new Date(departureVal);
  const retDate = new Date(returnVal);
    //calculate difference between 2 dates
    const tripLength = retDate - depDate;
    let daysLength = Math.ceil(tripLength / (1000 * 60 * 60 * 24));
    //writing out the countdown
    console.log( "The length of your trip is " + daysLength + " days!")
  }

/* Function to GET Geonames API Data*/
const getGeonames = async(destinationCity) => {
  const res = await fetch(`http://api.geonames.org/searchJSON?q=${destinationCity}&maxRows=1&username=${geonamesApi}`)
      try{
          const geoData = await res.json();
          console.log(geoData)
          console.log("Longitude: " + geoData.geonames[0].lng)
          console.log("Latitude: "+ geoData.geonames[0].lat)
          const lat = geoData.geonames[0].lat
          const lng = geoData.geonames[0].lng
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
    `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApi}`)
    
      try{
          const weatherbitData = await res.json();
          console.log(weatherbitData)
          console.log("Temp: " + weatherbitData.data[0].temp)
          console.log("Description: " + weatherbitData.data[0].weather.description)
            return {
            temp:  weatherbitData.data[0].temp, 
            description : weatherbitData.data[0].weather.description
          };
      } catch (error) {
          console.log("WEATHERBIT ERROR", error);
      } 
 }

 /* Function to GET Pixabay API Data*/
const getPixabay = async(destinationCity) => {
  const res = await fetch(`https://pixabay.com/api/?key=${pixabayApi}&q=${destinationCity}`)
      try{
          const pixabayImage = await res.json();
          console.log(pixabayImage)
          console.log(pixabayImage.hits[0].webformatURL)
          return pixabayImage;
      } catch (error) {
          console.log("PIXA ERROR", error);
      } 
 }

/* Function to POST data to app */
const postData = async ( url='http://localhost:8080/postData', data = {}) => {
    const res = await fetch( 'http://localhost:8080/postData', {
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
  const req = await fetch ('http://localhost:8080/all');
  try{
      const projectData = await req.json()
      console.log(projectData);
      document.getElementById('city').innerHTML=`City: ${destinationCity}`;
      document.getElementById('temp').innerHTML=`Temperature: ${projectData.weatherbitData.Temperature}`;
      document.getElementById('description').innerHTML=`Description: ${projectData.weatherbitData.Description}`;
      document.getElementById('countdown').innerHTML=`Countdown: ${getCountdown(departureVal).days}`;
      document.getElementById('tripLength').innerHTML=`Trip Length: ${getLengthOfTrip().tripLength}`;
      // document.getElementById('fromPixabay').src = `${projectData.Image}`;
      document.getElementById("fromPixabay").innerHTML = `<img src="${projectData.pixabayImage.Image}" />`;

      
  }catch(error) {
      console.log("UI Error" , error)
  }
}
