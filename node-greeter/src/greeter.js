const name = process.argv[2];
const birthYear = process.argv[3];

if (!name || !birthYear) {
  console.log('Lietošana: node greeter.js Vārds DzimšanasGads');
  process.exit(1);
}

const year = Number(birthYear);
if (isNaN(year)) {
  console.log('Kļūda: dzimšanas gadam jābūt skaitlim');
  process.exit(1);
}

const currentYear = new Date().getFullYear();
const age = currentYear - year;

// Latviešu valodas forma
let yearWord = 'gadi';
if (age % 10 === 1 && age % 100 !== 11) {
  yearWord = 'gads';
}

const message = 'Sveiks, ' + name + '! Tev ir ' + age + ' ' + yearWord + '.';
console.log(message);