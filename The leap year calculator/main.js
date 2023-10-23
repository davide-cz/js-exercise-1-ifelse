let leapYear = prompt("Scrivi qui un anno");
let leapYearConv = parseFloat(leapYear);
if (leapYear % 2 === 0 && leapYear % 4 === 0) {
  if (leapYear % 2 === 1 || leapYear % 100 === 0) {
  }
  if (leapYear % 2 === 0 || leapYear % 400 === 0) {
    alert("è un anno bisestile");
  }
} else {
  alert("non è un anno bisestile");
}
