function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}
console.log(product(1, 2, 3, 4, 5));

function join(array1, array2) {
  return [...array1, ...array2];
}
console.log(join([1,2,3],[3,4,5]));

function shift(array, ...numbers) {
  return [...array, ...numbers,];
}
console.log(shift([1,2,3],3,4,5));
