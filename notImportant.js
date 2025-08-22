// Mahsulov nomi - ?
// Mahsulot miqdori - ?
// Mahsulot narxi - ?
// yana Mahsulot qo'shasizmi?

const products = []; 

function getInfo() {
  const product = {};

  const productName = prompt("Mahsulot nomi?");
  if (!productName || productName.trim().length === 0) {
    console.log("To'g'ri nom kiriting!");
    return; 
  }
  product.name = productName;

  const productWeight = +prompt("Mahsulot miqdori?");
  if (isNaN(productWeight) || productWeight <= 0) {
    console.log("To'g'ri miqdorini kiriting!");
    return;
  }
  product.weight = productWeight;

  const productPrice = +prompt("Mahsulot narxi?");
  if (isNaN(productPrice) || productPrice <= 0) {
    console.log("To'g'ri narxini kiriting!");
    return;
  }
  product.price = productPrice;

  products.push(product); 

  const confirmation = confirm("Yana mahsulot qo'shishni xohlaysizmi?");
  if (confirmation) {
    getInfo(); 
  } else {
    totalPrice();
}

function productCalk(callback) {
  alert(`Assalomu alaykum! Bizning shopimizga hush kelibsiz :)`);
  const userName = prompt("Ismingiz?");
  const confirmation = confirm(`${userName}, siz mahsulot olishni xohlaysizmi?`);
  if (confirmation) {
    callback(); 
  } else {
    alert("Unda nima qilib yuripsan bu yerda :(!");
  }
}

function totalPrice() {
  let sum = 0;
  console.log("Siz olgan mahsulotlar ro'yxati:");
  for (let product of products) {
    console.log(`- ${product.name} | Miqdori: ${product.weight} | Narxi: ${product.price}`);
    sum += product.price * product.weight;
  }
  console.log(`Umumiy to'lov: ${sum} so'm`);
  alert(`Umumiy to'lov: ${sum} so'm`);
}
}
productCalk(getInfo);
