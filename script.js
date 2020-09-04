// This is an array for each question so I can pull from it later
const questions = [
    {
        questionOne: "",
        correctAnswer: "",
        allAnswers: [
            "", "", "",""
        ]
    },
    {
        questionTwo: "",
        correctAnswer: "",
        allAnswers: [
            "", "", "",""
        ]
    },
    {
        questionThree: "",
        correctAnswer: "",
        allAnswers: [
            "", "", "",""
        ]
    },
    {
        questionFour: "",
        correctAnswer: "",
        allAnswers: [
            "", "", "",""
        ]
    },
    {
        questionFive: "",
        correctAnswer: "",
        allAnswers: [
            "", "", "",""
        ]
    }
];

// Declaring the timer constants
const timeEl = document.querySelector("#time");

let secondsLeft = 151;

// Declaring what the each question and answers should be displayed
let currentQuestion = 0;
let questionOn = document.querySelector('#question');
let allAnswerOne = document.querySelector('#answer1');
let allAnswerTwo = document.querySelector('#answer2');
let allAnswerThree = document.querySelector('#answer3');
let allAnswerFour = document.querySelector('#answer4');
let allAnswerFive = document.querySelector('#answer5');

// What will happen when the Quiz starts???????
// function beginQuiz(){



function renderCurrentQuestion(){
    for ()
}
// }
// document.addEventListener("click", function (event) {

//     if (event.target.matches("button")) {
//         if (event.target.textContent === questions[currentQuestion].correctAnswer) {

//         }
//         else {

//         };

//         currentQuestion++;
//     }
// })




function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}
setTime();