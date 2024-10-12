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
console.log(capitals);
const capitals2 = states.map((element) => {
  return captialStateLookup[element];
});

console.log(capitals2);

const filteredCaptials = ["a", "b", "c", "UP"].filter((element) => {
  if (captialStateLookup[element] === undefined) {
    return false;
  }
  return true;
});
console.log(filteredCaptials);
