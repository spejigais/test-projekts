// START

// ievadīt A
const A = Number(process.argv[2]);

// ievadīt B
const B = Number(process.argv[3]);

// ievadīt C
const C = Number(process.argv[4]);


let lielākais;

// IF (A >= B) AND (A >= C) THEN
if (A >= B && A >= C) {
  // lielākais = A
  lielākais = A;
} else {
  // IF (B >= A) AND (B >= C) THEN
  if (B >= A && B >= C) {
    // lielākais = B
    lielākais = B;
  } else {
    // ELSE -> lielākais = C
    lielākais = C;
  }
}

// izvadīt lielākais
console.log('Lielākais skaitlis ir:', lielākais);

// END