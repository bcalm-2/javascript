//map

const nameWithSernameLookup = {
  vikram: "singh",
  srashti: "dwivedi",
  muskaan: "singh",
  purnima: "yadav",
  aysa: "sinde",
};

const names = ["vikram", "srashti", "muskaan", "purnima", "aysa"];
const lastname = [];
//name
// for (let index = 0; index < states.length; index++) {
//   const element = states[index];
//   capitals.push(captialStateLookup[element]);

console.log(lastname);
const Name2 = names.map((element) => {
  return nameWithSernameLookup[element];
});

console.log(names);

const namesStartsWithVowel = [
  "vikram",
  "srashti",
  "muskaan",
  "purnima",
  "aysa",
].filter((element) => {
  return (
    element.startsWith("a") ||
    element.startsWith("e") ||
    element.startsWith("i") ||
    element.startsWith("o") ||
    element.startsWith("u")
  );
});

console.log(namesStartsWithVowel);


//Ram is going home.
//Righ
 