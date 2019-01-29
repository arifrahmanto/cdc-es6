// Export/Import is experimental in NodeJS
// Change the extention to .mjs
// Run with command: node --experimental-modules .\mdl-import.mjs
import { cube, foo, graph } from './mdl-export';
graph.options = {
  color: 'blue',
  thickness: '3px'
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); 