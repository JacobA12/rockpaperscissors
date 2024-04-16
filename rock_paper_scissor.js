function playRound(playerSelection, computerSelection) {
  function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
      case "rock":
        if (computerSelection.toLowerCase() === "paper") {
          return false;
        }
        break; // Add a break statement here
      case "scissors":
        if (computerSelection.toLowerCase() === "rock") {
          return false;
        }
        break; // Add a break statement here
      case "paper":
        if (computerSelection.toLowerCase() === "scissors") {
          return false;
        }
        break; // Add a break statement here
      default:
        if (playerSelection !== computerSelection) {
          return true;
        } else {
          return null;
        }
    }
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let numChoice = Math.floor(Math.random() * 3);

  return choices[numChoice];
}

function getUserChoice(){
  let userInput = prompt("Please enter your rock, paper, or scissors: ")
  if (userInput !== null) {
    console.log("User entered: ", userInput)
  } else {
    console.log("User cancelled input")
  }

  return userInput;
}

let outcome = playRound(playerSelection, computerSelection);

if (outcome === false) {
  console.log("You Lose! " + computerSelection + " beats " + playerSelection);
} else if (outcome === true) {
  console.log("You Win! " + playerSelection + " beats " + computerSelection);
} else {
  console.log("It was a tie, try again");
}
