// test-higher-order.js

const {
  myForEach,
  myMap,
  myFilter,
  myReduce,
} = require('./utils/higher-order');

// ---------------------
// myForEach piemērs
// ---------------------
console.log("=== myForEach ===");

myForEach([10, 20, 30], (value, index, array) => {
  console.log(
    "vērtība:", value,
    "| indekss:", index,
    "| masīvs:", array
  );
});

// ---------------------
// myMap piemērs
// ---------------------
console.log("\n=== myMap ===");

const doubled = myMap([10, 20, 30], value => {
  return value * 2;
});

console.log("rezultāts:", doubled);

// ---------------------
// myFilter piemērs
// ---------------------
console.log("\n=== myFilter ===");

const filtered = myFilter([10, 20, 30], value => {
  return value > 15;
});

console.log("rezultāts:", filtered);

// ---------------------
// myReduce piemērs
// ---------------------
console.log("\n=== myReduce ===");

const sum = myReduce([10, 20, 30], (a, b) => {
  return a + b;
});

console.log("rezultāts:", sum);
