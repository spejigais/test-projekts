// Paņem N no komandrindas
const N = Number(process.argv[2]);

// Nosaka lielāko iespējamo skaitli tabulā. Izmanto priekš formatēšanas.
const maxNumber = N * N;

// Nosaka kolonnu platumu
const width = String(maxNumber).length;

// Ārējais cikls – rindas. No 1-N. Katra iterācija = viena rinda tabulā
for (let row = 1; row <= N; row++) {
  let line = '';

  // Iekšējais cikls – kolonnas. No 1-N. Katra iterācija = viena kolonna tabulā
  for (let col = 1; col <= N; col++) {
    const value = row * col;

    // Pievieno skaitli ar vienādu platumu
    line += String(value).padStart(width, ' ') + ' ';
  }

  // Izvada rindu
  console.log(line.trim());
  
}