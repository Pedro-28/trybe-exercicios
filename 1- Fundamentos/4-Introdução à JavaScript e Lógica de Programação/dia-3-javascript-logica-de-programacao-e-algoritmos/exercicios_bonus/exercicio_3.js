let n = 5;
let trianguloRetangulo = "";
let trianguloInvertido = "";
let espaco = "";
for (let index = 0; index < n; index++) {
    if (espaco.length < 1) {
        for (let i = 0; i < n - 1; i++) {
            espaco += " ";
        }
    } else {
        espaco = espaco.slice(0, -1);
    }

    trianguloRetangulo += "*";
    trianguloInvertido = espaco + trianguloRetangulo;
    console.log(trianguloInvertido);
}