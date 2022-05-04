let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(array) {
  const newVector = [];
  for (let index = 0; index < array.length; index += 1) {
    for (let i = 0; i < array[index].length; i += 1) {
      if (array[index][i] % 2 === 0) {
        newVector.push(array[index][i]);
      }
    }
  }
  return newVector;
}

console.log(arrayOfNumbers(vector));
