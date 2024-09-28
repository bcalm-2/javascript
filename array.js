const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < numbers.length; index += 3) {
//   const element = numbers[index];
//   console.log(element);
// }
/*
index, element
0, 3, 1
3, 6, 4
6, 9, 7
9, 12, 10
*/
numbers[12] = 12;
numbers[1] = "vikram";
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //   console.log(element);
}

//array methods
const a = [];
a.push(12);
a.push(13);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(15);
a.unshift(16);
console.log(a);
console.log([25, 2345, 2345, 2345].slice(1, 3));
console.log(a.includes(23));
console.log(a.length);
console.log(a.reverse());
console.log(a.sort());
