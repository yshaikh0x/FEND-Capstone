// Set the date we're counting down to
const countDownDate = new Date("").getTime();

// Update the count down every 1 second
const getCountdown = setInterval(function() {

  // Get today's date and time
  let currentDate = new Date().getDate();

  // let departure = moment(dep);

  // Find the distance between now and the count down date
  let distance = countDownDate - currentDate;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "; 

  // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
 },
 1000);
 