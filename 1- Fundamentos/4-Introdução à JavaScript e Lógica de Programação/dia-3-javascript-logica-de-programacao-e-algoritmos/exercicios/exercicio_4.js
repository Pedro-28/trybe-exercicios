let maiorPrimo = 0;

for (let index = 1; index <= 50; index++) {
    let ehPrimo = 0;

    for (let i = 1; i <= index; i++) {
        if (index % i === 0) {
            ehPrimo++;
        }
    }
    if (ehPrimo === 2) {
        maiorPrimo = index;
    }
}

console.log("O maior número primo entre 0 e 50 é "+ maiorPrimo); 