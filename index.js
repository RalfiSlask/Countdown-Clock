// Setting variables

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

// Setting counters 

let secCounter = 60;
let minCounter = 59;
let hourCounter = 24;
let daysCounter = 365;

// seconds counting down

const secCountDown = () => {
    if(secCounter == 0) {
        secCounter = 60;
        seconds.innerHTML = secCounter; 
        secCounter--
    } else {
        secCounter--
        seconds.innerHTML = secCounter; 
    }
}

// minutes counting down

const minCountDown = () => {
    if(minCounter == 0) {
        minCounter = 60;
        minutes.innerHTML = minCounter; 
        minCounter--
    } else {
        minCounter--
        minutes.innerHTML = minCounter;  
    }
}

// hours counting down


const hourCountDown = () => {
    if(hourCounter == 0) {
        hourCounter = 24;
        hours.innerHTML = minCounter; 
        hourCounter--
    } else {
        hourCounter--
        hours.innerHTML = minCounter;  
    }
}

const dayCountDown = () => {
    if(daysCounter == 0) {
        daysCounter = 365;
        days.innerHTML = minCounter; 
        daysCounter--
    } else {
        daysCounter--
        days.innerHTML = minCounter;  
    }
}

setInterval(secCountDown, 1000);
setInterval(minCountDown, 60000);
setInterval(hourCountDown, 3600000);
setInterval(dayCountDown, 86400000);
