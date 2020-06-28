
var counter = 0
var startTimer = select('#timer');
timer.html('0')

function timeIt(){
counter ++;
timer.html(counter);

}
setInterval(timeIt, 30000);
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");
var workMinutesInput = document.getElementById("work-minutes");
var restMinutesInput = document.getElementById("rest-minutes");
var inputs = document.getElementById(".inputs")

var totalSeconds = 0;
var secondsElapsed = 0;
var score
var questions

// These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes() {
  //
  var secondsLeft = totalSeconds - secondsElapsed;

  var minutesLeft = Math.floor(secondsLeft / 60);

  var formattedMinutes;

  if (minutesLeft < 10) {
    formattedMinutes = "0" + minutesLeft;
  } else {
    formattedMinutes = minutesLeft;
  }

  return formattedMinutes;
}

function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

/* This function retrieves the values from the html input elements; Sort of
getting run in the background, it sets the totalSeconds variable which
is used in getFormattedMinutes/Seconds() and the renderTime() function.
It essentially resets our timer */
function setTime() {
  var minutes;

  if (status === "Working") {
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim();
  }

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

// This function does 2 things. displays the time and checks to see if time is up.
function renderTime() {
  // When renderTime is called it sets the textContent for the timer html...
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

  // ..and then checks to see if the time has run out
  if (secondsElapsed >= totalSeconds) {
    if (status === "Working") {
      alert("Time for a break!");
    } else {
      alert("Time to get back to work!");
    }

    stopTimer();
  }
}

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
function startTimer() {
  setTime();

  // We only want to start the timer if totalSeconds is > 0
  if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
      secondsElapsed++;

      // So renderTime() is called here once every second.
      renderTime();
    }, 1000);
  } else {
    alert("Minutes of work/rest must be greater than 0.")
  }
  var BeginEl = document.querySelector("#Begin");
  var scoreEl = document.querySelector("#score");
  BeginEl.addEventListener('click', startTimer);

  // The array of questions for our quiz game.
  var questions = [
    {
      prompt: "Mustang Shelby debuted in what Year?",
      "a": "1968"
     "b": "1998"
     "c": "1940"
     "d": "1965"
     correct: "d"

     prompt: "Winston Churchill was a leader in what country ?",
      "a": "Germany"
     "b": "Britian"
     "c": "Russia"
     "d": "UAE"
     correct: "b",

      prompt: "Denmark Vesey was a Slave in what state ?",
      "a": "South Carolina"
     "b": "Texas"
     "c": "Tennesee"
     "d": "Bermuda"
    correct: "a"

    prompt: "Rev. Joseph Simmons is part on what legendary musical group?",
      `       `"a": "Milli Vanilli"
               "b": "The Wu-tang"
               "c": "RUN DMC"
               "d": "Crush Groove"
       correct: "c"

  prompt: "Andre Benjamin is part on what legendary musical group?",
               "a": "OutKast"
               "b": "The Backstreet boys"
               "c": "Hootie and the Blowfish"
               "d": "Nickelback"
       correct: "a"

  prompt: "This 80's show featured a talking car?",
    "a": "Walker Texas Ranger"
               "b": "The Renegade"
               "c": "C.H.I.P.S."
               "d": "Night Rider"
       "correct": "c"

  ]
}
WHEN I click the start button
BeginEl.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event);
  // We start the game with a score of 0.
  var score = 0;

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = prompt(questions[i].prompt);

    // Compare answers
    if ((answer === "correct" && questions[i].a === "right") ||
      (answer === "!correct" && questions[i].a === "Wrong")) {
      // Increase score
      score++;
      alert("Correct!");
    }
    else {
      alert("Wrong!");
      timer --;
    }
  }

  // Show total at end
  alert("You got " + score + "/" + questions.length);
