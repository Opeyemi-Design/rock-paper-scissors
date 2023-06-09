let userSelection = "";
let computerSelection = "";
let userScore = 0;
let computerScore = 0;
let gameCount = 0;


const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");


const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const roundResultElement = document.querySelector("#round-result");
const gameResultElement = document.querySelector("#game-result");
const resultMessageElement = document.querySelector("#result-message");


rockBtn.addEventListener("click", function() {
  if (gameCount < 5) {
    userSelection = "rock";
    playRound();
  }
});

paperBtn.addEventListener("click", function() {
  if (gameCount < 5) {
    userSelection = "paper";
    playRound();
  }
});

scissorsBtn.addEventListener("click", function() {
  if (gameCount < 5) {
    userSelection = "scissors";
    playRound();
  }
});

// Function to handle the game logic
function playRound() {
  // Generate computer's random selection
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  computerSelection = options[randomIndex];

  // Compare selections and determine the winner or tie
  if (userSelection === computerSelection) {
    roundResultElement.textContent = "This round is a draw";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResultElement.textContent = "You win this round";
    userScore++;
  } else {
    roundResultElement.textContent = "Computer wins this round";
    computerScore++;
  }

  // Update the scores in the UI
  playerScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;

  gameCount++;

  if (gameCount === 5) {
    // Game finishes after 5 rounds
    // Display final game result and disable the buttons
    gameResultElement.textContent = gameResultElement.textContent + `${userScore}:${computerScore}`;

    if (userScore > computerScore) {
      resultMessageElement.textContent = "Fairplay, you win";
    } else if (userScore < computerScore) {
      resultMessageElement.textContent = "Can't believe a computer beat your ass";
    } else {
      resultMessageElement.textContent = "It's a tie, you can't even beat a computer";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}