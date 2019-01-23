function sum(a = 0, b = 0) {
  return a + b;
}

console.log(`Sum with empty param:  ${sum()}`);
console.log(`Sum with param:  ${sum(2, 4)}`);

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}

