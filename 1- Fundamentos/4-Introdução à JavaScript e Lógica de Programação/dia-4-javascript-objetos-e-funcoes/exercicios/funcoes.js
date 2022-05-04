// 1ºexecício

function verificaPalindrome(word) {
  const reverseWord = word.split('').reverse().join('');
  if (word === reverseWord) return true;
  return false;
}
console.log(verificaPalindrome('arara'));// retorna true
console.log(verificaPalindrome('desenvolvimento')); // retorna false

// 2ºexecício

function maiorNumero(arrayNum) {
  let num = 0;
  for (let i in arrayNum) {
    if (arrayNum[i] > arrayNum[num]) num = i;
  }
  return num;
}

console.log(maiorNumero([2, 3, 6, 7, 10, 1]));

// 3ºexecício

function menorNumero(arrayNum) {
  let num = 0;
  for (let i in arrayNum) {
    if (arrayNum[i] < arrayNum[num]) num = i;
  }
  return num;
}

console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));

// 4ºexecício

function maiorString(arrayString) {
  let word = '';
  for (let i in arrayString) {
    if (arrayString[i].length > word.length) word = arrayString[i];
  }
  return word;
}

console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5ºexecício

function maisRepete(arrayNum) {
  let num = 0;
  let maisRepete = 1;
  for (const index in arrayNum) {
    let repete = 0
    for (const i in arrayNum) {
      if (arrayNum[index] === arrayNum[i]) {
        repete += 1;
      }
    }
    if (repete > maisRepete) {
      num = arrayNum[index];
      maisRepete = repete;
    }
  }
  return num;
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));

// 6ºexecício

function somaAnteriores(natural) {
  let soma = 0;
  if (natural > 0) {
    for (let i = 1; i <= natural; i += 1) {
      soma += i;
    }
    return soma;
  }
  return 'Não é um número natural';
}

console.log(somaAnteriores(5));

// 7ºexecício

function verificaFimPalavra(word, ending) {
  let wordEnd = '';
  let diferenca = word.length - ending.length;
  if (ending.length < word.length) {
    for (let i = diferenca; i < word.length; i += 1) {
      wordEnd += word[i];
    }
    if (wordEnd === ending) {
      return true;
    }
  }
  return false;
}

console.log(verificaFimPalavra('trybe', 'be'));//returna true
console.log(verificaFimPalavra('joaofernando', 'fernan'));//returna false
