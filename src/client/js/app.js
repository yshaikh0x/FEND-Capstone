
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
const departureVal = document.getElementById('departureDate').value

/////**COUNTDOWN TIMER****\\\\\\\\\
// Set the date we're counting down to
const countDownDate = new Date().getDate().departureVal;

console.log (countDownDate)


// Update the count down every 1 second
const getCountDown = setInterval(function() {

  // Get today's date and time
  const d = new Date()
  const now = d.getFullYear() + '-' +  '0' + ( d.getMonth() + 1) + '-' + d.getDate();
  
  console.log(now)

  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  console.log(distance)
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

   
   
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', generateData);

/* Function called by event listener */
async function generateData(e) {
    e.preventDefault();
    const destinationCity = document.getElementById('destinationCity').value
    const departureVal = document.getElementById('departureDate').value;
    console.log(destinationCity)
    console.log (departureVal)
    /////**COUNTDOWN TIMER****\\\\\\\\\
// Set the date we're counting down to
const countDownDate = new Date().getDate().departureVal;

console.log (departure)


// Update the count down every 1 second
const getCountDown = setInterval(function() {
 // Get today's date and time
  const d = new Date()
  const now = d.getFullYear() + '-' +  '0' + ( d.getMonth() + 1) + '-' + d.getDate();
  
  console.log(now)

  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  console.log(distance)
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


    const countdown = getCountDown()  
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

 
