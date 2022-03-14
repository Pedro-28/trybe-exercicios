let n = 7;
let asterisco = '*';
let base = (n + 1) / 2;
let direita = base;
let esquerda = base;
let triangulo = '';
let espaco = ' ';

for (let index = 0; index <= base; index += 1) {
    for (let i = 0; i <= n; i += 1) {
        if (i > esquerda + 1 && i < direita - 1 && direita <= n) {
            triangulo = triangulo + espaco;
        } else if (i > esquerda && i < direita) {
            triangulo = triangulo + asterisco;
        } else {
            triangulo += espaco;
        }

    }
    console.log(triangulo);
    triangulo = '';
    esquerda -= 1;
    direita += 1;
}

