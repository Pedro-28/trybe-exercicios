let n = 5;
let asterisco = '*';
let base = (n + 1) / 2;
let direita = base;
let esquerda = base;
let triangulo = '';

for (let index = 0; index <= base; index += 1) {
    for (let i = 0; i <= n; i += 1) {
        if (i > esquerda && i < direita) {
            triangulo = triangulo + asterisco;
        } else {
            triangulo += ' ';
        }
    }
    console.log(triangulo);
    triangulo = '';
    esquerda -= 1;
    direita += 1;
}

