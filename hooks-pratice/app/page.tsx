// aqui eu estou definindo que está página vai ser visisvel para o cliente
'use client'

// Aqui eu estou importando o useState da biblioteca React
import { useState } from "react";

// Aqui eu estou exportando de forma padrão a função home
export default function Home() {
  // Criei uma variavel constante que utiliza o useState para criar uma caixa (contador), que vai ser responsavel por guardar o valor, já o setContador e o cara responsavel por modificar o valor contido dentro da caixa contador, ele vai modificar o valor de acordo com as condições que vão ser pré definidas, e usei o useState para definir que o contador vai começar armazenando o valor 0 
  const [Contador, setContador] = useState(0)

  // A função vai retornar 
  // uma div, com o h1 que armazena a variavel contador, para assim ele aparecer na tela do navegador e também os dois botões responsaveis por adicionar pontos ao contador e zerar o valor contido nele
  return (
    <div>
    <h1>Contador</h1>
    <h2>{Contador}</h2>
    {/*O botão recebe uma condição(onClick = quando o botão for clicado) no qual define que quando o botão for clicado vai ser executado a função setContador que vai somar +1 ao valor contido dentro da variavel contador .*/}
    <button onClick={() => setContador(Contador + 1)}>Adicionar</button>
    {/*Aqui vai ser a mesma coisa a diferença é que o setContador vai zerar o valor contido dentro da variavel contador quando o botão for clicado*/}
    <button onClick={() => setContador(0)}>Zerar</button>
  </div>
  );
}
