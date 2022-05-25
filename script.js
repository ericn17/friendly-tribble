// Quiz questions and answers
var questions = [{
    title: "Commonly used data types DO Not Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "Arrays in JavaScript can be used to store ________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "commas"
  },
  {
    title: "A very useful took used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  }
]

//setting the numerical variables for the functions
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the game and the timer
function start() {

  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    //proceed to end the game function when timer is below 0 at any time
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  next();
}

//stop the timer to end the game and get a score
function endGame() {
  clearInterval(timer);

  var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score + ` /100!</h3>
    <h3>That means you got ` + score / 20 + ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores on local storage
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById('name').value);
  getScore();
}

function getScore() {
  var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//clears the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");

  resetGame();
}

//reset the game 
function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("timeLeft").innerHTML = timeLeft;

  var quizContent = `
    <h1>
        Coding Quiz Challenge!
    </h1>
    <h3>
        Keep in mind that there is a timer and the timer will be reduced by 10 seconds for every wrong answer.   
    </h3>
    <button onclick="start()">Start!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 10 seconds from the timer if user chooses an incorrect answer
function incorrect() {
  timeLeft -= 10;
  next();
}

//increases the score by 20points if the user chooses the correct answer
function correct() {
  score += 20;
  next();
}

//loops through the questions 
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }

  var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

  for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
  }


  document.getElementById("quizBody").innerHTML = quizContent;
}