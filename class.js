class Monster {
  constructor(options) {
    this.health = 100
    this.name = options.name
  }
}
let duck = new Monster({ name: 'Duckula' });
console.log(`Monster : ${JSON.stringify(duck)}`);

class Snake extends Monster {
  bite(other) {
    other.health -= 10;
  }
}
let snake = new Snake({ name: 'Cobra' });
console.log(`Snake : ${JSON.stringify(snake)}`);
snake.bite(duck);
console.log(`Monster : ${JSON.stringify(duck)}`);
