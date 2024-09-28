let number1 = Number.parseInt(prompt("Enter number 1"));
let number2 = Number.parseInt(prompt("Enter number 2"));
let operation = prompt("enter operation name...");
function sum(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function mul(number1, number2) {
  return number1 * number2;
}
function div(number1, number2) {
  return number1 / number2;
}

if (operation === "sum" || operation === "+" || operation === "add") {
  console.log(sum(number1, number2));
} else if (operation === "sub" || operation === "-" || operation === "mins") {
  console.log(sub(number1, number2));
} else if (operation === "mul") {
  console.log(mul(number1, number2));
} else if (operation === "div") {
  console.log(div(number1, number2));
} else {
  console.log("Operations Not Supported");
}
