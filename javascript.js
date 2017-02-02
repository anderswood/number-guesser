
var guessBtn = document.querySelector('#guess');
var clearBtn = document.querySelector('#clear');
var resetBtn = document.querySelector('#reset');
var currentGuess;
var secretNumber;

//when the page loads a random number is generated and assigned to secretNumber
window.onload = function(){
  secretNumber = randNum();
}

//submit guess and display the guess
guessBtn.addEventListener('click', function(){
  var currentGuess = document.getElementById('input').value;
  currentGuess = parseInt(currentGuess,10);
  resetBtn.disabled = false;
  screenGuess(currentGuess,secretNumber);
})

//Review the user's guess (1 and 2) and provide
//appropropriate feedback (3)
function screenGuess(guess, secret){
  // 1. Check if input is a number
  if (Number.isNaN(guess)) {
    alert("Please enter a number");
    return;
  }

  // 2. Check if the range is valid and the input is within it
  var minValue = document.querySelector('#min-value').value;
  var maxValue = document.querySelector('#max-value').value;
  if (minValue - maxValue > 0) {
    alert("Please input valid min and max values");
    return;
  } else if (guess < minValue || guess > maxValue) {
    alert("Please provide a guess within the min and max values");
    return;
  }

  // 3. Provide appropriate feedback
  var guessDisplay = document.querySelector('p');
  guessDisplay.innerText = guess;
  var feedback = document.querySelector('#feedback');
  document.querySelector('#min-value').setAttribute("disabled", "true");
  document.querySelector('#max-value').setAttribute("disabled", "true");
  console.log("secret number: "+ secret);
  if (guess > secret) {
    feedback.innerText = "That is too high";
  } else if (guess < secret){
    feedback.innerText = "That is too low";
  } else if (guess == secret) {
    feedback.innerText = "BOOM!";
    minValue = minValue - 10;
    document.querySelector('#min-value').value = minValue;
    console.log(maxValue);
    maxValue = maxValue*1 + 10;
    document.querySelector('#max-value').value = maxValue;
    secretNumber = randNum();
  }
}

function randNum(){
  var minValue = document.querySelector('#min-value').value;
  var maxValue = document.querySelector('#max-value').value;
  minValue = parseInt(minValue,10);
  maxValue = parseInt(maxValue,10);
  var number = Math.floor(Math.random()*(maxValue - minValue)) + minValue;
  return number;
}

clearBtn.addEventListener('click', function(){
  document.querySelector('p').innerText = "?";
  document.querySelector('#feedback').innerText = " ";
  document.querySelector('#input').value = "";
  guessBtn.disabled = true;
  clearBtn.disabled = true;
})

//Reset the game by reloading the page
resetBtn.addEventListener('click', function(){
  window.location.reload();
})

//Enable the buttons once fields are populated
document.getElementById('input').addEventListener('keyup',function(){
  guessBtn.disabled = false;
  clearBtn.disabled = false;
  if (document.getElementById('input').value == "") {
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  }
})
