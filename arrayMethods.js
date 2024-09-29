const numbers = [1, 2, 3, 4];

function mapperFunction(element) {
  console.log("element is " + element);
  return element * 5;
}

function isEven(element) {
  return element % 2 === 0;
}

const result = numbers.map(mapperFunction);
const filterResult = numbers.filter(isEven);
console.log(result);
console.log(filterResultt);
//Map
//Filter
//Reduce
