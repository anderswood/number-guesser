var guessBtn = document.querySelector('#guess');
var clearBtn = document.querySelector('#clear');
var resetBtn = document.querySelector('#reset');

var secretNumber;

//when the page loads a random number is generated and assigned to secretNumber
window.onload = function(){
  secretNumber = randNum();
}

//submit guess and display the guess
guessBtn.addEventListener('click', function(){
  var currentGuess = document.getElementById('input');
  var guessDisplay = document.querySelector('p');
  currentGuess = parseInt(currentGuess.value,10);
  guessDisplay.innerText = currentGuess;
  var feedback = document.querySelector('#feedback');
  console.log(secretNumber);
  if (currentGuess > secretNumber) {
    feedback.innerText = "That is too high";
  } else if (currentGuess < secretNumber){
    feedback.innerText = "That is too low";
  } else if (currentGuess == secretNumber) {
    feedback.innerText = "BOOM!";
  } else {
    console.log("somethings is wrong here");
  }
})

function randNum(){
  var number = Math.floor(Math.random()*100)+1;
  console.log(number+" randomly gen number");
  return number;
}
// function validate(){
//
// }

// clearBtn.addEventListener('click', function(){
//   currentGuess.value = "";
// })
