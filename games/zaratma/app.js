const rollButton = document.getElementById("roll-button");

const dice1 = document.getElementById("dice-1");

const dice2 = document.getElementById("dice-2");

const result = document.getElementById("dice-result");

/* DICE VALUES */

const diceFaces = [
  "⚀",
  "⚁",
  "⚂",
  "⚃",
  "⚄",
  "⚅",
];

/* ROLL */

rollButton.addEventListener("click", () => {

  /* RANDOM */

  const random1 =
    Math.floor(Math.random() * 6);

  const random2 =
    Math.floor(Math.random() * 6);

  /* SHAKE */

  dice1.classList.add("shake");

  dice2.classList.add("shake");

  /* UPDATE */

  setTimeout(() => {

    dice1.classList.remove("shake");

    dice2.classList.remove("shake");

    dice1.textContent =
      diceFaces[random1];

    dice2.textContent =
      diceFaces[random2];

    /* TOTAL */

    const total =
      random1 + random2 + 2;

    result.textContent =
      `Zarlar: ${random1 + 1} ve ${random2 + 1} | Toplam: ${total}`;

  }, 500);

});