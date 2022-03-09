let salarioBruto = 3000;
let INSS = 0;
let IR = 0;
if(salarioBruto<=1556.94){
    INSS = salarioBruto*0.08;
}else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    INSS = salarioBruto*0.09;
}else if(salarioBruto>=2594.93 && salarioBruto<=5189.82){
    INSS = salarioBruto*0.11;
}else if(salarioBruto>5189.82){
    INSS = 570.88;
}

let deduzidoINSS = salarioBruto-INSS;

if(deduzidoINSS<=1903.98){
    IR = 0;
}else if(deduzidoINSS>=1903.99 && deduzidoINSS<=2826.65){
    IR = (deduzidoINSS*0.075)-142.80;
}else if(deduzidoINSS>=2826.66 && deduzidoINSS<=3751.05){
    IR = (deduzidoINSS*0.15)-354.80;
}else if(deduzidoINSS>=3751.06 && deduzidoINSS<=4664.68){
    IR = (deduzidoINSS*0.225)-636.13;
}else if(deduzidoINSS>4664.68){
    IR = (deduzidoINSS*0.275)-869.36;
} 

let salarioLiquido = deduzidoINSS-IR;

console.log("O seu salário líquido é: ", salarioLiquido);