const profile = {
  title: 'Engineer',
  department: 'Engineering'
};
const profile2 = {
  title: 'Admin',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}
console.log(`Object1 is engineer : ${isEngineer(profile)}`);
console.log(`Object2 is engineer : ${isEngineer(profile2)}`)

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}
});
console.table(classesAsObject);

const numbers = [1,2,3];
const double = ([number, ...rest]) => {
    return !number ? [] : [number*2, ...double(rest)]
}
console.log(double(numbers));