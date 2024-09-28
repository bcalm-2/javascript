const info = {
  firstName: "Vikram",
  secondName: "Singh",
  number: "number",
};

console.log("this is string");
const stringConcat = "My name is " + info.firstName + " " + info.secondName;
console.log(stringConcat);
const stringInterpolation = `My name is ${info.firstName} ${info.secondName}`;
console.log(stringInterpolation);

//String methods
const variable = "vikram";
console.log(variable.charAt(4));
console.log(variable.endsWith("ram"));
console.log(variable.startsWith("ram"));
console.log(variable.includes("r"));
console.log(variable.length);
console.log("7800549433".replace("00", "*"));
console.log("7800549433".slice(2, 4));
console.log("a:b:c".split(":"));
console.log("abc".split("b"));
console.log("abc");
