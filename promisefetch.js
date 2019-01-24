let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000)
});
promise1
  .then(() => console.log('promise1 finished'))
  .then(() => console.log('promise1 run well'))
  .catch(() => console.log('promise1 error'));

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000)
});
promise2
  .then(() => console.log('promise2 finished'))
  .then(() => console.log('promise2 run well'))
  .catch(() => console.log('promise2 error'));

// // ------------------------------------------
// const url1 = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url1)
//   .then(res => console.log(JSON.stringify(res.json())))
//   .catch(err => console.log('BAD', err));

// // --- error shown due to invalid url domain (connection error) -------
// const url2 = 'https://jsonplaceholder.typicode123.com/posts';
// fetch(url2)
//   .then(res => console.log(res.json()))
//   .catch(err => console.log('BAD', err));

// //--- still call then because the domain is valid but the post1234 request not available in the domain
// const url3 = 'https://jsonplaceholder.typicode.com/posts1234';
// fetch(url3)
//   .then(res => console.log(res.json()))
//   .catch(err => console.log('BAD', err));