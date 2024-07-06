let sociologicalQuizData = [
  {
    question:
      "The term  'sociology' was coined in 1838 by one of these Scholars  ?",
    options: [
      " Karl Marx",
      " Emile Durkheim",
      " Max Weber",
      " Charles Darwin",
      " Auguste Comte",
      " Abraham Lincoln",
    ],
    correctAnswer: " Auguste Comte",
  },
  {
    question:
      "The feeling of disorientation when encountering a new culture. Is called what ?",
    options: [
      " Cultural Change.",
      " Cultural Shock.",
      " Cultural Relativism .",
      " Xenocentric.",
    ],
    correctAnswer: " Cultural Shock.",
  },
  {
    question:
      "Which sociological perspective focuses on how individuals interact and form symbolic meanings?",
    options: [
      " Functionalism",
      " Conflict Theory",
      " Symbolic Interactionism",
      " Feminist Theory",
    ],
    correctAnswer: " Symbolic Interactionism",
  },
  {
    question: "What is the 'Hawthorne effect' in sociology?",
    options: [
      " The impact of social media on society.",
      " A type of social experiment.",
      " The alteration of human behavior when individuals are aware they are being observed.",
      " A form of social inequality.",
    ],
    correctAnswer:
      " The alteration of human behavior when individuals are aware they are being observed.",
  },
];

let dataView = document.querySelector(".data-view");

function quizBank() {
  let isCorrect = 20;
  let isWrong = 0;
  let result = 0;

  let quizArray = sociologicalQuizData.map((quiz, index) => {
    return `<div class="row">
    <div class="left col-6 shadow my-2 py-3">
      <p class="question "> question ${index + 1}: ${quiz.question} </p>
      <select name="" id="select-item" class="w-100 ">
        <option value="" select-disabled>Choose answer</option>
        ${quiz.options.map((option) => {
          return `<option value="${option}" > ${option}</option>`;
        })}
      </select>
    </div>
    <div class="right col-6  shadow my-2">
    <p class="selected ">Selected answer: </p>
    <p class = "answer">Correct answer: </p>
      <p class = "status">Status: </p>

    </div>
  </div>`;
  });

  dataView.innerHTML = quizArray.join(" ");

  let selectElement = document.querySelectorAll("select");

  selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
      let selectValue = event.target.value;
      document.querySelectorAll(".selected")[
        index
      ].innerHTML = `Selected answer:  ${selectValue}`;
      document.querySelectorAll(".answer")[
        index
      ].innerHTML = `Correct answer: ${sociologicalQuizData[index].correctAnswer}`;

      if (sociologicalQuizData[index].correctAnswer === selectValue) {
        document.querySelectorAll(".status")[
          index
        ].innerHTML = `Status: Correct`;
        result += isCorrect;
        document.querySelector(".points").innerHTML = `${result}/80`;
        console.log(result);
      } else {
        document.querySelectorAll(".status")[index].innerHTML = `Status: wrong`;
        result -= isC;
        document.querySelector(".points").innerHTML = `${result}/80`;
        console.log(result);
      }
    });
  });
}

quizBank();
