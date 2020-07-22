// Global variables
// var timeout = setTimeout( clearInterval);
// var setInterval = 60000;
// var secondsDisplay = document.querySelector("seconds");
// var answerButton = document.createElement("button")
// var seconds = Math.floor(( (1000 * 60)) / 1000);;
// var secondsLeft = 60;
// var BeginE1 = document.querySelector("#display");
// var userAnswer = document.getElementById("userAnswer");
// var scoreE1 = document.querySelector("#score");
// var counter= document.getElementById("counter").innerHTML =  seconds + "seconds ";
// window.debugVar = questions;
// score = parseInt(userAnswer/rightAnswer)

//What data we need to make this work.
//1. Timer and ability to decrement it every second.
//2. A list of questions and answers, etc.
//3. A way to tell what the current question is.
//4. count of correct answers
var timer = 120;
var timerInterval = setInterval(updateTimer, 1000);
var currentQuestionIndex = 0;
var correctAnswerCount = 0;

//selectors in the dom
var timerEl = document.getElementById("counter");
var questionTitle = document.getElementById('question-title');
var begin = document.getElementById('begin');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');

//What actions do we need.
//1. fun change the timer value and print it to the screen.ction to
//2. function to take the current question and print it to the screen.
//3. function to check a user's answer and see if it's correct.
//4. event handlers to call the answre check when a answer is clicked.

var questions = [{
  q: "Mustang Shelby debuted in what Year?",
  a: "1968,",
  b: "1998,",
  c: "1940,",
  d: "1965,",
  rightAnswer: 'd',
},

{
  q: "Winston Churchill was a leader in what country ?",
  a: "Germany",
  b: "Britain",
  c: "Russia",
  d: "UAE",
  rightAnswer: 'b',

},

{
  q: "Denmark Vesey was a Slave in what state ?",
  a: "South Carolina",
  b: "Texas",
  c: "Tennesee",
  d: "Bermuda",
  rightAnswer: "a",

},

{
  q: "Rev. Joseph Simmons is part on what legendary musical group?",
  a: "Milli Vanilli",
  b: "The Wu-tang",
  c: "RUN DMC",
  d: "Crush Groove",
  rightAnswer: "c",

},

{
  q: "Andre Benjamin is part on what legendary musical group?",
  a: "OutKast",
  b: "The Backstreet boys",
  c: "Hootie and the Blowfish",
  d: "Nickelback",
  rightAnswer: "a",

},

{
  q: "This 80's show featured a talking car?",
  a: "Walker Texas Ranger",
  b: "The Renegade",
  c: "C.H.I.P.S.",
  d: "Night Rider",
  rightAnswer: "d",

}];

function updateTimer() {
  timerEl.innerHTML = `${timer} seconds left.`
  timer = timer - 1;
}
document.addEventListener("begin",function(){})
function displayCurrentQuestion() {
console.log("HEY THERE I WORK");
  questionTitle.innerHTML = questions[currentQuestionIndex].q ;
  a.innerHTML = questions[currentQuestionIndex].a
  b.innerHTML = questions[currentQuestionIndex].b
  c.innerHTML = questions[currentQuestionIndex].c
  d.innerHTML = questions[currentQuestionIndex].d
} 

  
  
  //you'll have to do something similiar with each answer.


  //add a to the dom..
questionTitle.append = questions[currentQuestionIndex].q ;
  a.append = questions[currentQuestionIndex].a
  b.append = questions[currentQuestionIndex].b
  c.append = questions[currentQuestionIndex].c
  d.append = questions[currentQuestionIndex].d
  ///add b to the dom.

  displayCurrentQuestion()
function checkAnswer(userAnswer) {
  //compare user answer to current question right answer.
  if (userAnswer === questions[currentQuestionIndex].rightAnswer);
  correctAnswerCount ++;
  currentQuestionIndex ++;

  elseif(userAnswer !== currentQuestionIndex.rightAnswer);
  correctAnswerCount ;
  currentQuestionIndex ++;
  setInterval(updateTimer, 4000);


  
  //increment correctAnswerCount if they are the same.
  correctAnswerCount ++;
  //increment currentQuestionIndex by 1
  //call display currentQuestion
  


begin.addEventListener('click', () => { displayCurrentQuestion('q') })


a.addEventListener('click', () => { checkAnswer('a') })


b.addEventListener('click', () => { checkAnswer('b') })


c.addEventListener('click', () => { checkAnswer('c') })


d.addEventListener('click', () => { checkAnswer('d') })
// do this for b, c, d

}


//  logic functions
// Begin.addEventListener("click", function (event) {

//   console.log("rollQuestions functions rolls after this")

//   function rollQuestions() { };
//   // console.log(questions);start question display

//   // console.log(event);
//   $("li").append(questions[i])
//   for (var i = 0; i < questions.length; i++) {
//     console.log(questions[i].q);

//     $('li').append(questions[i].q1);
//     $('li').append(questions[i].a1);
//   }})
 




