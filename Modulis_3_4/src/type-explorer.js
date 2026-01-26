// STRING
const s1 = "Toms";
let s2 = "Jelgava";

// NUMBER
const n1 = 31;
let n2 = -3.5;

// BOOLEAN
const b1 = true;
let b2 = false;

// NULL
const null1 = null;
let null2 = null;

// UNDEFINED
let u1;
const u2 = undefined;   // const prasa vērtību uzreiz. Const u1 = SyntaxError

// ----------
// Konsoles izvade ar typeof
// ----------

console.log("=== STRING ===");
console.log("s1:", s1, "| typeof:", typeof s1);
console.log("s2:", s2, "| typeof:", typeof s2);

console.log("\n=== NUMBER ===");
console.log("n1:", n1, "| typeof:", typeof n1);
console.log("n2:", n2, "| typeof:", typeof n2);

console.log("\n=== BOOLEAN ===");
console.log("b1:", b1, "| typeof:", typeof b1);
console.log("b2:", b2, "| typeof:", typeof b2);

console.log("\n=== NULL ===");
console.log("null1:", null1, "| typeof:", typeof null1);
console.log("null2:", null2, "| typeof:", typeof null2);
// Piezīme: typeof null -> "object" (JS īpatnība)

console.log("\n=== UNDEFINED ===");
console.log("u1:", u1, "| typeof:", typeof u1);
console.log("u2:", u2, "| typeof:", typeof u2);


// ----------
// 3) AUTOMĀTISKĀ TIPU PĀRVEIDOŠANA (implicit)
// ----------

console.log("\n=== AUTOMĀTISKĀ TIPU PĀRVEIDOŠANA ===");

// 1) "+" ar string -> viss kļūst par string
const auto1 = "5" + 3;
console.log('"5" + 3 =', auto1, "| typeof:", typeof auto1);
// rezultāts: "53" (string)

// 2) "-" liek JS mēģināt pārvērst uz number
const auto2 = "5" - 3;
console.log('"5" - 3 =', auto2, "| typeof:", typeof auto2);
// rezultāts: 2 (number)

// 3) == veic automātisku tipu pielīdzināšanu
const auto3 = 0 == false;
console.log("0 == false ->", auto3, "| typeof:", typeof auto3);
// rezultāts: true (boolean)


// ----------
// 4) EKSPLICITĀ TIPU KONVERSIJA (explicit) + edge cases
// ----------

console.log("\n=== EKSPLICITĀ TIPU KONVERSIJA ===");

// 1) String -> Number (nederīga ievade)
const exp1 = Number("abc");
console.log('Number("abc") =', exp1, "| typeof:", typeof exp1);
// OUTPUT:
// Number("abc") = NaN | typeof: number

// 2) Tukšs string -> Number (robežgadījums)
const exp2 = Number("");
console.log('Number("") =', exp2, "| typeof:", typeof exp2);
// OUTPUT:
// Number("") = 0 | typeof: number

// 3) Number -> String
const exp3 = String(123);
console.log("String(123) =", exp3, "| typeof:", typeof exp3);
// OUTPUT:
// String(123) = 123 | typeof: string

// 4) Dažādas vērtības -> Boolean (eksplicīta konversija)
const exp4 = Boolean(0);
const exp5 = Boolean("");
const exp6 = Boolean(" ");

console.log("Boolean(0) =", exp4, "| typeof:", typeof exp4);
console.log('Boolean("") =', exp5, "| typeof:", typeof exp5);
console.log('Boolean(" ") =', exp6, "| typeof:", typeof exp6);
// OUTPUT:
// Boolean(0) = false | typeof: boolean
// Boolean("") = false | typeof: boolean
// Boolean(" ") = true | typeof: boolean