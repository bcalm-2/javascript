//map

const captialStateLookup = {
  UP: "Lucknow",
  Haryana: "chandigarh",
  MP: "Indoor",
};

const states = ["UP", "Haryana", "MP"];
const capitals = [];
//capital
for (let index = 0; index < states.length; index++) {
  const element = states[index];
  capitals.push(captialStateLookup[element]);
}
// console.log(capitals);
const capitals2 = states.map((element) => {
  return captialStateLookup[element];
});

// console.log(capitals2);

const filteredCaptials = ["a", "b", "c", "UP"].filter((element) => {
  return captialStateLookup[element];
});
console.log(filteredCaptials);

//reduce

const numbers = [1, 2, 3, 4, 5, 6, 5];

const sum = (number1, number2) => {
  return number1 + number2;
};

// array.reduce(function, initialValue)
const result = numbers.reduce(sum, 0);
// console.log(result);

const array2 = [1, "vikram", "singh", "address"];

const dummyfunction = (cont, elem) => {
  cont["id"] = elem;
  return cont;
};
const result2 = array2.reduce(dummyfunction, {});
// console.log(result2);

const lineItems = [
  { description: "Eggs (Dozen)", quantity: 1, price: 3 },
  { description: "Cheese", quantity: 0.5, price: 5 },
  { description: "Butter", quantity: 2, price: 6 },
];

const calculatePrice = (totalPrice, prod) => {
  //   console.log(totalPrice);
  //   console.log(prod);
  return totalPrice + prod.quantity * prod.price;
};

const bill = lineItems.reduce(calculatePrice, 10);
// console.log(bill);

const characters = [
  { name: "Jean-Luc Picard", age: 59 },
  { name: "Jean-Luc Picard", age: 569 },
  { name: "Jean-Luc Picard", age: 569 },
  { name: "Jean-Luc Picard", age: 59 },
  { name: "Jean-Luc Picard", age: 49 },
  { name: "Jean-Luc Picard", age: 59 },
  { name: "Will Riker", age: 29 },
  { name: "Deanna Troi", age: 29 },
];

characters.reduce((cont, ele) => {
  console.log(cont);
  if (cont[ele.age]) {
    cont[ele.age] += 1;
  } else {
    cont[ele.age] = 1;
  }
  return cont;
}, {});
