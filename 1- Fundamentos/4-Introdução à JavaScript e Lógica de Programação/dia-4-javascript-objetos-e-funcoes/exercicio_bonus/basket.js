const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function fruitBasket(arrayFruits) {
  const objFruit = {};
  for (let index = 0; index < arrayFruits.length; index += 1) {
    if (!Object.keys(objFruit).includes(arrayFruits[index])) {
      objFruit[arrayFruits[index]] = 0;
      for (let i = 0; i < arrayFruits.length; i += 1) {
        if (arrayFruits[index] === arrayFruits[i]) {
          objFruit[arrayFruits[index]] += 1;
        }
      }
    }
  }
  return objFruit;
}

function fruitString(obj) {
  const objEntries = Object.entries(obj);
  let stringFruits = 'Sua cesta possui: ';
  for (let i = 0; i < objEntries.length; i += 1) {
    if (i === objEntries.length - 1) {
      stringFruits += `${objEntries[i][1]} ${objEntries[i][0]}s.`;
    } else {
      stringFruits += `${objEntries[i][1]} ${objEntries[i][0]}s, `;
    }
  }
  return stringFruits;
}

console.log(fruitBasket(basket));
console.log(fruitString(fruitBasket(basket)));
