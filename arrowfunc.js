const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`Fibonacci 10: ${fibonacci(10)}`);

const profile = {
  name: 'Alex',
  getName: () => {
    return profile.name
  }
};
console.log(`Profile : ${profile.getName()}`);