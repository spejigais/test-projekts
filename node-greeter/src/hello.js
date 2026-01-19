console.log("Hello World!"); 
const os = require('os');

const d = new Date();
const p = (n) => String(n).padStart(2, '0');

const dateStr =
  d.getFullYear() + '-' +
  p(d.getMonth() + 1) + '-' +
  p(d.getDate()) + ' ' +
  p(d.getHours()) + ':' +
  p(d.getMinutes()) + ':' +
  p(d.getSeconds());

let osName = 'nezināma';
const platform = os.platform();
if (platform === 'win32') osName = 'windows';
else if (platform === 'linux') osName = 'linux';
else if (platform === 'darwin') osName = 'macos';

console.log('Datums: ' + dateStr);
console.log("Node.js versija:", process.version);
console.log('Operētājsistēma: ' + osName);