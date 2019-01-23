var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(image => {
  return image.height
})

console.log(`Heights: ${heights}`);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
var speeds = trips.map(trip => {
  return trip.distance / trip.time
});
console.log(`Speeds: ${speeds}`);

function pluck(array, property) {
  return array.map(arr => {
    return arr[property]
  })
}
var paints = [{ color: 'red' }, { color: 'green' }, { color: 'blue' }]
var result = pluck(paints, 'color');
console.log(`Colors: ${result}`);