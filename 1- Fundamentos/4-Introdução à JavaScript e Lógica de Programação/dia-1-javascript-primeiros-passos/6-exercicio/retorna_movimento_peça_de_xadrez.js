let peçaXadrez = "RAINHA";
switch(peçaXadrez.toLowerCase()){
    case "rei":
        console.log("Pode mover-se uma casa em qualquer direção.");
        break;    

    case "rainha":
        console.log("Pode mover-se qualquer número de casas em linha reta verticalmente, horizontalmente ou diagonalmente.");
        break;

    case "cavalo":
        console.log("Pode mover-se em L, duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal.");
        break;

    case "torre":
        console.log("Pode mover-se qualquer número de casas em linha reta horizontalmente ou q verticalmente.");
        break;

    case "bispo":
        console.log("Pode mover-se qualquer número de casas em linha reta diagonalmente.");
        break;

    case "peão":
        console.log("Pode mover-se somente para frente, uma casa por vez. Com exceção na primeira vez, quando ele pode se mover duas casas.");
        break;

    default:
        console.log("Erro");
}