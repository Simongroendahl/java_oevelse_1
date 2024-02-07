const colaKnap = document.querySelector("#cola");
const faxeKnap = document.querySelector("#faxe");
const oelKnap = document.querySelector("#oel");
const snapsKnap = document.querySelector("#snaps");

colaKnap.addEventListener("click", alkoholFinder);
faxeKnap.addEventListener("click", alkoholFinder);
oelKnap.addEventListener("click", alkoholFinder);
snapsKnap.addEventListener("click", alkoholFinder);

function alkoholFinder() {
  if (this == colaKnap) {
    console.log("Alkoholfri");
  } else if (this == faxeKnap) {
    console.log("Alkoholfri");
  } else {
    console.log("Indeholder alkohol");
  }
}
