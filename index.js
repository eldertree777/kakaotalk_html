const clock =document.querySelector(".status-bar__clock");

function getTime(){
    const date = new Date();
        const hour = date.getHours();
        const minutes =date.getMinutes();
        clock.innerHTML = `${hour < 10 ? `0${hour}`:hour
        }:${minutes < 10 ? `0${minutes}`:minutes
        }`; 
}

function init(){
    getTime();
    setInterval(getTime, 60000);
}

init();