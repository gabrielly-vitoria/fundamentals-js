// Aqui eu defini que essa página será mostrada no navegador
'use client'

// Importei o useState e o useEffect da biblioteca React
import { useState, useEffect } from 'react'

// Exportei de forma padrão a função TemporizadorPage 
export default function TemporizadorPage() {
  // Dentro da função, criei uma variavel constante com useState que cria duas coisas:
  // uma variável (segundos) que armazena o valor atual, e uma função (setSegundos) que atualiza esse valor.
  const [segundos, setSegundos] = useState(0)

  // O useEffect define que assim que a página for aberta, o que estiver aqui dentro do escopo será executado automaticamente
  useEffect(() => {
    // Criei uma variavel constante chamada intervalo que recebe a função setInterval.
    // Essa função vai executar o seguinte: o setSegundos vai aumentar o valor contido dentro da variavel segundos em 1 a cada 1 segundo
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1)
    }, 1000)

    // O return limpa o intervalo quando a página for fechada
    return () => clearInterval(intervalo)
  }, [])

  // Essa é a parte que aparece visualmente no navegador
  return (
    <div>
      <h1>Temporizador</h1>
      <p>Tempo na tela: {segundos}s</p>
    </div>
  )
}
