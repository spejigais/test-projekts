// converter.js
// Vienkāršs vienību konvertētājs ar 2 decimālzīmēm

// ---------------------
// 1) Nolasām argumentus
// ---------------------
const type = process.argv[2];  //type ir tas, ko lietotājs ierakstīja kā pirmo argumentu
const value = Number(process.argv[3]); // Mēģina pārvērst string par skaitli

// ---------------------
// 2) Validācija.    !type = Ja nav ievadīta vērtība (konversijas tips)
//                   isNaN = Ja ievadīto vērtību NEVAR interpretēt kā skaitli.
// ---------------------
if (!type || isNaN(value)) {
  console.log(`Kļūda: jānorāda konversijas tips un skaitliska vērtība.`);
  process.exit(1);
}

// ---------------------
// 3) Konversija
// ---------------------
let result;
let fromUnit;
let toUnit;

if (type === "km-mi") {
  result = value * 0.621371;
  fromUnit = "km";
  toUnit = "mi";

} else if (type === "mi-km") {
  result = value / 0.621371;
  fromUnit = "mi";
  toUnit = "km";

} else if (type === "kg-lb") {
  result = value * 2.20462;
  fromUnit = "kg";
  toUnit = "lb";

} else if (type === "lb-kg") {
  result = value / 2.20462;
  fromUnit = "lb";
  toUnit = "kg";

} else if (type === "l-gal") {
  result = value * 0.264172;
  fromUnit = "L";
  toUnit = "gal";

} else if (type === "gal-l") {
  result = value / 0.264172;
  fromUnit = "gal";
  toUnit = "L";

} else {
  console.log(`Kļūda: neatbalstīts konversijas tips "${type}".`);
  process.exit(1);
}

// ---------------------
// 4) Izvade (2 decimālzīmes)
// ---------------------
console.log(`${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`);
