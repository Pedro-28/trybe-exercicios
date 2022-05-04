let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4º exercício
function lastDweller(array) {
  const person = array.blocoDois[1];
  const { nome, sobrenome, andar, apartamento } = person;
  return `O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}° andar, apartamento ${apartamento}.`;
}

console.log(lastDweller(moradores));

// 5º exercício

function dwellers(array) {
  for (const i in array.blocoUm) {
    console.log(`${array.blocoUm[i].nome} ${array.blocoUm[i].sobrenome}`);
  }
  for (const i in array.blocoDois) {
    console.log(`${array.blocoDois[i].nome} ${array.blocoDois[i].sobrenome}`);
  }
}

dwellers(moradores);
