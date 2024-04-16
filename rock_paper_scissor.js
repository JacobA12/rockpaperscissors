function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case computerSelection.toLowerCase() === playerSelection.toLowerCase():
      return null;
      break;
    case "rock":
      if (computerSelection.toLowerCase() === "paper") {
        return false;
      }
      return true;
      break;
    case "scissors":
      if (computerSelection.toLowerCase() === "rock") {
        return false;
      }
      return true;
      break;
    case "paper":
      if (computerSelection.toLowerCase() === "scissors") {
        return false;
      }
      return true;
      break;
    default:
      console.log("Default case reached, ERROR");
      break;
  } 
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let numChoice = Math.floor(Math.random() * 3);

  return choices[numChoice];
}

const playerSelection = "rock";
const computerSelection = "rock";



let outcome = null;
console.log(playerSelection + " vs " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
