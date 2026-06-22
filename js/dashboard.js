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

const aiNewsCountElement =
  document.querySelector("#ai-news-count");

const aiNewsUpdatedElement =
  document.querySelector("#ai-news-updated");

async function updateAiNewsWidget() {

  try {

    const response = await fetch(
      "https://ainews-system.netlify.app/data/stats/latest-statistics.json"
    );

    const data = await response.json();

    aiNewsCountElement.textContent =
      `${data.toplam_haber} Haber`;

    aiNewsUpdatedElement.textContent =
      `Son güncelleme: ${data.generated_at}`;

  } catch (error) {

    aiNewsCountElement.textContent =
      "AI News";

    aiNewsUpdatedElement.textContent =
      "Veri alınamadı";

    console.error(
      "AI News verisi alınamadı:",
      error
    );

  }

}

updateAiNewsWidget();