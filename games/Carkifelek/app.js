const wheel =
  document.getElementById("wheel");

const spinButton =
  document.getElementById("spin-button");

const resultText =
  document.getElementById("wheel-result");

/* PRIZES */

const prizes = [
  "100",
  "200",
  "300",
  "400",
];

/* CURRENT ROTATION */

let currentRotation = 0;

/* SPIN */

spinButton.addEventListener("click", () => {

  /* RANDOM */

  const randomIndex =
    Math.floor(Math.random() * 4);

  /* EXTRA SPINS */

  const extraRotation =
    360 * 5;

  /* TARGET */

  const targetRotation =
    randomIndex * 90;

  /* TOTAL */

  currentRotation +=
    extraRotation + targetRotation;

  /* ROTATE */

  wheel.style.transform =
    `rotate(${currentRotation}deg)`;

  /* RESULT */

  setTimeout(() => {

    resultText.textContent =
      `Kazandın: ${prizes[randomIndex]}`;

  }, 4000);

});