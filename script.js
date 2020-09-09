// This is an array for each question so I can pull from it later
const questions = [
    {
        question: "1) What does CSS stand for?",
        correctAnswer: "Cascading Style Sheet",
        allAnswers: [
            "Cascading Style Sheet", "Coruscant Super Speedway", "Cyan Style Sheet", "Computer Super Soldier"
        ]
    },
    {
        question: "2) What isn't a primitive date type in Javascript?",
        correctAnswer: "Arrays",
        allAnswers: [
            "Strings", "Arrays", "Numbers", "Booleans"
        ]
    },
    {
        question: "3) What is the method best used for debugging in Javascript?",
        correctAnswer: "console.log",
        allAnswers: [
            "append", "query selector", "console.log", "camel casing"
        ]
    },
    {
        question: "4) What does DOM stand for?",
        correctAnswer: "Document Object Model",
        allAnswers: [
            "Document Object Model", "Data Object Material", "Dates On Monday", "DOM"
        ]
    },
    {
        question: "5) What denotes something as a string in Javascript?",
        correctAnswer: "Quotations",
        allAnswers: [
            "Brackets", "Quotations", "Angle Brackets", "Semi-Colons"
        ]
    }
];

// Declaring the timer constants
const timeEl = document.querySelector("#time");

let secondsLeft = 150;

// Declaring what the each question and answers should be displayed
let currentQuestion = 0;
let currentAnswer = 0;
let questionOn = document.querySelector('#question');
let answerBtn = document.querySelectorAll('.answer');
let answerOne = document.querySelector('#answer1');
let answerTwo = document.querySelector('#answer2');
let answerThree = document.querySelector('#answer3');
let answerFour = document.querySelector('#answer4');
let beginQuizButton = document.querySelector('#begin-quiz');
let startingPage = document.querySelector('#starting-page');
let questionPage = document.querySelector('#question-page');

let correctDisplay = document.querySelector('#correct');
let wrongDisplay = document.querySelector('#wrong');
// What will happen when the Quiz starts???????





function beginQuiz() {
    beginQuizButton.classList.add('d-none');
    startingPage.classList.add('d-none');
    questionPage.classList.remove('d-none');
    renderCurrentQuestion();

    function renderCurrentQuestion() {

        let currentQuestionOn = questions[currentQuestion].question
        questionOn.textContent = currentQuestionOn;
        renderCurrentAnswers();

    };
    function renderCurrentAnswers() {
        let currentAnswerOne = questions[currentQuestion].allAnswers[0];
        let currentAnswerTwo = questions[currentQuestion].allAnswers[1];
        let currentAnswerThree = questions[currentQuestion].allAnswers[2];
        let currentAnswerFour = questions[currentQuestion].allAnswers[3];
        answerOne.textContent = currentAnswerOne;
        answerTwo.textContent = currentAnswerTwo;
        answerThree.textContent = currentAnswerThree;
        answerFour.textContent = currentAnswerFour;
    }
    // console.log(answerBtn)
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].addEventListener('click', function () {

            if (answerBtn.textContent === questions[currentQuestion].correctAnswer) {
                correctDisplay.classList.remove('d-none');
                nextQuestion();
            }
            else {
                wrongDisplay.classList.remove('d-none');
                secondsLeft -= 5;
                nextQuestion();
            };
        })
    }

    function nextQuestion() {
        currentQuestion++;
        renderCurrentQuestion();
    }
    function setTime() {
        let timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                renderHighScores();
            }

        }, 1000);
    }

    setTime();
}

beginQuizButton.addEventListener("click", beginQuiz)







