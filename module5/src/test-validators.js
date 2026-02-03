const {
  isEmail,
  isPhoneNumber,
  isValidAge,
  isStrongPassword,
  isValidDate,
} = require('./validators/validators');

console.log("=== EMAIL ===");
console.log("test@test.lv ->", isEmail("test@test.lv"));      // true
console.log("abc ->", isEmail("abc"));                        // false
console.log("test@ ->", isEmail("test@"));                    // false

console.log("\n=== PHONE ===");
console.log("+37112345678 ->", isPhoneNumber("+37112345678")); // true
console.log("+371 12345678 ->", isPhoneNumber("+371 12345678"));// true
console.log("12345678 ->", isPhoneNumber("12345678"));         // false

console.log("\n=== AGE ===");
console.log("25 ->", isValidAge(25));                          // true
console.log("'25' ->", isValidAge("25"));                      // true
console.log("25.5 ->", isValidAge(25.5));                      // false
console.log("200 ->", isValidAge(200));                        // false

console.log("\n=== PASSWORD ===");
console.log("abc12345 ->", isStrongPassword("abc12345"));      // true
console.log("password ->", isStrongPassword("password"));      // false
console.log("12345678 ->", isStrongPassword("12345678"));      // false

console.log("\n=== DATE ===");
console.log("2026-02-02 ->", isValidDate("2026-02-02"));       // true
console.log("2026-02-30 ->", isValidDate("2026-02-30"));       // false
console.log("2026-13-01 ->", isValidDate("2026-13-01"));       // false