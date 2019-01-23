var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbers.filter(number => {
  return number > 50
});
console.log(`More than 50: ${filteredNumbers}`);

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];
var filteredUsers = users.filter(user => {
  return user.admin
});
console.log(`Admin Users: ${JSON.stringify(filteredUsers)}`);

function reject(array, iteratorFunction) {
  return array.filter(arr => {
      return !iteratorFunction(arr)
  })
}
var numbers = [10, 20, 30];
var lessThanFifTeen = reject(numbers, number => {
  return number > 15;
})
console.log(`Less than 15: ${lessThanFifTeen}`);