const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const gameRound = (playerSelection, computerSelection) => {
    const caseInsensitivePlayerSelection = playerSelection.toLowerCase()

    if (caseInsensitivePlayerSelection === computerSelection.toLowerCase()) {
        return "Wow! It's a stalemate"
    } else if (    (caseInsensitivePlayerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
    (caseInsensitivePlayerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
    (caseInsensitivePlayerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
        return `You win! ${caseInsensitivePlayerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${caseInsensitivePlayerSelection}`;
    }
  }

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(gameRound(playerSelection, computerSelection));