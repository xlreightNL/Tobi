let score = 0;
const questions = [
  "Welches dieser Wörter beschreibt Lars am besten?",
  "Was kann Lars überhaupt?",
];
const choicesArray = [
  ["nett", "hübsch", "lieb", "aggressiv"],
  ["Valorant", "Legion TD", "gar nix", "WoW"],
];
const correctAnswers = ["aggressiv", "gar nix"];
let currentQuestionIndex = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").innerHTML =
      questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    document.getElementById("credits").innerHTML = "Er ist eine echte Pappnase!";
    document.getElementById("result").innerHTML =
      "Alles nur Spaß Lars, :op";
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}
function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
    currentQuestionIndex++;
    displayQuestion();
  } else {
    document.getElementById("result").innerHTML = "Falsch! Versuch es nochmal.";
  }
  displayQuestion();
}

displayQuestion();
