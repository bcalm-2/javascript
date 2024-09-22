//if, if else, if elseif... else, switch, ternary

const age = 10;
if (age > 18) {
  console.log("you can get full licence");
} else if (age > 16) {
  console.log("you can get scooty license");
} else {
  console.log("you can play with toy car");
}

const result =
  age > 18 ? "you are eligible to vote" : "you are not eligible to vote";

console.log(result);

const letter = prompt("Enter the letter");

switch (letter) {
  case "a":
    console.log("letter is vowel");
    break;
  case "e":
    console.log("letter is vowel");
    break;
  case "i":
    console.log("letter is vowel");
    break;
  case "o":
    console.log("letter is vowel");
    break;
  case "u":
    console.log("letter is vowel");
    break;
  default:
    console.log("letter is consonant");
    break;
}

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("letter is vowel");
    break;
  default:
    console.log("letter is consonant");
    break;
}

