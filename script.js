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

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const progress = document.getElementById("progress");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");

document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("again-button").addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  intro.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const item = questions[currentQuestion];

  progress.textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;
  question.textContent = item.text;
  feedback.textContent = "";
  answers.innerHTML = "";

  item.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(answer));
    answers.appendChild(button);
  });
}

function checkAnswer(answer) {
  const item = questions[currentQuestion];

  if (answer !== item.correct) {
    feedback.textContent = "Nope. Kurz sammeln und nochmal.";
    return;
  }

  currentQuestion += 1;

  if (currentQuestion === questions.length) {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    return;
  }

  showQuestion();
}
