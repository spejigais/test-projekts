'use strict';

/**
 * Pirmo burtu padara lielo (pārējo atstāj kā ir).
 *
 * @param {string} str - Ievades teksts.
 * @returns {string} teksts ar lielo pirmo burtu.
 * @example
 * capitalize("hello") // "Hello"
 * @example
 * capitalize("") // ""
 * @example
 * capitalize("čau") // "Čau"
 */
function capitalize(str) {
  if (typeof str !== 'string') return ''; //Ja tips nav teksts, tad atgriež tukšu
  if (str.length === 0) return ''; // Ja garums un tips ir vienāds ar 0, atgriež tukšu
  return str[0].toUpperCase() + str.slice(1); // Paņem pirmo burtu [0], uztaisa par lielo + slice pieliek visu tekstu sākot no otrā (1) burta.
}

/**
 * Atgriež teksts līdz maxLen, un ja tā bija garāka, pievieno "...".
 * Noteikums: gala rezultāta garums nepārsniedz maxLen.
 *
 * @param {string} str - Ievades teksts.
 * @param {number} maxLen - Maksimālais garums (>= 0).
 * @returns {string} Atgriezts vai oriģināls teksts.
 * @example
 * truncate("Hello world", 8) // "Hello..."
 * @example
 * truncate("Hi", 8) // "Hi"
 * @example
 * truncate("abcdef", 3) // "..."
 */
function truncate(str, maxLen) {
  if (typeof str !== 'string') return '';
  const len = Number(maxLen); // maxLen tiek pārvērsts par skaitli. "8" = 8

  if (!Number.isFinite(len) || len < 0) return ''; //Ja len nav skaitlis || len < 0 atgriezt ''
  if (str.length <= len) return str; //Ja teksts jau ir mazāks vai vienāda garuma, atgriež oriģinālu
  if (len <= 3) return '.'.repeat(len); // Ja atļautais garums ir mazāks par 3, atgriezt '...'
  return str.slice(0, len - 3) + '...'; // Paņem tekstu, atstāj tik daudz burtu, lai beigās varētu pielikt ..., un tad pieliek '...'
}

/**
 * Saskaita vārdus virknē.
 * Vārdi = secīgi simboli, kas nav atstarpes (split pēc whitespace).
 * Katru reizi, kad no atstarpes ieej burtā, sākas jauns vārds.
 *
 * @param {string} str - Ievades virkne.
 * @returns {number} Vārdu skaits.
 * @example
 * countWords("Hello world") // 2
 * @example
 * countWords("  a   b  c ") // 3
 * @example
 * countWords("") // 0
 */
function countWords(str) {
  if (typeof str !== 'string') return 0; // Ja nav teksts, atgriež 0

  let inWord = false; // Vai skaitītājs atrodas iekšā vārdā.
  let count = 0; // Cik vārdi jau ir saskaitīti.

  for (let i = 0; i < str.length; i++) { // Skaiti sākot ar pirmo simbolu, kamēr neesi ticis līdz beigām, ej uz nākamo.
    const ch = str[i]; // Paņemt burtu no teksta. Pēc kārtas.
    const isSpace = ch === ' ' || ch === '\n' || ch === '\t' || ch === '\r' || ch === '\f' || ch === '\v'; // Pārbauda vai konkrētais simbols ir atstarpe.
    if (!isSpace && !inWord) { // Ja simbols nav atstarpe un iepriekšējā atrašanās vieta nebija vārdā, tad  sākās jauns vārds.
      count++; // palielināt skaitītāju.
      inWord = true;
    } else if (isSpace) {
      inWord = false; // Ja sastop atstarpi, tad vārds ir beidzies.
    }
  }
  return count;
}

/**
 * Ierobežo skaitli diapazonā [min, max].
 *
 * @param {number} num - Skaitlis, ko ierobežot.
 * @param {number} min - Apakšējā robeža.
 * @param {number} max - Augšējā robeža.
 * @returns {number} Skaitlis diapazonā [min, max].
 * @example
 * clamp(5, 1, 10) // 5
 * @example
 * clamp(-2, 0, 10) // 0
 * @example
 * clamp(999, 0, 100) // 100
 */
function clamp(num, min, max) {
  const n = Number(num);
  const a = Number(min);
  const b = Number(max);

  if (!Number.isFinite(n) || !Number.isFinite(a) || !Number.isFinite(b)) return NaN; // Pārbaude vai visi ir skaitļi. Ja nē, NaN.

  // ja min/max sajaukti vietām
  const low = a <= b ? a : b; //Ja a ir mazāks vai vienāds ar b, tad low = a, citādi low = b
  const high = a <= b ? b : a; //Ja a ir mazāks vai vienāds ar b, tad high = b, citādi high = a

  if (n < low) return low;
  if (n > high) return high;
  return n;
}

