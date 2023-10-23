let totalBill = prompt("quanto è il conto totale?");
let tips = prompt("qual è la percentuale di mancia?");
let totalBillConv = parseFloat(totalBill);
let tipsConv = parseFloat(tips);
let result = (totalBillConv * tipsConv) / 100;
alert("la mancia è di euro " + result);
