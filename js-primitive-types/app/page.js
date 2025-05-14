// Tipos primitivos 

// Tipos primitivos são dados mais básicos do js, que não chegam a ser objetos e não tem metodos, ele representam valores simples e imutaveis
// Ex de tipos: 
//String	"Olá, mundo"	Texto.
//Number	42, 3.14	Números (inteiros ou decimais).
//BigInt	123456789012345678901234567890n	Números inteiros mucho grandes
//Boolean	true, false	Valores (verdadeiro ou falso).
//Undefined Valor de uma variável que ainda não tem valor definido.
// Null		Intencionalmente vazio, sem valor.
// Symbol	Symbol('id') identificador unico

// A variável nome recebe o valor "Gabrielly"
let nome = 'Gabrielly' // 'Gabrielly' é uma string. O que define se é string são as "", '' ou ``

let sobrenome = 'Vitória'

// Combina os valores das variáveis nome e sobrenome. O ' ' (espaço) serve para separar os nomes.
let nomeCompleto = nome + ' ' + sobrenome
let nomeCompletoDois = `${nome} ${sobrenome}`

// A variável idade recebe o valor 17 
let idade = 17

// A variável dataDeNascimento recebe o valor new Date(), que é um objeto de data.
// Dentro dele estão os valores 2007, 8, 3 que representam o ano, o mês e o dia.
// Lembrando que no JS os meses começam do zero, então 8 representa Setembro.
let dataDeNascimento = new Date(2007, 8, 3)

// A variável maiorDeIdade recebe o valor false
// false é um tipo boolean, que só pode ter dois valores: true (verdadeiro) ou false (falso).
// Esse tipo é usado quando queremos representar algo que pode ser sim ou não, ligado ou desligado, verdadeiro ou falso, etc.
let maiordeIdade = false

//vamos fazer um exemplo prático para entender melhor
// a variavel maiorDeIdade recebe o valor idade que contem dentro dele as seguintes condições, idade é igual ou maior que 
// 18 ? (? = se sim) o resultado retorna true(verdadeiro) senão (: = senão)retorna false(falso)
let maiorDeIdade = idade >= 18 ? true : false; 

// A variável telefone recebe o valor null
// null é um valor que representa "vazio" de forma proposital.
// Por exemplo: quando sabemos que algo ainda não tem valor, mas queremos deixar isso claro.
//para ter um exemplo prático teriamos que usar if e else, mas vamos deixar isso para a próxima etapa dos nossos estudos.
let telefone = null

// A variável endereco foi declarada mas não recebeu nenhum valor
// Quando uma variável é criada sem valor, o JavaScript automaticamente atribui o tipo undefined (indefinido).
let endereco

// A variável identificador recebe o valor Symbol('id')
// Symbol é um tipo primitivo usado para criar identificadores únicos.
// Mesmo que dois símbolos tenham a mesma descrição, eles nunca serão iguais.
let identificador = Symbol('id')
let nomeSymbol = Symbol('nome')
let Lista = {
  [nomeSymbol]: 'juninho',
  [nomeSymbol]: 'juninho'
}
console.log(Lista)

// A variável numeroEnorme recebe um número inteiro muito grande, com um 'n' no final
// Esse 'n' transforma o número em um tipo chamado BigInt, usado quando queremos trabalhar com números maiores do que o
//  Number suporta.
let numeroEnorme = 1234567891011121314151617736498752675265631567527635147653762576325852738321581958432642642646231181920n

function abobra() {

};
console.log("Fuuuuuu", abobra());

const listaDeCompras = [
  1,
  false,
  'feijão', 
  'arroz',
  'limão',
  'açúcar'
];
console.log(listaDeCompras[2])
let list = {
  'um':'feijão',
  'dois':'arroz',
  'tres':'macarrão'
}
console.log(list.dois)


listaDeCompras.splice(0, 3)
let ima = listaDeCompras.join(", ")


console.log(ima)
