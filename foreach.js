var posts = [
  { id: 23, title: 'Daily JS News' },
  { id: 52, title: 'Code Refactor City' },
  { id: 105, title: 'The Brightest Ruby' }
];

posts.forEach((post) => {
  console.log(post);
});

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach((image) => {
    areas.push(image.height*image.width)
})

console.log(`Areas : ${areas}`);