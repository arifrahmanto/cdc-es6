var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var totalDistance = trips.reduce((prev, trip) => {
  return prev += trip.distance
}, 0);
console.log(`Total Distance: ${totalDistance}`);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function (prev, desk) {
  if (desk.type === 'sitting') prev.sitting++
  if (desk.type === 'standing') prev.standing++
  return prev
}, { sitting: 0, standing: 0 });
console.log(`Desktypes : ${JSON.stringify(deskTypes)}`);

function unique(array) {
  return array.reduce((prev, arr) => {
    if (!prev.includes(arr)) prev.push(arr)
    return prev
  }, [])
}
var numbers = [1, 1, 2, 2, 3, 3, 3, 4];
var unik = unique(numbers);
console.log(`Unique Numbers: ${JSON.stringify(unik)}`);