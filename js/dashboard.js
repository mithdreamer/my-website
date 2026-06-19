const clockElement = document.querySelector("#clock");

function updateClock() {

  const now = new Date();
  

  const time = now.toLocaleTimeString("tr-TR");
 

  clockElement.textContent = time;

}

updateClock();

setInterval(updateClock, 1000);


const calendarDateElement =
  document.querySelector("#calendar-date");

const calendarDayElement =
  document.querySelector("#calendar-day");

function updateCalendar() {

  const now = new Date();

  const date = now.toLocaleDateString("tr-TR");

  const day = now.toLocaleDateString("tr-TR", {
    weekday: "long",
  });

  calendarDateElement.textContent = date;

  calendarDayElement.textContent = day;

}

updateCalendar();