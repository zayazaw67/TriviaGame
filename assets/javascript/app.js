
var triviaQuestions = [
    {
        question1: "insert multiple choice question",
        answer1: {
            a: "choice1",
            b: "choice2",
            c: "choice3",
        },
    correctAnswer: b
    },
    {
        question1: "insert multiple choice question",
        answer1: {
            a: "choice1",
            b: "choice2",
            c: "choice3",
        },
    correctAnswer: a
    },
    {
        question1: "insert multiple choice question",
        answer1: {
            a: "choice1",
            b: "choice2",
            c: "choice3",
        },
    correctAnswer: b
    },
    {
        question1: "insert multiple choice question",
        answer1: {
            a: "choice1",
            b: "choice2",
            c: "choice3",
        },
    correctAnswer: c
    }
]

var triviaTimer = 240;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var remainingTime
timer = 15;


function startGame() {
    correct = 0,
    incorrect = 0,
    unanswered = 0;
    clearInterval(triviaTimer);
}
