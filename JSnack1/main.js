// Creo un array di oggetti > bici - nome, peso
const bikes = [
  {
    name: 'Mountain Bike',
    weight: 11
  },
  {
    name: 'Road Bike',
    weight: 7
  },
  {
    name: 'BMX',
    weight: 12
  },
  {
    name: 'Folding Bike',
    weight: 15
  },
  {
    name: 'Track Bikes',
    weight: 9
  },
  {
    name: 'Beach Cruiser',
    weight: 18
  }
];

// Stampo la bici con peso minore
let lightBike = bikes[0];
bikes.forEach((item) => {
  if (item.weight < lightBike.weight) {
    lightBike = item;
  }
  $('#result').text(`The lightest bike is ${lightBike.name} and it weights ${lightBike.weight}kg.`)
});
