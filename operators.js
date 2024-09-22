//Arithmetic operators
let number1 = 10;
let number2 = 20;
console.log("number1 + number2 = ", number1 + number2);
console.log("number1 - number2 = ", number1 - number2);
console.log("number1 * number2 = ", number1 * number2);
console.log("number1 / number2 = ", number1 / number2);
console.log("number1 % number2 = ", number1 % number2);
console.log("number1 ** number2 = ", number1 ** number2);
console.log("number1++", number1++);
console.log("number2--", number2--);
console.log("--number2", --number2);
console.log("++number2", ++number2);

//Assignments operators
console.log("number1 += 10", (number1 += 10)); // number1 = number1 + 10
console.log("number1 -= 10", (number1 -= 10)); // number1 = number1 - 10
console.log("number1 -= 10", (number1 /= 10)); // number1 = number1 / 10
console.log("number1 -= 10", (number1 *= 10)); // number1 = number1 * 10

//Logical operators
// And operator =>
//  true && true = true, false && true = false,
//  true && false = false, false && false = false

// Or operator =>

//  true && true = true, false && true = true,
//  true && false = true, false && false = false

//Not operator =>
// !false = true
// !true = false

const truthyValue = true;
const falsyValue = false;
console.log("truthyValue && falsyValue", truthyValue && falsyValue);
console.log("truthyValue || falsyValue", truthyValue || falsyValue);
console.log("!truthyValue", !truthyValue);
console.log("!falsyValue", !falsyValue);

//conditional operators
console.log("number1 > number2", number1 > number2);
console.log("number1 < number2", number1 < number2);
console.log("number1 >= number2", number1 >= number2);
console.log("number1 <= number2", number1 <= number2);
console.log("number1 == number2", number1 == number2); //value check
console.log("number1 === number2", number1 === number2); //value and type check
