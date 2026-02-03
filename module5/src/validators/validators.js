// validators.js
// Validācijas funkcijas (atgriež true/false)

// ---------------------
// isEmail(str)
// Vienkārša e-pasta validācija
// ---------------------
function isEmail(str) {  // Pārbauda vai ievade ir teksts.
  if (typeof str !== "string") return false;

  const s = str.trim(); // Noņem atstarpes sākumā un beigās
  if (s.length === 0) return false; //Pārbauda vai teksts ir tukšs

  // Vienkāršs e-pasts: teksts@teksts.domens
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex noteikumi
  return emailRegex.test(s); //Regex metode, kas salīdzina tekstu ar regex noteikumiem un atgriež true vai false
}

// ---------------------
// isPhoneNumber(str)
// Latvijas formāts: +371 XXXXXXXX (8 cipari pēc +371)
// Atļauj arī bez atstarpes: +371XXXXXXXX
// ---------------------
function isPhoneNumber(str) {
  if (typeof str !== "string") return false;

  const s = str.trim(); // Noņem atstarpes sākumā un beigās
  const phoneRegex = /^\+371\s?\d{8}$/;
  return phoneRegex.test(s);
}

// ---------------------
// isValidAge(age)
// 0-150 (vesels skaitlis)
// ---------------------
function isValidAge(age) { // Vecums var būt gan skaitlis, gan teksts
  const n = typeof age === "number" ? // Vai age ir skaitlis?
    age // Ja age ir true, tad tas ir number
    : Number(String(age).trim()); // citādi: Ja false, tad pārvērš age par string, noņem atstarpes, mēģina pārvērst par number
  if (!Number.isFinite(n)) return false; // Ja n nav parasts skaitlis, tad false (NaN, infinity, -infinity)
  if (!Number.isInteger(n)) return false; // Ja n nav vesals skaitlis, tad false (2.5, -0.1)

  return n >= 0 && n <= 150;
}

// ---------------------
// isStrongPassword(str)
// Vismaz 8 simboli, vismaz 1 burts un vismaz 1 cipars
// ---------------------
function isStrongPassword(str) {
  if (typeof str !== "string") return false; // Pārbauda vai parole vispār ir teksts

  const s = str; // Nosauc paroli par S
  if (s.length < 8) return false; // ja parole īsāka par 8 simboliem - false

  const hasLetter = /[A-Za-z]/.test(s); // Iekļauj lielos un mazos burtus. Test pārbauda vai parolē ir vismaz viens burts
  const hasDigit = /\d/.test(s); // Iekļauj ciparus. Test pārbauda vai parolē ir vismaz viens cipars.

  return hasLetter && hasDigit; 
}

// ---------------------
// isValidDate(str)
// YYYY-MM-DD formāts + reāls datums (piem., 2026-02-30 -> false)
// ---------------------
function isValidDate(str) {
  if (typeof str !== "string") return false; // Pārbauda Vai datums ir teksts.

  const s = str.trim(); // Nosauc par S un noņem atstarpes sākumā un beigās
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s); // 4444-22-22, pārbauda formu. EXEC atgriež detaļas
  if (!match) return false; // Ja forma nesakrīt izdod false

  const year = Number(match[1]); // Pāreja no teksta uz skaitļiem
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return false; // Ja gads vai mēnesis, vai diena nav vesels skaitlis, tad false
  }

  if (month < 1 || month > 12) return false; // Ja mēnesis < 1 vai > 12, tad false

  // Cik dienas ir šajā mēnesī, šajā gadā
  const daysInMonth = new Date(year, month, 0).getDate(); // 0 = Pēdējā diena mēnesī pirms month
  if (day < 1 || day > daysInMonth) return false; // Ja datums ir < 1 vai diena > par dienām mēnesī, tad false

  return true;
}

// ---------------------
// Eksports, lai citi faili var izmantot šīs funkcijas
// ---------------------
module.exports = {
  isEmail,
  isPhoneNumber,
  isValidAge,
  isStrongPassword,
  isValidDate,
};
