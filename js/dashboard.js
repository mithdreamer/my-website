const clockElement = document.querySelector("#clock");

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString("tr-TR");

  clockElement.textContent = time;

}

updateClock();

setInterval(updateClock, 1000);