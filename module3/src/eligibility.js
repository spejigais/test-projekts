// eligibility.js
// Nosaka personas atbilstību dažādiem nosacījumiem

// ---------------------
// 1) Nolasām argumentus
// ---------------------
const age = Number(process.argv[2]);
const hasLicense = process.argv[3] === "true";
const isVeteran = process.argv[4] === "true";
const isStudent = process.argv[5] === "true";

// ---------------------
// 2) Ievades validācija
// ---------------------
if (isNaN(age)) {
  console.log(`Kļūda: vecumam jābūt skaitlim.`);
  process.exit(1);
}

// ---------------------
// 3) Loģiskās izteiksmes
// ---------------------

// Balsot
const canVote = age >= 18;

// Īrēt auto
const canRentCar = age >= 21 && hasLicense;

// Senioru atlaide
const canGetSeniorDiscount = age >= 65 || isVeteran;

// Studentu atlaide
const canGetStudentDiscount =
  age >= 16 && age <= 26 && isStudent;

// ---------------------
// 4) Rezultātu izvade (template literals)
// ---------------------
console.log(`Vecums: ${age}`);
console.log(`Autovadītāja apliecība: ${hasLicense}`);
console.log(`Veterāns: ${isVeteran}`);
console.log(`Students: ${isStudent}`);

console.log(`\nAtbilstība:`);
console.log(`- Var balsot: ${canVote}`);
console.log(`- Var īrēt auto: ${canRentCar}`);
console.log(`- Var saņemt senioru atlaidi: ${canGetSeniorDiscount}`);
console.log(`- Var saņemt studentu atlaidi: ${canGetStudentDiscount}`);
