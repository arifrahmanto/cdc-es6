const testingTeam = {
  lead: 'amanda',
  tester: 'bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'jill',
  manager: 'alex',
  engineer: 'dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(`Names : ${JSON.stringify(names)}`);

// -----------------------------------------------

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child
    }
  }
}

const children = [
  new Comment('good',[]),
  new Comment('bad', []),
  new Comment('normal',[])
]
const tree = new Comment('Great',children);

const values= [];
for (let val of tree){
  values.push(val);
}
console.log(`Values : ${JSON.stringify(values)}`);