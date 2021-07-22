/////**COUNTDOWN TIMER****\\\\\\\\\
// Set the date we're counting down to
// const countDownDate = new Date().getDate().departureVal;

// console.log (departure)


// // Update the count down every 1 second
// const getCountDown = setInterval(function() {
//  // Get today's date and time
//   const d = new Date()
//   const now = d.getFullYear() + '-' +  '0' + ( d.getMonth() + 1) + '-' + d.getDate();
  
//   console.log(now)

//   // Find the distance between now and the count down date
//   const distance = countDownDate - now;
//   console.log(distance)
//   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);
