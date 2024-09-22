const number = Number.parseInt(prompt("enter the number..."));


for (let index = 0; index < number; index++) {
  console.log(index);
}

const info = {
    firstName: "vikram",
    secondName: "singh"
}

for (const element in info) {
    console.log(element)
}
for (const element of [1,2,3,4]) {
    console.log(element)
}

let number2 = Number.parseInt(prompt("enter number.."))
while (number2 < 10) {
    console.log(number2++)
}

let number3 = Number.parseInt(prompt("enter number...")) // 16
do {
    console.log(++number3)
} while (number3 < 23);
