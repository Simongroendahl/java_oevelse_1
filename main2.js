//find tidspunkt
const tidsPunkt = new Date();
const hej = tidsPunkt.getHours();

console.log(tidsPunkt.getHours());

function hilsen() {
  if (hej < 5) {
    console.log("Godnat");
  } else if (hej < 10) {
    console.log("Godmorgen");
  } else if (hej < 18) {
    console.log("Goddag");
  } else {
    console.log("Godaften");
  }
}

hilsen(hej);
