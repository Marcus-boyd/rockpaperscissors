const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
   return userInput
 } else {
   console.log('Choose Rock Paper or Scissors')
 }
}

const getComputerChoice = () => {
 randomNumber = Math.floor(Math.random() * 3);

 switch (randomNumber) {
   case 0:
     return 'rock';
   case 1:
     return 'paper';
   case 2:
     return 'scissors'
 }

}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Its a tie play again'
  }

  if (userChoice === 'rock') {
    if(computerChoice === 'scissors') {
      return 'User wins'
    } else {
      return 'Computer wins'
    }
  }

 	if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'User wins'
    } else {
      return 'Computer wins'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice == 'rock') {
      return 'Computer wins'
    } else {
      return 'User wins'
    }
  }

  if (userChoice === 'bomb') {
    return 'User wins ha ha ha ha ha'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log(userChoice)
  console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
