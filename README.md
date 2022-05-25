GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

// // array of questions and answers; shows correct and wrong answers
// var questions = [{
//     question: "Commonly used data types DO Not Include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     question: "The condition in an if / else statement is enclosed with _______.",
//     choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
//     answer: "parenthesis"
//   },
//   {
//     question: "Arrays in JavaScript can be used to store ________.",
//     choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//     answer: "all of the above"
//   },
//   {
//     question: "String values must be enclosed within _______ when being assigned to variables.",
//     choices: ["commas", "curly brackets", "quotes", "parenthesis"],
//     answer: "commas"
//   },
//   {
//     question: "A very useful took used during development and debugging for printing content to the debugger is:",
//     choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
//     answer: "console.log"
//   }
// ]