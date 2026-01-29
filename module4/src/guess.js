const readline = require('readline');

// Izveido readline interfeisu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Nejaušs skaitlis no 1 līdz 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Maksimālais mēģinājumu skaits
const MAX_ATTEMPTS = 10;

// Skaitām mēģinājumus
let attempts = 0;

console.log('Es esmu iedomājies skaitli no 1 līdz 100.');
console.log('Tev ir 10 mēģinājumi to uzminēt.');

// Funkcija vienam minējumam
function askGuess() {
  rl.question('Ievadi savu minējumu: ', (input) => {
    const guess = Number(input);
    attempts++;

    // Validācija
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Lūdzu ievadi skaitli no 1 līdz 100.');
      attempts--; // neskaitām šo kā mēģinājumu
      askGuess();
      return;
    }

    // Pārbaude
    if (guess === secretNumber) {
      console.log(`Pareizi! Tu uzminēji ar ${attempts} mēģinājumiem.`);
      rl.close();
      return;
    }

    if (attempts >= MAX_ATTEMPTS) {
      console.log(`Diemžēl neuzminēji. Pareizais skaitlis bija ${secretNumber}.`);
      rl.close();
      return;
    }

    if (guess > secretNumber) {
      console.log('Par lielu.');
    } else {
      console.log('Par mazu.');
    }

    // Turpinām spēli
    askGuess();
  });
}

// Sākam spēli
askGuess();