/**
 * Pārbauda, vai skaitlis ir pirmskaitlis.
 *
 * @param {number} num - Vesels skaitlis.
 * @returns {boolean} true, ja pirmskaitlis; citādi false.
 * @example
 * isPrime(2) // true
 * @example
 * isPrime(9) // false
 * @example
 * isPrime(97) // true
 */
function isPrime(num) {
  const n = Number(num); // Pārvērš par skaitli
  if (!Number.isFinite(n)) return false; // Ja n nav skaitlis, atgriež false.
  if (n % 1 !== 0) return false; // Ja atlikums ir 0, atgriež false
  if (n < 2) return false; // Ja mazāks par 2, tad false
  if (n === 2) return true; // Ja ir tieši 2, tad true
  if (n % 2 === 0) return false; // Ja ir pāra skaitlis, tad false

  const limit = Math.floor(Math.sqrt(n)); //Nosaka lielāko skaitli, līdz kuram meklēt dalītājus.
  for (let i = 3; i <= limit; i += 2) { // Sāk no 3 un iet uz priekšu pa 2, jo pāra skaitļi neder.
    if (n % i === 0) return false; // Ja skaitlis dalās ar i, tas nav pirmskaitlis.
  }
  return true;
}

/**
 * Aprēķina faktoriālu n! (n * (n-1) * ... * 1).
 * Pieņem tikai veselus n >= 0.
 * Sareizina visus skaitļus no 1 līdz n
 *
 * @param {number} n - Vesels skaitlis >= 0.
 * @returns {number} n! (ja ievade nederīga, atgriež NaN).
 * @example
 * factorial(0) // 1
 * @example
 * factorial(5) // 120
 * @example
 * factorial(3) // 6
 */
function factorial(n) {
  const x = Number(n); // Pārvērš ievadi par skaitli
  if (!Number.isFinite(x) || x % 1 !== 0 || x < 0) return NaN; //Ja X ir NaN, nav vesels skaitlis (0,5), vai negatīvs, atgriež - NaN 

  let result = 1;
  for (let i = 2; i <= x; i++) { // Sāk ar 2 un iet uz augšu līdz X
    result *= i; // result = result * i;
  }
  return result;
}

/**
 * Saskaita masīva elementus (bez iebūvētajām masīvu metodēm).
 *
 * @param {number[]} arr - Masīvs ar skaitļiem.
 * @returns {number} Elementu summa (ja masīvs tukšs -> 0; ja kāds nav skaitlis -> NaN).
 * @example
 * sum([1, 2, 3]) // 6
 * @example
 * sum([]) // 0
 * @example
 * sum([10, -5]) // 5
 */
function sum(arr) {
  if (!Array.isArray(arr)) return NaN; // Ja tas nav masīvs, nevar saskaitīt. Masīvs = [1,2,3]

  let total = 0; // Summas krātuve
  for (let i = 0; i < arr.length; i++) { // Masīvu skaitīšana. No pirmā elementa līdz pēdējam.
    const v = Number(arr[i]); // Paņem vienu elementu no masīva, mēģina pārvērst to par skaitli.
    if (!Number.isFinite(v)) return NaN;  // Ja elements nav skaitlis, tad NaN
    total += v; // total = total + v
  }
  return total; // Atgriež summu.
}

/// Kāpēc vispirms ir formula un pēc tam notiek pārbaude vai cipari ir skaitļi? ///



/**
 * Aprēķina vidējo aritmētisko (bez iebūvētajām masīvu metodēm).
 *
 * @param {number[]} arr - Masīvs ar skaitļiem.
 * @returns {number} Vidējais (ja tukšs -> NaN; ja kāds nav skaitlis -> NaN).
 * @example
 * average([2, 4, 6]) // 4
 * @example
 * average([10]) // 10
 * @example
 * average([]) // NaN
 */
function average(arr) { 
  if (!Array.isArray(arr)) return NaN; // Ja nav masīva, tad NaN
  if (arr.length === 0) return NaN; // Ja masīvā nav skaitļu, tad NaN

  let total = 0; // Summas krātuve
  for (let i = 0; i < arr.length; i++) { // Masīvu skaitīšana. No pirmā elementa līdz pēdējam.
    const v = Number(arr[i]); // Paņem vienu elementu no masīva, mēģina pārvērst to par skaitli.
    if (!Number.isFinite(v)) return NaN;  // Ja elements nav skaitlis, tad NaN
    total += v; // total = total + v
  }
  return total / arr.length; // Izdala summu ar elementu skaitu un atgriež
}

module.exports = {
  capitalize,
  truncate,
  countWords,
  clamp,
  isPrime,
  factorial,
  sum,
  average,
};