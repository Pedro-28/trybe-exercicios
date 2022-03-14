let n = 7;
let ehprimo = 0;
for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
        ehprimo += 1;
    }
}
if (ehprimo === 2) {
    console.log('O número ' + n + ' é primo!');
} else {
    console.log('O número ' + n + ' não é primo!');
}