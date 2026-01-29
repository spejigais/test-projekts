// Paņem N no komandrindas
const N = Number(process.argv[2]);

if (isNaN(N) || N < 2) {
  console.log('Lietošana: node primes.js <skaitlis >= 2>');
  process.exit(1);
}

// Sākam mērīt izpildes laiku
console.time('Execution time');

// Funkcija, kas pārbauda, vai skaitlis ir pirmskaitlis
function isPrime(n) {
  if (n < 2) return false;

  // Pietiek pārbaudīt līdz kvadrātsaknei
  const limit = Math.sqrt(n);

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false; // atradām dalītāju
    }
  }

  return true;
}

// Meklējam visus pirmskaitļus līdz N
const primes = [];

for (let i = 2; i <= N; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

// Izdrukājam rezultātu
console.log(primes.join(', '));

// Beidzam mērīt laiku
console.timeEnd('Execution time');