// Ievade fizbuzz.js <skaitlis>

// Paņem N no komandrindas
const N = Number(process.argv[2]);

// Pārbaude: vai N ir skaitlis
if (isNaN(N)) {
  console.log('Lietošana: node fizzbuzz.js <skaitlis>');
  process.exit(1);
}

// Cikls no 1 līdz N
for (let i = 1; i <= N; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i); // Ja nekas nedalījās ar 3 un/vai 5, tad izvada pašu skaitli
  }

}