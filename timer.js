// Global variables

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
var userAnswer= document.querySelector('#useranswer')
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
document.addEventListener("begin",function(){})  //add a to the dom..
function displayCurrentQuestion() {
console.log("HEY THERE I WORK");
  questionTitle.innerHTML = questions[currentQuestionIndex].q ;
  
  a.innerHTML = questions[currentQuestionIndex].a
  a.addEventListener('click', () => { checkAnswer('a') })
   
  b.innerHTML = questions[currentQuestionIndex].b
  b.addEventListener('click', () => { checkAnswer('b') })
  console.log("HEY THERE I WORK TOO")
  c.innerHTML = questions[currentQuestionIndex].c
  c.addEventListener('click', () => { checkAnswer('c') })

  d.innerHTML = questions[currentQuestionIndex].d
  d.addEventListener('click', () => { checkAnswer('d') })
} 
 
  //
displayCurrentQuestion()



//call display currentQuestion
function checkAnswer(userAnswer) {
  //compare user answer to current question right answer.
  if (document.querySelector('#userAnswer') === questions[currentQuestionIndex].q.rightAnswer){
  correctAnswerCount ++ ;  
  //increment correctAnswerCount if they are the same.
  currentQuestionIndex ++;
  //increment currentQuestionIndex by 1
  } else (document.querySelector('#userAnswer') !== questions[currentQuestionIndex].q.rightAnswer);{
   currentQuestionIndex ++;
   timer -10
     
   }
  setInterval(updateTimer, 4000);



  
}
checkAnswer()





 




