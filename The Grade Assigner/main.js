let totalScore = prompt("quanto è il punteggio totale?");
if (totalScore > 90) {
  alert("Hai preso A");
}
if (totalScore > 80 && totalScore < 90) {
  alert("Hai preso B");
}
if (totalScore > 70 && totalScore < 80) {
  alert("Hai preso C");
}
if (totalScore > 60 && totalScore < 70) {
  alert("Hai preso D");
} else {
  alert("hai preso F");
}
