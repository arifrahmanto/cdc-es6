function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}
console.log(product(1, 2, 3, 4, 5));

function join(array1, array2) {
  return [...array1, ...array2];
}

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}