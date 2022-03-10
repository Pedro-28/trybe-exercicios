//1ºexercício - Ordene o array numbers em ordem crescente e imprima seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index++) {
    for(let i = 0; i < numbers.length-index; i++){
        if (numbers[i] > numbers[i+1]) {
            let posisao = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = posisao;            
        }        
    }    
}
console.log(numbers);

//2ºexercício - Ordene o array numbers em ordem decrescente e imprima seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index++) {
    for(let i = 0; i < numbers.length-index; i++){
        if (numbers[i] < numbers[i+1]) {
            let posisao = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = posisao;            
        }        
    }    
}
console.log(numbers);

//3ºexercício - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];
for (let index = 0; index < numbers.length; index++) {
    if(isNaN(numbers[index+1])){
        numbersMulti.push(numbers[index]*2);
    }else{
        numbersMulti.push(numbers[index]*numbers[index+1]);
    }
}

console.log(numbersMulti);