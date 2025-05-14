// O que é uma função?
// Uma função é basicamente uma caixa onde você guarda um código para usar depois, sempre que precisar.

// Funções normais

// Aqui eu criei uma função com o nome 'cumprimentar'.
// Como ela não precisa de nenhum dado externo, ela não tem parâmetros.
// Ela só precisa mostrar a frase no console.
function cumprimentar() {
  console.log('Olá, seja bem vindo(a)');
};

// Já aqui, a função 'mostrarIdade' precisa de um dado externo, então ela recebe um parâmetro chamado 'idade'.
// Esse parâmetro vai ser usado para armazenar o dado externo.
function mostrarIdade(idade) {
  // isNaN = "is Not a Number" → "é Não um Número" (sim, a tradução é confusa).
  // Mas, no caso de ser usado junto com o if, podemos entender assim: "Se idade NÃO for um número, então..."
  // Ele verifica se o valor contido dentro do parâmetro idade é ou não um número.
  // Se não for, então será mostrada a mensagem: "Ei! Eu esperava um número!"
  if (isNaN(idade)) {
    return console.log('Ei! Eu esperava um número!');
  };

  // Se for um número, então será mostrada a seguinte mensagem:
  // "Você tem 'valor do dado externo' anos de idade"
  console.log(`Você tem ${idade} anos de idade!`);

  // Esse é um exemplo de como usar quebras de linha da forma correta.
  // Você só poderá usar quebras de linha se o seu texto estiver dentro de crases (` `),
  // se não estiver dentro de crases, não vai funcionar de forma alguma.
  // E tudo dentro das crases será considerado um texto, então o <h1> também virou um texto.
  const teste = `
    <h1>
      Esse é meu texto com quebra de linha que é respeitado!
    </h1>
  `

  // Aqui define que a variável 'teste' será mostrada no console.
  console.log(teste);
}

// Sempre que você criar uma função, precisa chamá-la para ver o resultado.
// Aqui estamos passando o valor 23 para testar a função.
mostrarIdade(23);

// Aqui eu criei uma função chamada dobrar que recebe o parâmetro numero e retorna esse parâmetro vezes 2
// Então o valor que estiver dentro do parâmetro numero será feito vezes 2
function dobrar(numero) {
  return numero * 2;
};

// já aqui eu criei uma variável chamada resultado que recebe o parâmetro dobrar e o valor contido dentro dele
let resultado = dobrar(5);
console.log(resultado); // 10

// Se por acaso você não receber o dado externo necessário, você pode definir um valor padrão
// Criei uma função chamada cumprimentar que recebe o parâmetro nome, que recebe o valor 'visitante'.
// No console será mostrado `Olá, (valor padrão ou valor do dado externo)!`
function cumprimentar(nome = 'visitante') {
  console.log(`Olá, ${nome}!`);
};

// valor padrão
cumprimentar(); // Olá, visitante!
// valor externo 
cumprimentar('GB'); // Olá, GB!

// Criei uma função chamada somar que recebe dois parâmetros a e b, que são usados como uma caixa vazia
// E retorna a soma dos valores armazenados nesses dois parâmetros
function somar(a, b) {
  return a + b;
};

// Aqui eu criei uma segunda função chamada mostrarResultado que também recebe dois parâmetros x e y.
// Para mostrar a mensagem no console usei o console.log
// Para calcular a soma de x e y, a função chama somar(x, y), ou seja, usa a primeira função para fazer a conta.
function mostraResultado(x, y) {
  console.log(`O resultado é ${somar(x, y)}`);
};

mostraResultado(3, 7); // o resultado é 10
// Em resumo a função somar faz a conta e a função mostrarResultado organiza a mensagem usando o resultado dessa conta

// Arrow Function:
// Como o nome já diz, é uma função em linha. Ela serve para simplificar o jeito tradicional de criar uma função,
// mas ela tem algumas diferenças. Uma das diferenças é que só dá pra usar uma arrow function dentro de uma variável

// Ex: aqui eu criei uma variável constante (no qual o valor não poderá ser alterado depois) chamada msgDeBoasVindas que 
// recebe uma arrow function anônima (não tem um nome definido), que não contém um parâmetro e retorna a mensagem 'Olá, 
// seja bem vindo(a)' no console quando for chamada
const msgDeBoasVindas = () => {
  console.log('Olá, seja bem vindo(a)');
};

msgDeBoasVindas(); // aqui eu estou chamando a função 

// Criei uma variável constante chamada 'somar' que recebe uma arrow function (= () =>) com dois parâmetros: a e b.
// Esses parâmetros são como caixas vazias, onde você pode colocar qualquer valor (número, texto ou qualquer tipo de dado) 
// quando chamar a função.
// Essa função vai retornar a soma dos dois valores recebidos.
const somarArrow = (a, b) => {
  return a + b;
};

// Aqui o valor 5 vai para a caixa 'a' e o 7 para a caixa 'b'. 
// A função retorna a soma e mostra no console.
console.log(somarArrow(5, 7));

// Uma pergunta que você pode estar se fazendo é: "Por que não colocar os números direto na função?"
// Você até pode, mas o ideal é usar parâmetros como 'a' e 'b' porque isso deixa a função mais flexível e reutilizável.
// Quando você usa 'a' e 'b' (ou nomes) você está dizendo: "Essa função pode somar qualquer número que eu colocar dentro dessas caixas"
// Assim, você pode usar a mesma função para somar qualquer número, sem precisar reescrever o código.

// Ex: quando usamos números pré-definidos sempre será mostrado o mesmo resultado 
const soma = () => {
  return 5 + 7;
};

console.log(soma()); // Vai sempre mostrar: 12

// Arrow Function que tem apenas um parâmetro não precisa de parênteses
// Criei uma variável constante chamada mostrarNome que recebe uma função anônima com o parâmetro nome 
// E mostra no console `Olá, (valor do dado externo)!`
const mostrarNome = nome => {
  console.log(`Olá, ${nome}!`);
};

// chamando a função
mostrarNome('GB');

// Arrow functions com apenas uma linha podem omitir as chaves {} e o 'return'
// Criei uma variável constante chamada dobrar que recebe a função anônima com o parâmetro numero, que retorna o valor contido dentro do parâmetro vezes 2 
const dobrarArrow = numero => numero * 2;

// aqui estou chamando a função
console.log(dobrarArrow(4)); // resultado = 8
