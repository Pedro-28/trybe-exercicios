let word = 'tryber';
let palavraInvertida = "";

for (let index = word.length - 1; index >= 0; index--) {
    palavraInvertida += word[index];
}

console.log(palavraInvertida);