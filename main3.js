// tilfældig tal generator

const submitKnap = document.querySelector("#buttonKnap");
const tryButton = document.querySelector("#knap");

let antalForsoeg = 0;
//let samletForsoeg = forsoegsTaeller;

window.addEventListener("load", gemKnap);

const tilfaeldigtTal = Math.floor(Math.random() * 10) + 1;
console.log(tilfaeldigtTal);

function gemKnap() {
  tryButton.classList.add("hide");
  submitKnap.addEventListener("click", talGaetter);
  //submitKnap.addEventListener("click", forsoegsTaeller);
}

function talGaetter() {
  const gaet = document.querySelector("#tal").value;
  let antalGaet = document.querySelector("#antalGaet").textContent;
  antalForsoeg++;

  console.log("talGætter");
  if (gaet == tilfaeldigtTal) {
    console.log("Yeees! " + gaet + " var helt perfekt! Du brugte " + antalForsoeg + " forsøg.");
  } else if (tilfaeldigtTal > gaet) {
    console.log(gaet + " var liiidt for lavt. Prøv igen!");
    antalGaet.textContent(antalForsoeg);
    tryButton.classList.remove("hide");
  } else {
    console.log(gaet + " var alt for højt. En gang til!");
    antalGaet.textContent(antalForsoeg);
    tryButton.classList.remove("hide");
  }

  console.log(antalForsoeg);
  tryButton.classList.remove("hide");
  tryButton.addEventListener("click", restartGame);
  tryButton.addEventListener("click", gemKnap);
}

//function forsoegsTaeller() {
//console.log("Forsøgstæller");
//if (tilfaeldigtTal < gaet) {
//antalForsoeg++;
//} else if (tilfaeldigtTal > gaet) {
//antalForsoeg++;
//}
//}

function restartGame() {
  console.log("Restart");
  tryButton.classList.add("hide");
}
