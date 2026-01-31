let score = 0;
const questions = [
  "Welches dieser Wörter beschreibt Tobi am besten?",
  "Was kann Tobi überhaupt?",
];
const choicesArray = [
  ["nett", "hübsch", "lieb", "aggressiv"],
  ["Billard", "Bouldern", "gar nix", "WoW"],
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
    document.getElementById("result").innerHTML =
      "Alles nur Spaß Tobi, hab dich lieb!";
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
