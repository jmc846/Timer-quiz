// Global variables
var timeout = setTimeout( clearInterval);
var setInterval = 60000;
var secondsDisplay = document.querySelector("seconds");
var answerButton = document.createElement("button")
var seconds = Math.floor(( (1000 * 60)) / 1000);;
var secondsLeft = 60;
var BeginE1 = document.querySelector("#display");
var userAnswer = document.getElementById("userAnswer");
var questionShow2 = function(){}
var questionShow3 = function(){}
var questionShow4 = function(){}
var questionShow5 = function(){}
// var questionShow2 = function(){}
var scoreE1 = document.querySelector("#score");
var counter= document.getElementById("counter").innerHTML =  seconds + "seconds ";
window.debugVar = questions;
score = parseInt(userAnswer/rightAnswer)
var questions = [{
  "q1": "Mustang Shelby debuted in what Year?",
  a1: "1968,",
  b1: "1998,",
  c1: "1940,",
  d1: "1965,",
  rightAnswer: "1965",
  userAnswer: null,

},

{
  "q2": "Winston Churchill was a leader in what country ?",
  a2: "Germany",
  b2: "Britain",
  c2: "Russia",
  d2: "UAE",
  rightAnswer: "Britain",
  userAnswer: null,
},

{
  "q3": "Denmark Vesey was a Slave in what state ?",
  a3: "South Carolina",
  b3: "Texas",
  c3: "Tennesee",
  d3: "Bermuda",
  rightAnswer: "South Carolina",
  userAnswer: null,
},

{
  "q4": "Rev. Joseph Simmons is part on what legendary musical group?",
  a4: "Milli Vanilli",
  b4: "The Wu-tang",
  c4: "RUN DMC",
  d4: "Crush Groove",
  rightAnswer: "RUN DMC",
  userAnswer: null,
},

{
  "q5": "Andre Benjamin is part on what legendary musical group?",
  a5: "OutKast",
  b5: "The Backstreet boys",
  c5: "Hootie and the Blowfish",
  d5: "Nickelback",
  rightAnswer: "OutKast",
  userAnswer: null,
},

{
  "q6": "This 80's show featured a talking car?",
  a6: "Walker Texas Ranger",
  b6: "The Renegade",
  c6: "C.H.I.P.S.",
  d6: "Night Rider",
  rightAnswer: "Night Rider",
  userAnswer: null,
}];
// var choices = [{"c1": a,"1968": b,"1998": c,"1940": d,"1965":} ,{'c2': a,"Germany" : b, "Britain": c, "Russia": d, "UAE":,} { 'c3': a, "South Carolina",
// b, "Texas": c, "Tennesee": d, "Bermuda":},{ 'c4': a, "Milli Vanilli":b, "The Wu-tang":c, "RUN DMC": d, "Crush Groove":},{'c5': a, "OutKast": b, "The Backstreet boys":
// c, "Hootie and the Blowfish": d, "Nickelback":},{'c5': a, "Walker Texas Ranger": b, "The Renegade": c, "C.H.I.P.S.":d, "Night Rider":}];

var rightAnswer = ["1965","Britain","South Carolina","RUN DMC","OutKast","Night Rider",];

//  logic functions
Begin.addEventListener("click", function (event) {
  
  console.log("rollQuestions functions rolls after this")

  function rollQuestions() {};
    // console.log(questions);start question display

  // console.log(event);
   $("li").append(questions[i])
  for (var i = 0; i < questions.length; i++) {
     console.log(questions[i].q);

     $('li').append(questions[i].q1);
     $('li').append(questions[i].a1)
     $('li').append(questions[i].b1)
     $('li').append(questions[i].c1)
     $('li').append(questions[i].d1)

     userAnswer= addEventListener( "click", );

       $('li').append(questions[i].q2);
     $('li').append(questions[i].a2)
     $('li').append(questions[i].b2)
     $('li').append(questions[i].c2)
     $('li').append(questions[i].d2)

     userAnswer= addEventListener("click" ,);

     
     $('li').append(questions[i].q3);
     $('li').append(questions[i].a3)
     $('li').append(questions[i].b3)
     $('li').append(questions[i].c3)
     $('li').append(questions[i].d3)

    // var userAnswer = $('li').append(questions);
    // if (userAnswer !== rightAnswer) { 
    //   seconds --
    //   alert("sorry")
    // }
    // console.log(userAnswer);
    document.getElementById("question-container"),
 

  // };
  //  Compare answers
  function Compare() {
    if (userAnswer === rightAnswer === "right") {
      //  Increase score
      score++;
      alert("Correct!");


    }
    else {
      alert("Wrong!");
      --secondsLeft ; 15;
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
    document.getElementById("#counter").style.display = "block";
    document.getElementById("#begin").style.display = "none";
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
  }})

;





// })}