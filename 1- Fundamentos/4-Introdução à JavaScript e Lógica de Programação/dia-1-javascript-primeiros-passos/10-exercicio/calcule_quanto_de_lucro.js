const custoProduto = 35;
const valorVenda = 60;
const valorCustoTotal = custoProduto*1.2;
const lucro = valorVenda-valorCustoTotal;
if(custoProduto<0||valorVenda<0){
    console.log("Erro");
}else{
    console.log("A empresa teve ", lucro*1000, " de lucro.");
}