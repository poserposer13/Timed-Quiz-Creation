// This is an array for each question so I can pull from it later
const questions = [
    {
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheet",
        allAnswers: [
            "Cascading Style Sheet", "Corisant Super Speedway", "Cyan Style Sheet", "Computer Super Soldier"
        ]
    },
    {
        question: "What isn't a primitive date type in Javascript?",
        correctAnswer: "Array",
        allAnswers: [
            "Strings", "Arrays", "Numbers", "Booleans"
        ]
    },
    {
        question: "What is the method best used for debugging in Javascript?",
        correctAnswer: "console.log",
        allAnswers: [
            "append", "query selector", "console.log", "camel casing"
        ]
    },
    {
        question: "What does DOM stand for?",
        correctAnswer: "Document Object Model",
        allAnswers: [
            "Document Object Model", "Data Object Material", "Dates On Monday", "DOM"
        ]
    },
    {
        question: "What denotes something as a string in Javascript?",
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
let questionOn = document.querySelector('#question');
let answerOne = document.querySelector('#answer1');
let answerTwo = document.querySelector('#answer2');
let answerThree = document.querySelector('#answer3');
let answerFour = document.querySelector('#answer4');
let beginQuizButton = document.querySelector('#begin-quiz')
let startingPage = document.querySelector('#starting-page')
let questionPage = document.querySelector('#question-page')

// What will happen when the Quiz starts???????






function beginQuiz() {
    beginQuizButton.classList.add('d-none');
    startingPage.classList.add('d-none');
    questionPage.classList.remove('d-none');
   renderCurrentQuestion();


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
    // renderCurrentQuestion();
    setTime();
}

beginQuizButton.addEventListener("click", beginQuiz)







  // function renderCurrentQuestion() {
    //     for (let i = 0; i < questions.length; i++) {
    //         if (i === 0) {
    //             questionOn.textContent = questions.questionOne;
    //             answerOne.textContent = questions.allAnswersOne[0];
    //             answerTwo.textContent = questions.allAnswersOne[1];
    //             answerThree.textContent = questions.allAnswersOne[2];
    //             answerFour.textContent = questions.allAnswersOne[3];

    //         }
    //         else if (i === 1) {
    //             questionOn.textContent = questions.questionTwo;
    //             answerOne.textContent = questions.allAnswersTwo[0];
    //             answerTwo.textContent = questions.allAnswersTwo[1];
    //             answerThree.textContent = questions.allAnswersTwo[2];
    //             answerFour.textContent = questions.allAnswersTwo[3];
    //         }
    //         else if (i === 2) {
    //             questionOn.textContent = questions.questionThree;
    //             answerOne.textContent = questions.allAnswersThree[0];
    //             answerTwo.textContent = questions.allAnswersThree[1];
    //             answerThree.textContent = questions.allAnswersThree[2];
    //             answerFour.textContent = questions.allAnswersThree[3];

    //         }
    //         else if (i === 3) {
    //             questionOn.textContent = questions.questionFour;
    //             answerOne.textContent = questions.allAnswersFour[0];
    //             answerTwo.textContent = questions.allAnswersFour[1];
    //             answerThree.textContent = questions.allAnswersFour[2];
    //             answerFour.textContent = questions.allAnswersFour[3];

    //         }
    //         else if (i === 4) {
    //             questionOn.textContent = questions.questionFive;
    //             answerOne.textContent = questions.allAnswersFive[0];
    //             answerTwo.textContent = questions.allAnswersFive[1];
    //             answerThree.textContent = questions.allAnswersFive[2];
    //             answerFour.textContent = questions.allAnswersFive[3];

    //         }
    //     }
