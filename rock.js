//userChoice
const myButtonRock = document.querySelector('#rock');
const myButtonPaper = document.querySelector('#paper');
const myButtonScissors = document.querySelector('#scissors');

const myUserScore = document.querySelector('#user');
const myCompScore = document.querySelector('#comp');


  //Buttons
  myButtonRock.addEventListener('click', () => {
    playRound('rock', compChoice()), gameOver();
  });

  myButtonPaper.addEventListener('click', () => {
    playRound('paper', compChoice()), gameOver();
  });

  myButtonScissors.addEventListener('click', () => {
    playRound('scissors', compChoice()), gameOver();
  });

  //Computer Choice
  function compChoice() {
    var compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
      compChoice = "rock";
    } else if (compChoice == 1) {
      compChoice = "paper";
    } else {
      compChoice = "scissors";
    }
    return compChoice
  }

  //Score
  var userScore = 0;
  var compScore = 0;
  var draws = 0;


  
  function playRound(userChoice, compChoice) {
  
  //Result Messages
    var userWinsRound = "You Win!"
    var compWinsRound = "You Lose :(";
    var draw = "Try Again";
  
    //Rock Choice
    if (userChoice == "rock" && compChoice == "scissors") {
      alert(userWinsRound), displayUserScore();
    } else if (userChoice == "rock" && compChoice == "paper") {
      alert(compWinsRound), displayCompScore();
    } else if (userChoice == "rock" && compChoice == "rock") {
      alert("Draw:" + " " + draw )
    }
    //paper Choice
    if (userChoice == "paper" && compChoice == "rock") {
      alert(userWinsRound), displayUserScore();
    } else if (userChoice == "paper" && compChoice == "scissors") {
      alert(compWinsRound), displayCompScore();
    } else if (userChoice == "paper" && compChoice == "paper") {
      alert("Draw:" + " " + draw)
    }
    //scissors Choice
    if (userChoice == "scissors" && compChoice == "paper") {
      alert(userWinsRound), displayUserScore();
    } else if (userChoice == "scissors" && compChoice == "rock") {
      alert(compWinsRound), displayCompScore();
    } else if (userChoice == "scissors" && compChoice == "scissors") {
      alert("Draw:" + " " + draw)
    } else {
      return "Something Went Wrong";
    }
        
    }

  //Check Game Length
   function gameOver() {
     if (userScore == 5) {
       alert('WINNER! WINNER!'), location.reload();
     } else if (compScore == 5) {
        alert('YOU LOSE!'), location.reload();
     }
   }

   //Display Score
   function displayUserScore() {
     document.getElementById("user").innerHTML = 'User:' + ++userScore;
   }
   function displayCompScore() {
    document.getElementById("comp").innerHTML = 'Computer:' + ++compScore;
   }