const quizData = [
  {
    question: "When was  first public release of JavaScript ",
    a: "1990",
    b: "1998",
    c: "1995",
    d: "2000",
    correct: "c",
  },
  {
    question: "Java Programming Language was developed by ",
    a: "Sun Microsystems",
    b: "Google",
    c: "Oracle",
    d: "Java team",
    correct: "a",
  },
  {
    question: "Which Language is called as the mother of all programming languages ",
    a: "C",
    b: "Java",
    c: "C++",
    d: "Assembly",
    correct: "C",
  },
  {
    question: "What am I ",
    a: "A Fool",
    b: "an idiot",
    c: "nerd",
    d: "Scientist",
    correct: "a",
  },
  {
    question: "Which is the most used programming language in 2021 ",
    a: "Java",
    b: "JavaScript",
    c: "HTML",
    d: "English",
    correct: "b",
  },
  {
    question: "What does HTML stands for",
    a: "Hypertext Markup Language",
    b: "High Master Language",
    c: "Highly Moderated language",
    d: "Just a Language",
    correct: "a",
  },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sunbmitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

sunbmitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You  answered correctly at ${score}/${quizData.length} questions<h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});