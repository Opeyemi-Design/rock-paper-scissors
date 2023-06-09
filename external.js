const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const gameRound = (playerSelection, computerSelection) => {
    const caseInsensitivePlayerSelection = playerSelection.toLowerCase()

    if (caseInsensitivePlayerSelection === computerSelection.toLowerCase()) {
        return "Stalemate"
    } else if (    (caseInsensitivePlayerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
    (caseInsensitivePlayerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
    (caseInsensitivePlayerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
        return `You win! ${caseInsensitivePlayerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${caseInsensitivePlayerSelection}`;
    }
  }

  const game = () => {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${round}:`);
      console.log(`Player chooses ${playerSelection}`);
      console.log(`Computer chooses ${computerSelection}`);
  
      const result = gameRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Game's finished!");
  
    if (playerScore > computerScore) {
      console.log(`Congratulations! You win the game with a score of ${playerScore}:${computerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`Oops! You lose the game with a score of ${playerScore}:${computerScore}`);
    } else {
      console.log(`It's a tie! The game ends with a score of ${playerScore}:${computerScore}`);
    }
  }
  
  // game();