//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  
    for (let i = 0; i < array.length; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(array[i]); j++) {
        if (array[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (!isPrime) {
        return false;
      }
    }
  
    // Aplicar el algoritmo de ordenamiento bubble sort
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  console.log(sortPrimeHouses([25, 3, 6, 8, 5, 12, 9, 18, 11, 7])); // false
console.log(sortPrimeHouses([61, 7, 13, 11, 29, 3])); // [3, 7, 11, 13, 29, 61]
console.log(sortPrimeHouses([])); // []
console.log(sortPrimeHouses([2])); // [2]
console.log(sortPrimeHouses([4, 2])); // false
console.log(sortPrimeHouses([2, 3, 5, 7, 11])); // [2, 3, 5, 7, 11]
console.log(sortPrimeHouses([11, 7, 5, 3, 2])); // [2, 3, 5, 7, 11]




// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};