// setInterval(timeIt, 30000);{};
var secondsDisplay = document.getElementById("seconds");
var totalSeconds = 0;
var secondsLeft =  60;
// var score =  ;
var questions = [{
  question: "Mustang Shelby debuted in what Year?",
  choices:["1968",
   "1998",
   "1940",
   "1965"],
  answer: "d"
},

  { question: "Winston Churchill was a leader in what country ?",
  choices: [ "Germany",
   "Britain",
   "Russia",
   "UAE"],
  answer: "b"
},

  { question: "Denmark Vesey was a Slave in what state ?",
  choices: ["South Carolina",
  "Texas",
   "Tennesee",
   "Bermuda"],
  answer: "a"
},

  { question: "Rev. Joseph Simmons is part on what legendary musical group?",
 choices: [ "Milli Vanilli",
   "The Wu-tang",
  "RUN DMC",
   "Crush Groove"],
  answer: "c"
},

 { question: "Andre Benjamin is part on what legendary musical group?",
 choices: [ "OutKast",
   "The Backstreet boys",
   "Hootie and the Blowfish",
   "Nickelback"],
  answer: "a"
},

  {question: "This 80's show featured a talking car?",
  choices: [ "Walker Texas Ranger",
   "The Renegade",
   "C.H.I.P.S.",
   "Night Rider"],
  answer: "c"
}];


var BeginEl = document.querySelector("#display");
// var scoreEl = document.querySelector("#score");
// // These two functions the begin button and timer functions 
// // WHEN I click the start button
// // BeginEl.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   console.log("This Works")
// // });
//   // console.log(event);
//   // We start the game with a score of 0.
  var score = 0;

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {

   var title= document.getElementById("question-title")
   var answers= document.getElementById("choices")
    var answerButton=document.createElement("button")

   for (var i =0; i< questions[i].choices.length; i++){
     console.log(choices[i])

    //  var userAnswer= addEventListener.("click",);   


  }
    // Display current question to user and ask OK/Cancel
    // var answer = secondsLeft(questions[i].question);

  //   // Compare answers
  //   // if (answer === "correct" && questions[i].a === "right"){
  //   //   // Increase score
  //   //   score++;
  //   //   alert("Correct!");
  //   // }
  //   // else {
  //   //   alert("Wrong!");
  //     secondsLeft-= 15;
  //   }
  // }

  // // Show total at end
  // alert("You got " + score + "/" + questions.length)



function display() {
  secondsDisplay = (totalSeconds - secondsElapsed)
  if (userAnswer !== answer) {
    totalSeconds - 10000
  }
}
function rollQuestions (){
questions[i].length
};


if (userAnswer == ""){
  questions[i]++

}
//  This function retrieves the values from the html input elements; 

function gameOver(){
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds left until Quiz over";

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
    sendMessage();
  }

}} 60000;
$("begin_btn")
function sendMessage() {
  timeEl.textContent = "YOU LOSE"

}



  // clearInterval(interval);
  // totalSeconds =  


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
    setTime(60000);

    // We only want to start the timer if totalSeconds is > 0
    if (totalSeconds > 0) {
      /* The "interval" variable here using "setInterval()" begins the recurring increment of the
         secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function () {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        renderTime();
      }, 10000);
    } else {
      alert("Seconds left must be greater than 0.")
    }
  }
;

// localStorage.setItem("miguel", JSON.stringify({ "time-elapsed": "score"}))