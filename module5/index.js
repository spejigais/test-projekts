// module5/index.js
const cmd = process.argv[2];

if (!cmd) {
  console.log('Lietošana: node index.js <komanda> [...args]');
  console.log('Komandas: calculator');
  process.exit(1);
}

if (cmd === 'calculator') {
  require('./src/cli/calculator');
  process.exit(0);
}

console.log(`Nezināma komanda: ${cmd}`);
console.log('Pieejams: calculator');
process.exit(1);
