const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function main() {
  const name = await ask('Kā tevi sauc? ');
  const age = await ask('Cik tev ir gadi? ');
  const city = await ask('No kuras pilsētas tu esi? ');

  console.log('\n--- Kopsavilkums ---');
  console.log('Vārds: ' + name);
  console.log('Vecums: ' + age);
  console.log('Pilsēta: ' + city);

  rl.close();
}

main();