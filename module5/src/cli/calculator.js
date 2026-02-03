// calculator.js
// Kalkulators ar atsevišķām funkcijām katrai atbildībai

// ---------------------
// Operāciju funkcijas
// ---------------------
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

// ---------------------
// Galvenā aprēķina funkcija
// ---------------------
function calculate(a, operator, b) { 
  switch (operator) {     //Izvēlas darbību pēc operatora veida.
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulo(a, b);
    default:
      return undefined;
  }
}

// ---------------------
// Validācijas funkcija
// ---------------------
function validate(a, operator, b) {
  if (isNaN(a) || isNaN(b)) {
    return `Kļūda: pirmajam un otrajam argumentam jābūt skaitļiem.`;
  }

  const allowedOperators = ["+", "-", "*", "/", "%"];
  if (!allowedOperators.includes(operator)) {
    return `Kļūda: neatbalstīts operators "${operator}". Lieto +, -, *, / vai %.`;
  }

  if ((operator === "/" || operator === "%") && b === 0) {
    return `Kļūda: dalīšana vai atlikums ar nulli nav atļauts.`;
  }

  return null;
}

// ---------------------
// Rezultāta formatēšana
// ---------------------
function formatResult(a, operator, b, result) {
  return `Rezultāts: ${a} ${operator} ${b} = ${result}`;
}

// ---------------------
// Programmas sākums
// ---------------------
// Ja palaiž caur index.js: node index.js calculator 2 + 3
// tad process.argv[2] ir "calculator", tāpēc nobīde +1
const offset = process.argv[2] === 'calculator' ? 1 : 0;

const a = Number(process.argv[2 + offset]);
const operator = process.argv[3 + offset];
const b = Number(process.argv[4 + offset]);

const error = validate(a, operator, b);
if (error) {
  console.log(error);
  process.exit(1);
}

const result = calculate(a, operator, b);

if (result === null || result === undefined) {
  console.log(`Kļūda aprēķina laikā.`);
  process.exit(1);
}

console.log(formatResult(a, operator, b, result));
