// higher-order.js
// Pašu implementētas higher-order funkcijas (bez iebūvēto map/filter/reduce)

/**
 * myForEach
 * Izsauc callback katram masīva elementam
 */
function myForEach(arr, callback) { // Definē masīva elementus un callback
  for (let i = 0; i < arr.length; i++) { // Cikls tiek turpināts, kamēr i ir mazāks par elementu skaitu masīvā. 
    callback(arr[i], i, arr); // Elements, cikla solis, masīvs
  }
}

/**
 * myMap
 * Atgriež JAUNU masīvu ar transformētām vērtībām
 */
function myMap(arr, callback) { // Definē masīva elementus un callback
  const result = []; // Masīvs kurā likt rezultātus

  for (let i = 0; i < arr.length; i++) {  // Cikls tiek turpināts, kamēr i ir mazāks par elementu skaitu masīvā. 
    const newValue = callback(arr[i], i, arr); //callback var būt jebkāda funkcija, ja vien tas atgriež vērtību, no kuras veidot jauno masīvu.
    result.push(newValue); // Ieliek jauno elementu jaunajā masīvā no callback atgrieztajām vērtībām.
  }

  return result;
}

/**
 * myFilter
 * Atgriež JAUNU masīvu ar vērtībām, kas iztur callback pārbaudi
 */
function myFilter(arr, callback) { // Definē masīva elementus un callback (Nosaka vai elements ir derīgs)
  const result = []; // Masīvs kurā likt rezultātus

  for (let i = 0; i < arr.length; i++) {  // Cikls tiek turpināts, kamēr i ir mazāks par elementu skaitu masīvā.
    if (callback(arr[i], i, arr)) { // Filtrē elementus un atstāj tikai tos, kuru callback atgriež kā true. 10>15 False, 20>15 True
      result.push(arr[i]); // Ievieto derīgo elementu rezultātu masīvā
    }
  }

  return result;
}

/**
 * myReduce
 * Reducē masīvu uz VIENU vērtību. Apvieno visus masīva elementus vienā vērtībā, soli pa solim pārrakstot uzkrāto rezultātu.
 */
function myReduce(arr, callback, initial) { // Callback pasaka kā apvienot vērtības. Initial = sākuma vērtiba, tā var būt un var nebūt.
  let accumulator = initial; // Tiek glabāts pašreizējais uzkrātais rezultāts. Sākumā tajā ir initial.
  let startIndex = 0; // Norāda masīva elementu no kura sākt ciklu.

  if (accumulator === undefined) {
    accumulator = arr[0]; // Izvēlas pirmo elementu kā sākuma rezultātu
    startIndex = 1; // Ciklu sāk no otrā elementa
  }

  for (let i = startIndex; i < arr.length; i++) { // Cikls var sākties no 0 vai no 1 elementa. Cikls tiek turpināts, kamēr i ir mazāks par elementu skaitu masīvā.
    accumulator = callback(accumulator, arr[i], i, arr); // uzkrātais rezultāts, nākamais masīva elements, indekss, viss masīvs. Callback atgriezto, saglabā kā jauno rezultātu.
  }

  return accumulator; // atgriezt uzkrāto rezultātu.
}

module.exports = {
  myForEach,
  myMap,
  myFilter,
  myReduce,
};