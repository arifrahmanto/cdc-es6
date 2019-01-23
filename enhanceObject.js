const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red, blue };

const fields = ['firstName', 'lastName', 'phoneNumber'];    
const props = { fields };

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height
  };
}

const color = 'red';
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};