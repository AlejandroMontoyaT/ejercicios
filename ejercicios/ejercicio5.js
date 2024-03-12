/**Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */
// Definimos el arreglo de personas
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Imprimir todos los nombres
console.log("Lista original:", people);

// Eliminar a "Dani"
people.splice(1, 1);

// Eliminar a "Juan"
people.splice(2, 1);

// Mover a "Luis" al inicio
let temporal = people[1];
people.splice(1, 1);
people.unshift(temporal);

// Agregar tu nombre
people.push("Tu Nombre");

// Buscar a "Maria"
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Maria") {
    console.log("¡Encontrada!", people[i]);
    break;
  }
}

// Encontrar el índice de "Maria"
let mariaIndex = people.indexOf("Maria");
console.log("Maria está en el índice:", mariaIndex);

// Imprimir la lista final
console.log("Lista final:", people);