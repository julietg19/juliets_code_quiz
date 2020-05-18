// click start shows

//  timer runs

// first question shows

// user makes answer selection

// result page shows? or alert

// score changes

// next question shows

// user makes answer selection

//result alert

// score changes

//when time runs out, final score page shows

var question_index = 0;

var timer;

function start() {
  var timeleft = 90;

  timer = setInterval(function () {
    timeleft = timeleft - 1;

    if (timeleft <= 0) {
      finalscore();
    }

    document.getElementById("time").innerHTML = timeleft;
  }, 1000);

  showquestion(question_index);
}

function correct() {
  alert("correct!");

  question_index++;

  score++;

  if (questions.length <= question_index) {
    finalscore();
  } else {
    showquestion(question_index);
  }
}

function incorrect() {
  alert("incorrect!");
}

function finalscore() {
  myhtml = "Great job!!!<br> score:" + score;

  clearInterval(timer);

  document.getElementById("startscreen").innerHTML = myhtml;
}
