var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var admin = users.find(user => {
  return user.admin
});
console.log(`Find Admin: ${JSON.stringify(admin)}`);

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];
var account = accounts.find(acc => {
  return acc.balance === 12
});
console.log(`Got my balance : ${JSON.stringify(account)}`);

function findWhere(array, criteria) {
  let property = Object.keys(criteria)
  return array.find(arr => {
    return criteria[property] === arr[property]
  });
}
var ladders = [
  { id: 1, height: 20 },
  { id: 2, height: 30 },
  { id: 3, height: 25 }
];
var myladder = findWhere(ladders, { height: 25 });
console.log(`My ladder : ${JSON.stringify(myladder)}`);