const roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}

function romanNumeralValue(romanNum) {
  if (romanNum.length === 1) return roman[romanNum];
  const romanLength = romanNum.length;
  let sum = roman[romanNum[romanLength - 1]];
  let currentNum = roman[romanNum[romanLength - 1]];

  for (let i = 2; i <= romanLength; i += 1) {
    const nextNum = roman[romanNum[romanLength - i]];
    if (currentNum <= nextNum) {
      sum += nextNum;
    } else {
      sum -= nextNum;
    }
    currentNum = nextNum;
  }
  return sum;
}

console.log(romanNumeralValue('MCMXCIX'));
