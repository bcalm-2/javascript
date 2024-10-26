const set = new Set();
set.add("1");
set.add("1");
set.add("1");
set.add("2");

set.forEach((value) => console.log(value));
console.log(set.has("2"));
console.log(set.has("5"));
