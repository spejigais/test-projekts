// START

// INPUT sum
let sum = Number(process.argv[2]);

// IF sum > 10000 THEN
if (sum > 10000) {
  // OUTPUT "Amount too large"
  console.log("Amount too large");
  // END
  process.exit(0);
}
// Vienkāršota validācija apvienojot "Invalid amout" un "Amount cannot be dispensed"
if (sum <= 0 || sum % 5 !== 0) {
  console.log("Invalid or unsupported amount");
  process.exit(0);
}

// n50 = sum DIV 50
let n50 = Math.floor(sum / 50); // .floor noapaļo skaitli uz leju līdz tuvākajam vesalajam skaitlim
// sum = sum MOD 50
sum = sum % 50;

// n20 = sum DIV 20
let n20 = Math.floor(sum / 20);
// sum = sum MOD 20
sum = sum % 20;

// n10 = sum DIV 10
let n10 = Math.floor(sum / 10);
// sum = sum MOD 10
sum = sum % 10;

// n5 = sum DIV 5
let n5 = Math.floor(sum / 5);
// sum = sum MOD 5
sum = sum % 5;

// OUTPUT "50 EUR:", n50
console.log("50 EUR:", n50);

// OUTPUT "20 EUR:", n20
console.log("20 EUR:", n20);

// OUTPUT "10 EUR:", n10
console.log("10 EUR:", n10);

// OUTPUT "5 EUR:", n5
console.log("5 EUR:", n5);

// END