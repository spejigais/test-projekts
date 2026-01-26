// calculator.js
// Kalkulators ar template literals visai izvadei

// ---------------------
// 1) Nolasa argumentus
// ---------------------
const a = Number(process.argv[2]);
const operator = process.argv[3];
const b = Number(process.argv[4]);

// ---------------------
// 2) Validācija
// ---------------------
if (isNaN(a) || isNaN(b)) {
  console.log(`Kļūda: pirmajam un otrajam argumentam jābūt skaitļiem.`);
  process.exit(1);
}

// ---------------------
// 3) Aprēķins
// ---------------------
let result;

if (operator === "+") {
  result = a + b;

} else if (operator === "-") {
  result = a - b;

} else if (operator === "*") {
  result = a * b;

} else if (operator === "/") {

  if (b === 0) {
    console.log(`Kļūda: dalīšana ar nulli nav atļauta.`);
    process.exit(1);
  }

  result = a / b;

} else if (operator === "%") {

  if (b === 0) {
    console.log(`Kļūda: atlikumu ar nulli aprēķināt nevar.`);
    process.exit(1);
  }

  result = a % b;

} else {
  console.log(`Kļūda: neatbalstīts operators "${operator}". Lieto +, -, *, / vai %.`);
  process.exit(1);
}

// ---------------------
// 4) Rezultāta izvade
// ---------------------
console.log(`Rezultāts: ${a} ${operator} ${b} = ${result}`);
