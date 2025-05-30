function startTest() {
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "block";
}

function checkAnswers() {
  const answers = {
    q1: "C",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "C",
    q6: "F",
    q7: "T",
    q8: "T"
  };

  let score = 0;
  let total = Object.keys(answers).length;
  let unanswered = 0;

  for (let key in answers) {
    let radios = document.getElementsByName(key);
    let answered = false;

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        answered = true;
        if (radios[i].value === answers[key]) {
          score++;
        }
        break;
      }
    }

    if (!answered) unanswered++;
  }

  let resultText = `Your Score: ${score} / ${total}<br>`;
  if (unanswered > 0) {
    resultText += `<span style="color:red">You have ${unanswered} unanswered question(s). Please complete them!</span>`;
  }

  document.getElementById("result").innerHTML = resultText;
  window.scrollTo(0, document.body.scrollHeight);
}
