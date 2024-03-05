let tests = [];
let list = document.querySelector(".list");
let modal = document.querySelector(".modal");
let natija = document.querySelector(".natija");
let togriJavob = 0;
fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  .then((res) => res.json())
  .then((res) => {
    let { results } = res;
    results.forEach((test, index) => {
      let variants = [test.correct_answer, ...test.incorrect_answers];
      let str = "";
      variants.forEach((variant) => {
        str += `
            <label>
                <input onclick="ans('${test.correct_answer}', '${variant}')" type="radio" name="question${index}" > ${variant}
            </label>
        `;
      });
      list.innerHTML += `
        <div class="test">
            <div class="question">${index + 1}) ${test.question}</div>
            ${str}
        </div>
        
      `;
    });
  });
function answers() {
  modal.classList.add("active");
  natija.innerHTML = `${togriJavob}/10`
}
function closee() {
  modal.classList.toggle("active");
}
function ans(a, b) {
  a == b ? togriJavob++ : togriJavob;
}

