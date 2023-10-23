let userWeight = prompt("Qual è il tuo peso in Kg?");
let userHeight = prompt("Qual è la tua altezza in metri?");
let userHeightConv = parseFloat(userHeight);
let userWeightConv = parseFloat(userWeight);
let userBmi = userWeightConv / (userHeightConv ^ 2);

if (userBmi < 18.5) {
  alert("sei sottopeso");
}
if (userBmi > 25) {
  alert(userBmi + "sei sovrappeso");
} else {
  alert(userBmi + "sei normopeso");
}
