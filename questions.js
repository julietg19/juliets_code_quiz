var questions = [
  {
    title: "Which of the following is an example of a data type in Javascript?",
    choices: ["a string", "a cloud", "Files"],
    answer: 0,
  },

  {
    title: "When was Javascript invented?",
    choices: ["1977", "1995", "2005"],
    answer: 1,
  },

  {
    title: "How long did it take to invent Javascript?",
    choices: ["7 years", "6 weeks", "10 days"],
    answer: 2,
  },
];

function showquestion(questionnumber) {
  var myhtml = "<h2>" + questions[questionnumber]["title"] + "</h2>\n";

  //   document.getElementById("startscreen").innerHTML = myhtml;

  var mychoices = questions[questionnumber]["choices"];

  var answer = questions[questionnumber]["answer"];

  for (let i = 0; i < mychoices.length; i++) {
    myhtml += "<button onClick='";
    if (i == answer) {
      myhtml += "correct()";
    } else {
      myhtml += "incorrect()";
    }

    myhtml += "'>" + mychoices[i] + "</button><br>";
  }

  myhtml = myhtml + "<h3>score:" + score + "</h3>";

  var myanswers = questions[questionnumber]["answer"];

  document.getElementById("startscreen").innerHTML = myhtml;
}

var score = 0;
