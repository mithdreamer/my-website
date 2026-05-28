/* BUTTONS */

const rockButton =
  document.getElementById("rock");

const paperButton =
  document.getElementById("paper");

const scissorsButton =
  document.getElementById("scissors");

/* UI */

const computerChoiceText =
  document.getElementById("computer-choice");

const resultText =
  document.getElementById("game-result");

/* CHOICES */

const choices = [
  "rock",
  "paper",
  "scissors",
];

/* GAME */

function playGame(playerChoice) {

  /* RANDOM AI */

  const randomIndex =
    Math.floor(Math.random() * 3);

  const computerChoice =
    choices[randomIndex];

  /* UPDATE UI */

  computerChoiceText.textContent =
    computerChoice;

  /* RESULT */

  if (playerChoice === computerChoice) {

    resultText.textContent =
      "Berabere 🤝";

  }

  else if (

    (playerChoice === "rock" &&
      computerChoice === "scissors")

    ||

    (playerChoice === "paper" &&
      computerChoice === "rock")

    ||

    (playerChoice === "scissors" &&
      computerChoice === "paper")

  ) {

    resultText.textContent =
      "Kazandın 🎉";

  }

  else {

    resultText.textContent =
      "Kaybettin 😢";

  }

}

/* EVENTS */

rockButton.addEventListener("click", () => {

  playGame("rock");

});

paperButton.addEventListener("click", () => {

  playGame("paper");

});

scissorsButton.addEventListener("click", () => {

  playGame("scissors");

});