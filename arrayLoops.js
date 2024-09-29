const numbers = [1, 2, 3, 4];

//ForEach

numbers.forEach((number) => {
  console.log(number);
});

numbers.forEach((number, index) => {
  console.log(number, index);
});

//For in -objects

for (const number in numbers) {
  console.log(number);
}

//for of - arrays
for (const element of numbers) {
  console.log(element);
}
