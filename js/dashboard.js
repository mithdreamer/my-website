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

    const updateDate = new Date(
  data.generated_at.replace(" ", "T")
);

  aiNewsUpdatedElement.textContent =
  updateDate.toLocaleString("tr-TR");

  } 
    catch (error) {

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

const weatherTemperatureElement =
  document.querySelector("#weather-temperature");

const weatherDescriptionElement =
  document.querySelector("#weather-description");

async function updateWeatherWidget() {

  try {

    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.97&current=temperature_2m"
    );

    const data = await response.json();

    weatherTemperatureElement.textContent =
      `${data.current.temperature_2m}°C`;

    weatherDescriptionElement.textContent =
      "İstanbul";

  } catch (error) {

    weatherTemperatureElement.textContent =
      "--°C";

    weatherDescriptionElement.textContent =
      "Veri alınamadı";

    console.error(error);

  }

}

updateWeatherWidget();


const usdRateElement =
  document.querySelector("#usd-rate");

const eurRateElement =
  document.querySelector("#eur-rate");

async function updateExchangeWidget() {

  try {

    const response = await fetch(
      "https://open.er-api.com/v6/latest/USD"
    );

    const data = await response.json();

    const usdTry =
      data.rates.TRY;

    const eurTry =
      (
        data.rates.TRY /
        data.rates.EUR
      ).toFixed(2);

    usdRateElement.textContent =
      `USD: ${usdTry.toFixed(2)} ₺`;

    eurRateElement.textContent =
      `EUR: ${eurTry} ₺`;

  } catch (error) {

    usdRateElement.textContent =
      "USD: --";

    eurRateElement.textContent =
      "Kur alınamadı";

    console.error(
      "Döviz verisi alınamadı:",
      error
    );

  }

}

updateExchangeWidget();