// estruturas condicionais 

import { useState } from "react"

// A variável numero recebe o valor 55
let numero = 55

// if = se | else = senão | > maior que | = atribuição (guarda valor) | 1 === 1  idêntico a (compara valor e tipo) 
// % retorna o resto da divisão. Se o resto da divisão por 2 for 0, é par.

// Se o valor contido dentro da variável numero for maior ou igual a 0, será mostrado 'Positivo'
if (numero >= 0) {
  console.log('Positivo')
  // Senão, será mostrado 'Negativo'
} else {
  console.log('Negativo')
}

// A variável idade recebe o valor 17
let idade = 17

// Se a variável idade contiver um valor maior ou igual a 18, será mostrado 'Pode tirar a carteira'
if (idade >= 18) {
  console.log('Pode tirar a carteira')
  // Senão, será mostrado 'Espere mais um pouco'
} else {
  console.log('Espere mais um pouco')
}

// A variável usuario recebe o valor 'GB'
let usuario = 'GB'

// Se o valor da variável usuario for exatamente igual a 'GB', será mostrado 'Bem-vinda'
// Senão, será mostrado 'Usuário não conhecido'

// Por que usamos === e não = aqui?

// O sinal = é usado para guardar um valor dentro de uma variável. 
// Por exemplo: let usuario = 'GB' → aqui, estamos dizendo que a variável "usuario" agora tem o valor "GB".

// Já o sinal === é usado para comparar dois valores, e verificar se eles são IDÊNTICOS.
// Ele pergunta: "Esses dois valores são exatamente iguais? Tanto o conteúdo quanto o tipo?"

// let nome = 'GB' → aqui estamos dizendo: "nome agora vale GB"
// if (nome === 'GB') → aqui estamos perguntando: "nome é igual a GB?"

if (usuario === 'GB') {
  console.log('Bem-vinda, GB')
} else {
  console.log('Usuário não conhecido')
}

// A variável nota recebe o valor 10
let nota = 10

// Se a nota for maior ou igual a 9, será mostrado 'Aprovado com Louvor'
if (nota >= 9) {
  console.log('Aprovado com Louvor')
  // Senão, se for maior ou igual a 6, será mostrado 'Aprovado'
} else if (nota >= 6) {
  console.log('Aprovado')
  // Senão, se for maior ou igual a 4, será mostrado 'Recuperação'
} else if (nota >= 4) {
  console.log('Recuperação')
  // Senão (ou seja, se for menor que 4), será mostrado 'Reprovado'
} else {
  console.log('Reprovado')
}

// A variável number recebe o valor 4
let number = 4

// Se o resultado da divisão da quantia contida dentro da variável number por 2 for igual a 0, será mostrado 'Par'
if (number % 2 === 0) {
  console.log('Par')
  // Senão, será mostrado 'Ímpar'
} else {
  console.log('Ímpar')
}

// A variável produto recebe o valor 30 e a variável saldo recebe 500
let produto = 30
let [saldo, setSaldo] = useState(500)

let falha = saldo < produto // Se o saldo for menor que o valor do produto a variável falha armazena true, mas se o saldo for maior ou igual ao produto a variável falha armazena false

if(falha){
  let falta = saldo - produto
  console.log(`Saldo insuficiente. Você precisa de ${falta} reais a mais.`)
}; 
if(!falha){
  console.log(`Parabéns, você conseguiu!`)
  setSaldo(saldo - produto)
}

// Componente React básico, não exibe nada ainda
export default function Home() {
  return (
    <></>
  )
}
