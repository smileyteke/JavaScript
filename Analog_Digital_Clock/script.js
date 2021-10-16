    set_clock = setInterval(() => {

            let date_now = new Date();
            let hr = date_now.getHours();
            let min = date_now.getMinutes();
            let sec = date_now.getSeconds();            
           

            let calc_hr = (hr * 30) + (min / 2);
            let calc_min = min * 6;
            let calc_sec = sec * 6  ;

            

            document.getElementById("hour").style.transform = `rotate(${calc_hr}deg)`;
            document.getElementById("minute").style.transform = `rotate(${calc_min}deg)`;
            document.getElementById("seconds").style.transform = `rotate(${calc_sec}deg)`;

        },1000);
  function countdown() {
    const today = new Date();
    var newYearsDay = new Date('01 Jan 2022');

    //If offer ends reset to new value
    if (today.getSeconds() == newYearsDay.getSeconds()) {
        newYearsDay = resetnewYearsDay();
    }

    //timeToNewYear will have the total millseconds 
    const timeToNewYear = newYearsDay - today;

    // 1 sec= 1000 ms
    // 1 min = 60 sec
    // 1 hour = 60 mins
    // 1 day = 24 hours
    const days_left = Math.floor(timeToNewYear / (1000 * 60 * 60 * 24));
    const hours_left = Math.floor((timeToNewYear / (1000 * 60 * 60) % 24));
    const mins_left = Math.floor((timeToNewYear / (1000 * 60) % 60));
    const secs_left = Math.floor((timeToNewYear / 1000) % 60);

    const days_el = document.getElementById("days_left");
    days_el.innerHTML = days_left;
    const hours_el = document.getElementById("hours_left");
    hours_el.innerHTML = hours_left;
    const mins_el = document.getElementById("mins_left");
    mins_el.innerHTML = mins_left;
    const secs_el = document.getElementById("secs_left");
    secs_el.innerHTML = secs_left;
}

function resetnewYearsDay() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15);
    return futureDate;
}

setInterval(countdown, 1000);