let stud1 = prompt("che voto ha preso studente1?");
let stud2 = prompt("che voto ha preso studente2?");
let stud3 = prompt("che voto ha preso studente3?");
let stud1voto = parseFloat(stud1);
let stud2voto = parseFloat(stud2);
let stud3voto = parseFloat(stud3);
let calc = stud1voto + stud2voto + stud3voto;
let result = calc / 3;
alert("la media è " + result);
