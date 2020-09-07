// This is an array for each question so I can pull from it later
const questions = [
    {
        questionOne: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheet",
        allAnswers: [
            "Cascading Style Sheet", "Corisant Super Speedway", "Cyan Style Sheet","Computer Super Soldier"
        ]
    },
    {
        questionTwo: "What isn't a primitive date type in Javascript?",
        correctAnswer: "Array",
        allAnswers: [
            "Strings", "Arrays", "Numbers","Booleans"
        ]
    },
    {
        questionThree: "What is the method best used for debugging in Javascript?",
        correctAnswer: "console.log",
        allAnswers: [
            "function", "inspect", "console.log","camel-casing"
        ]
    },
    {
        questionFour: "What does DOM stand for?",
        correctAnswer: "Document Object Model",
        allAnswers: [
            "Document Object Model", "Data Object Material", "Dates On Monday","DOM"
        ]
    },
    {
        questionFive: "What denotes something as a string in Javascript?",
        correctAnswer: "Quotations",
        allAnswers: [
            "Brackets", "Quotations", "Angle Brackets","Semi-Colons"
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
    for (let i = 0; i < questions.length; i++){

    }
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