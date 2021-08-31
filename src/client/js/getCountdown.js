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
      console.log("You are leaving in " + days + " days!")
    }
    

    module.export = getCountdown;