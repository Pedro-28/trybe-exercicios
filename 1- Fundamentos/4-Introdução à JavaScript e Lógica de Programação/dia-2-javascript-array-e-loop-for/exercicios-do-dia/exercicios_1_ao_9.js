//1º exercício - percorra o array imprimindo todos os valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index=0;index<numbers.length;index++){
    console.log(numbers[index]);
}

// 2ºexercício - some todos os valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaValores = 0;
for(let index=0;index<numbers.length;index++){
    somaValores += numbers[index];
}

console.log(somaValores);

//3ºexercício - calcule e imprima a média aritmética dos valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritmetica = 0 ;
let somaValores = 0;

for(let index=0;index<numbers.length;index++){
    somaValores += numbers[index];
}

mediaAritmetica = somaValores/numbers.length;

console.log(mediaAritmetica);

//4ºexercício - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mediaAritmetica = 0 ;
let somaValores = 0;

for(let index=0;index<numbers.length;index++){
    somaValores += numbers[index];
}

mediaAritmetica = somaValores/numbers.length;

if(mediaAritmetica>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

//5ºexercício - descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for(let index=0;index<numbers.length;index++){
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);

//6ºexercício - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares= 0;

for(let index = 0;index<numbers.length;index++){
    if(numbers[index]%2!=0){
        numerosImpares++;
    }
}

if(numerosImpares>0){
    console.log("O array tem ", numerosImpares, " valores ímpares.");
}else{
    console.log("Nenhum valor ímpar encontrado");
}

//7ºexercício - descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for(let index=1;index<numbers.length;index++){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}

console.log(menorValor);

//8ºexercício - crie um array que vá de 1 até 25 e imprima o resultado

let numbers25 = [];

for (let index = 1; index <= 25; index++) {
    numbers25.push(index);     
}

console.log(numbers25);

//9ºexercício - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for (let index = 0; index < numbers25.length; index++) {
    console.log(numbers25[index]/2);    
}
