/**Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
function calculateSumProduct(numbers) {
 
  const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  const product = numbers.reduce((accumulator, current) => accumulator * current, 1);

  console.log("The sum is:", sum);
  console.log("The product is:", product);
}

calculateSumProduct([1, 2, 3, 4]);
