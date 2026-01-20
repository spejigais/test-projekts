const value = process.argv[2]; // temperatūra
const unit = process.argv[3];  // C vai F

// 1) Vai abi argumenti ir iedoti?
if (!value || !unit) {
  console.log('Lietošana: node temperature.js <temperatūra> <C|F>');
  process.exit(1);
}

// 2) Vai temperatūra ir skaitlis?
const temp = Number(value);

if (isNaN(temp)) {
  console.log('Kļūda: temperatūrai jābūt skaitlim');
  process.exit(1);
}

// 3) Vai mērvienība ir C vai F?
const unitUpper = unit.toUpperCase();

if (unitUpper !== 'C' && unitUpper !== 'F') {
  console.log('Kļūda: mērvienībai jābūt C vai F');
  process.exit(1);
}

// 4) Konvertēšana + izvade
if (unitUpper === 'C') {
  const f = temp * 9 / 5 + 32;
  console.log(temp + '°C = ' + f.toFixed(1) + '°F');
} else {
  const c = (temp - 32) * 5 / 9;
  console.log(temp + '°F = ' + c.toFixed(1) + '°C');
}