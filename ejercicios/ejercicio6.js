/*Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
*/

function ordenarBurbuja(numeros) {
  // Recorremos el array desde el principio hasta el final.
  for (let i = 0; i < numeros.length - 1; i++) {
    // Comparar cada elemento con el siguiente.
    for (let j = 0; j < numeros.length - i - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, intercambiamos.
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  // Devolvemos el array ordenado.
  return numeros;
}

// Ejemplo de uso
let numeros = [3, 6, 12, 5, 100, 1];
let resultado = ordenarBurbuja(numeros);

console.log("Array original:", numeros);
console.log("Array ordenado:", resultado);

