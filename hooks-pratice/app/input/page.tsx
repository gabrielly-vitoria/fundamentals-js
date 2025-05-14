// defini que essa página vai ser visível para o cliente (navegador)
'use client'

// importei o useRef do React
import { useRef } from "react"

// exportei de forma padrão a função Input
export default function Input() {
  // criei uma referência chamada inputRef usando o useRef
  // useRef é uma função do React que cria uma "etiqueta" que aponta pra um elemento HTML
  // <HTMLInputElement | null> é usado no TypeScript e significa que essa referência pode ser um input ou null (nada)
  // no começo ela é null, mas depois o React liga essa referência ao <input> que aparece na tela
  const inputRef = useRef<HTMLInputElement | null>(null) 

  // criei uma variável constante chamada focar, que recebe uma arrow function
  const focar = () => {
    // se o input existir, então executa o que está dentro do escopo
    if (inputRef.current) {
      // foca no input (coloca o cursor dentro dele)
      inputRef.current.focus()
      // limpa o conteúdo que estiver escrito no input
      inputRef.current.value = ""
    }
  }

  // parte visual da tela
  return (
    <div>
      <h1>
        Input com foco
      </h1>
      {/* o ref aqui é como se colasse a etiqueta inputRef no input */}
      <input ref={inputRef} placeholder="Digite algo" />
      
      {/* botão que, ao ser clicado, chama a função focar */}
      <button onClick={focar}>limpar</button>
    </div>
  )
}
