const nome=prompt("Digite o nome do turista:");
let jaVisitou=prompt("Ja visitou alguma cidade?");
let cidades=""
let contador=0;

while(jaVisitou==="sim"){                        //pergunta se visitou uma cidade
  let listaCidade=prompt("Qual é a cidade?");    //cria uma variavel listaCidade e pergunta qual é a cidade
  cidades += " - " + listaCidade + "\n";         //atribui o  "-" e concatena com a variavel listaCidade e concatena pra pular de linha salvando tudod entro da variavel cidades
  contador++;                                    //incrementa 1 na variavel contador
  jaVisitou=prompt("Ja visitou outra cidade?");  //substitui o valor atual da variavel jaVisitou perguntando se visitou outra cidade
}

alert("O turista "+ nome + " \nvisitou "+ contador +" cidades:\n" + cidades );