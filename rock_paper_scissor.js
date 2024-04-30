const wins = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (!wins[playerSelection]) {
    return null; // Invalid user input
  }
  return playerSelection === wins[computerSelection];
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  let userInput;
  while (!userInput || !wins[userInput.toLowerCase()]) {
    userInput = prompt("Please enter rock, paper, or scissors: ");
    if (!userInput) {
      console.log("Cancelled input. Please try again.");
    } else if (!wins[userInput.toLowerCase()]) {
      console.log("Invalid input. Please enter rock, paper, or scissors.");
    }
  }
  return userInput.toLowerCase();
}

function game() {
  let keepPlaying = true;
  while (keepPlaying) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome === null) {
      console.log("Invalid input. Please try again.");
    } else if (outcome) {
      console.log(
        "You Win! " + playerSelection + " beats " + computerSelection
      );
    } else if (!outcome) {
      console.log(
        "You Lose! " + computerSelection + " beats " + playerSelection
      );
    } else {
      console.log("It's a tie!");
    }

    keepPlaying = confirm("Play again?");
  }
}

game();
