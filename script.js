const questions = [
  {
    text: "Welches Land hat die längste Küstenlinie der Welt?",
    answers: ["Kanada", "Russland", "Australien"],
    correct: "Kanada"
  },
  {
    text: "In welchem Jahr fiel die Berliner Mauer?",
    answers: ["1987", "1989", "1991"],
    correct: "1989"
  },
  {
    text: "Welche Währung hatte Italien vor dem Euro?",
    answers: ["Lira", "Peseta", "Drachme"],
    correct: "Lira"
  },
  {
    text: "Welcher Fluss fliesst durch Budapest?",
    answers: ["Donau", "Moldau", "Rhein"],
    correct: "Donau"
  },
  {
    text: "Welches Land hat die meisten Inseln der Welt?",
    answers: ["Schweden", "Indonesien", "Kanada"],
    correct: "Schweden"
  },
  {
    text: "Welche Stadt ist die Hauptstadt von Australien?",
    answers: ["Canberra", "Sydney", "Melbourne"],
    correct: "Canberra"
  },
  {
    text: "Welche Stadt war früher unter dem Namen Konstantinopel bekannt?",
    answers: ["Istanbul", "Athen", "Sofia"],
    correct: "Istanbul"
  },
  {
    text: "Welches Land hat als einziges eine nicht rechteckige Nationalflagge?",
    answers: ["Nepal", "Bhutan", "Sri Lanka"],
    correct: "Nepal"
  },
  {
    text: "Welche Stadt liegt am Bosporus?",
    answers: ["Istanbul", "Bukarest", "Belgrad"],
    correct: "Istanbul"
  },
  {
    text: "Welches Land hat mit Lesotho ein vollständig umschlossenes Land in seinem Inneren?",
    answers: ["Südafrika", "Namibia", "Botswana"],
    correct: "Südafrika"
  }
];

let currentQuestion = 0;
let score = 0;
let locked = false;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const scorePreview = document.getElementById("score-preview");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const resultKicker = document.getElementById("result-kicker");
const resultTitle = document.getElementById("result-title");
const resultCopy = document.getElementById("result-copy");
const code = document.getElementById("code");

document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("again-button").addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  locked = false;
  intro.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const item = questions[currentQuestion];

  locked = false;
  progress.textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;
  scorePreview.textContent = `${score} richtig`;
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
  question.textContent = item.text;
  feedback.textContent = "";
  answers.innerHTML = "";

  item.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(answer, button));
    answers.appendChild(button);
  });
}

function checkAnswer(answer, selectedButton) {
  if (locked) {
    return;
  }

  locked = true;
  const item = questions[currentQuestion];
  const isCorrect = answer === item.correct;

  if (isCorrect) {
    score += 1;
    selectedButton.classList.add("correct");
    feedback.textContent = "Richtig.";
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = `Nicht ganz. Richtig wäre: ${item.correct}.`;
    [...answers.children].forEach((button) => {
      if (button.textContent === item.correct) {
        button.classList.add("correct");
      }
    });
  }

  scorePreview.textContent = `${score} richtig`;

  window.setTimeout(() => {
    currentQuestion += 1;

    if (currentQuestion === questions.length) {
      showResult();
      return;
    }

    showQuestion();
  }, 1050);
}

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");
  progressBar.style.width = "100%";
  finalScore.textContent = String(score);

  if (score === questions.length) {
    resultKicker.textContent = "freigeschaltet";
    resultTitle.textContent = "Perfekte Runde";
    resultCopy.textContent = "10 von 10. Der Code gehört dir.";
    code.classList.remove("hidden");
    return;
  }

  resultKicker.textContent = "Resultat";
  resultTitle.textContent = "Deine Punktzahl";
  resultCopy.textContent = "Noch nicht ganz. Für den Code brauchst du die perfekte Runde.";
  code.classList.add("hidden");
}
