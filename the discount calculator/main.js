let originalPrice = prompt("quanto era il prezzo di questo oggetto?");
let discountPerc = prompt("qual è la percentuale di sconto?");
let originalPriceConv = parseFloat(originalPrice);
let discountPercConv = parseFloat(discountPerc);
let discountPrice = (originalPriceConv * (100 - discountPercConv)) / 100;
let discountValue = originalPriceConv - discountPrice;
if (discountPerc > 50) alert(discountPrice + " è un ottimo prezzo");
