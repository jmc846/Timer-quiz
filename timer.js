
var setInterval = 60000;
var secondsDisplay = document.querySelector("seconds");
var answerButton = document.createElement("button")
var seconds = Math.floor(( (1000 * 60)) / 1000);;
var secondsLeft = 60;
var BeginE1 = document.querySelector("#display");
var scoreE1 = document.querySelector("#score");
var rightAnswer = ["1965","Britain","South Carolina","RUN DMC","OutKast","Night Rider",]
document.getElementById("counter").innerHTML =  seconds + "seconds ";
window.debugVar = questions;
// var score = parseInt(userAnswer/rightAnswer)
var questions = [{
  "q": "Mustang Shelby debuted in what Year?",
  a: "1968",
  b: "1998",
  c: "1940",
  d: "1965",
  rightAnswer: "1965",
  userAnswer: null,

},

{
  "q": "Winston Churchill was a leader in what country ?",
  a: "Germany",
  b: "Britain",
  c: "Russia",
  d: "UAE",
  rightAnswer: "Britain",
  userAnswer: null,
},

{
  "q": "Denmark Vesey was a Slave in what state ?",
  a: "South Carolina",
  b: "Texas",
  c: "Tennesee",
  d: "Bermuda",
  rightAnswer: "South Carolina",
  userAnswer: null,
},

{
  "q": "Rev. Joseph Simmons is part on what legendary musical group?",
  a: "Milli Vanilli",
  b: "The Wu-tang",
  c: "RUN DMC",
  d: "Crush Groove",
  rightAnswer: "RUN DMC",
  userAnswer: null,
},

{
  "q": "Andre Benjamin is part on what legendary musical group?",
  a: "OutKast",
  b: "The Backstreet boys",
  c: "Hootie and the Blowfish",
  d: "Nickelback",
  rightAnswer: "OutKast",
  userAnswer: null,
},

{
  "q": "This 80's show featured a talking car?",
  a: "Walker Texas Ranger",
  b: "The Renegade",
  c: "C.H.I.P.S.",
  d: "Night Rider",
  rightAnswer: "Night Rider",
  userAnswer: null,
}];

Begin.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("This Works")

  function rollQuestions() {
    // console.log(questions);start question display
};
  console.log(event);
  $("#question-container").text(questions.i)
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].q);
    var userAnswer = prompt(questions[i].q);
    if (userAnswer !== rightAnswer) { 
      seconds --
      alert("sorry")
    }
    console.log(userAnswer);
    document.getElementById("question-container")


  // };
  //  Compare answers
  function Compare() {
    if (userAnswer === rightAnswer[i] === "right") {
      //  Increase score
      score++;
      alert("Correct!");


    }
    else {
      alert("Wrong!");
      secondsLeft -= 15;
    }


    // // Show total at end
    alert("You got " + score + "/" + questions.length);
    function score() { }
    // console.log(questions[questionIndex]);

    // questions.textContent = question;
    function display() {
      secondsDisplay = (totalSeconds - secondsElapsed)
      if (userAnswer !== answer) {
        totalSeconds - 10000
      }
    }
  };

  //  This function retrieves the values from the html input elements; 

  function gameOver() {
    secondsLeft--;
    secondsElapsed.textContent = secondsLeft + " seconds left until Quiz over";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  } 60000;
// This function does 2 things. displays the time and checks to see if time is up.
  function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    secondsDisplay.textContent = getFormattedSeconds();

    // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) {
      if (status === "Keep going") {
        alert("Quiz Master!");
      } else {
        alert("AWWW so sorry, try again!");
      }

      stopTimer();
    }
  }

  // This function is where the "time" aspect of the timer runs
  // Notice no settings are changed other than to increment the secondsElapsed var
  function startTimer() {
    document.getElementById("").style.display = "block";
    document.getElementById("begin").style.display = "none";
    // function to display function, 
      setTime(60000);
  }
  // We only want to start the timer if totalSeconds is > 0
  if (seconds > 60) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
      seconds--;

      // So renderTime() is called here once every second.
      renderTime();
    }, 60000);
  } else
    alert("You lost time.")
  };

})