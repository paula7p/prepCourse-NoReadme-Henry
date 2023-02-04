/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabrasAFrase(array) {
  // La función llamada  recibe como argumento un arreglo de 'string' y debe devolver un 'string'
  // armando la frase
  // Ej:
  // palabrasAFrase(['Dobby', 'loves', 'socks!]) debe retornar 'Dobby loves socks!'
  // sin espacios ni antes ni después es decir así no => " Dobby loves socks! "
  // Tu código aca:
  let res = ""
  for (let i =0; i < array.length; i++) {
     if (i + 1 === array.length) res = res + array[i]
     else res = res + array[i] + " "
  }
  return res
}


// No modifiques nada debajo de esta linea //

module.exports = palabrasAFrase