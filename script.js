const questions = [
  {
    text: "Wie heisst die Person, für die diese Seite gemacht wurde?",
    answers: ["Nicole Sterki", "Nadine Stark", "Nora Steiner"],
    correct: "Nicole Sterki"
  },
  {
    text: "Welche Domain passt hier am besten?",
    answers: ["nsterki.ch", "irgendwas.ch", "testseite.ch"],
    correct: "nsterki.ch"
  },
  {
    text: "Was braucht man, um am Ende weiterzukommen?",
    answers: ["Den geheimen Code", "Ein Passwort von Google", "Eine Rechnung"],
    correct: "Den geheimen Code"
  },
  {
    text: "Welche Zahl taucht heute nicht zufällig auf?",
    answers: ["021", "404", "999"],
    correct: "021"
  },
  {
    text: "Wer darf den Code jetzt sehen?",
    answers: ["Nicole", "Alle ausser Nicole", "Niemand"],
    correct: "Nicole"
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
    feedback.textContent = "Fast. Probier es nochmal, Nicole.";
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
