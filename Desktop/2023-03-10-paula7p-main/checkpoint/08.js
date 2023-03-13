const { LinkedList } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
// 8️⃣ ***** EJERCICIO 8 ***** - LinkedList.sliceRooms() 8️⃣ 
// 
// Agregar al prototype de LinkedList el método sliceRooms().
// Este método también será similar al slice() de array, dónde a partir de 2 índices, deberás
// particionar la lista de habitaciones de una casa.
//
//⚠️ ATENCION ⚠️
// - Documentación explicando Array.slice() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// - Los valores que sean iguales a los índices no deben ser incluidos
// - Los indices siempre van a equivaler a un string con el nombre de una habitación
// - Recorda que esta el metodo add() ya incluido en el prototype para agregar nuevos nodos y search() para buscar los existentes
//
// EJEMPLOS:
// Tenemos la siguiente lista:
// ("Cocina") ---> ("Dormitorio") ---> ("Baño") ---> ("Living") ---> ("Garage") --->
//
// LinkedList.sliceRooms("Dormitorio", "Garage") Devuelve => ("Baño") ---> ("Living") --->
//
// REQUISITOS:
//  🟢 Retornar una nueva lista a partir de los índices provistos
//  🟢 Los valores que coincidan con los indices no deben ser incluidos
//  🟢 Si ninguno de los índices se encuentra en la lista, retornar false
//
// Nota: el primer indice siempre sera menor al segundo.

LinkedList.prototype.sliceRooms = function (firstIndex, secondIndex) {
  // Tu código aquí:
    // Verificar si la lista está vacía

      const firstNode = this.search(firstIndex);
      const secondNode = this.search(secondIndex);
    
      if (!firstNode || !secondNode || firstNode === secondNode || firstNode.index >= secondNode.index) {
        return false;
      }
    
      const newList = new LinkedList();
      let currentNode = firstNode.next;
    
      while (currentNode !== secondNode) {
        newList.add(currentNode.value);
        currentNode = currentNode.next;
      }
    
      return newList;
    }
    const myList = new LinkedList();
myList.add("Cocina");
myList.add("Dormitorio");
myList.add("Baño");
myList.add("Living");
myList.add("Garage");

const sliced = myList.sliceRooms("Dormitorio", "Garage");
console.log(sliced.printList()); // "Baño" ---> "Living"



// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};