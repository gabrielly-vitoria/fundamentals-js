// estruturas de repetição 

// modo fácil

// usamos for quando sabemos quantas vezes havera repetição.
// e o let serve para criar uma variavel de forma segura e armazenar as informações de uma forma segura, protegendo o código de erros no futuro


//  Bora enetender a estrutura do for:
// Dentro do for, eu criei uma variavel chamada i (indice) usando let, que começa armazenando o valor 1 (i = 1).
// Enquanto o valor contido dentro da variavel indice for menor ou igual a 10 (i <= 10), o código será executado.
// Após executar o código, será adicionado +1 ao indice (i++) 
// Quando o valor da variavel indice ficar maior que 10, o for para automaticamente, porque a condição (i <= 10) vira false, 
// ai o loop termina
// No console será mostrado o texto "Opa olha o numirus" junto do indice  
for (let i = 1; i <= 10; i++) {
    console.log("Opa olha o numirus" + i);
};


// No while, declaramos o let fora, porque o while só controla a condição. Ele só tem espaço para definir se aquela informação é falsa ou não, por isso o inicio e o incremento fazemos por fora 

// Começamos com a variavel chamada contador valendo 1
let contador = 1;


// Usamos while quando não sabemos exatamente quantas vezes vamos repetir

// Enquanto o valor contido dentro da variavel contador for menor ou igual a 10 o while continua a repetir o código, senão
// ele para automaticamente
// Mostramos a mesangem junto ao valor no console. 
// Após a mensagem ser mostrada aumentamos 1 ao valor contido dentro da variavel contador 
while (contador <= 10) {
    console.log("Olá numirus" + contador);
    contador++;
};

// Criei uma variavel chamada i (indice) novamente, mas dessa vez ela vale 2.
// Se o valor contido dentro dessa variavel for menor ou igual a 20 então será exutado o código.
// E após ser executado vai ser adicionado +1 ao valor contido dentro da variavel indice.
// E no console parecera o texto "numiru" + o valor contido dentro da variavel
for (let i = 2; i <= 20; i++) {
    console.log("numiru" + i);
};

// nivel médio

// Primeiro criamos a variável "soma" e colocamos o valor inicial 0 nela.
// Essa variável "soma" vai guardar o resultado da soma de todos os números de 1 até 100.
let soma = 0;

// Depois, criamos a estrutura de repetição "for".
// Dentro do "for" criamos uma variável chamada "i" (índice), que começa com o valor 1.

// Enquanto o valor da variável "i" for menor ou igual a 100, o código dentro das chaves { } será executado.

// Depois de cada execução, o "i" aumenta +1 (por causa do i++).

// Dentro do "for", usamos a linha "soma += i;" que é uma forma resumida de escrever:
// "soma = soma + i", ou seja:
// - Pegamos o valor que já está guardado dentro da variável "soma"
// - Somamos com o valor atual do "i"
// - E guardamos o novo resultado dentro da própria variável "soma".

// Isso vai acontecer para todos os valores de 1 até 100.

// Quando o "i" ficar maior que 100, o "for" para automaticamente.
for (let i = 1; i <= 100; i++) {
    soma += i;
}

// No final, mostramos o resultado no console:
console.log("A soma de 1 até 100 é " + soma);


// criei uma variavel que se chama numero que recebe um parseInt e um prompt
// parseInt = ele é responsavel por transformar o que o usuario digitou em um número inteiro 
// prompt = o prompt é responsável por pedir para o usuário digitar o texto na tela do navegador, mas como o prompt sempre desenvolve uma string (texto), ele precisa do parseInt para transformar a resposta do usuário em número.
let numero = parseInt(prompt("Digite um número para ver a tabuada"));

// Depois, criamos um for:
// A variável i (índice) começa valendo 1.
// Enquanto o valor de i for menor ou igual a 10, o código dentro do for será executado.
// A cada repetição, adicionamos +1 ao valor de i (i++).
// No console será mostrado o cálculo da tabuada: o número digitado pelo usuário, que estara armazenado na variavel NUMERO vezes ("x") o valor do i(variavel indice), seguindo o formato: "número x i = resultado".
for (let i =  1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i));
};

// Aqui eu criei duas variáveis:
// "number" que começa valendo 0 - ela vai armazenar o valor que o usuário digitar.
// "add" também começa valendo 0 - vai ser usada para acumular a soma dos valores digitados pelo usuário.

let number = 0;
let add = 0;

// O do...while é parecido com o while, mas ele serve para repetir o código até que uma condição seja considerada falsa
// O "do" (fazer) garante que o código dentro dele seja executado pelo menos uma vez sem nem perguntar nada antes.

// Dentro do "do" mostramos uma caixa prompt pedindo para o usuário digitar um número.
// Como já sabemos o prompt sempre pega a resposta do usuário como texto, então usamos parseInt para transformar esse 
// texto em número.
// E tudo que o usuario escrever no prompt vai para a variavel number
// Depois o valor armazenado na variável number é somado ao valor que já está armazenado na variável add.
// durante esse processo o while verifica se o número que foi digitado é um 0 ou não, se for ele para o loop automaticamente 
do {
    number = parseInt(prompt("Digite um número ( digite 0 para parar):"));
    // esse simbolo += é uma forma resumida de escrever add = add + number;, que significa que ele vai pegar o valor antigo 
    // da variavel add e vai somar com o novo valor da variavel number, e depois guarda o resultado da soma novamente na 
    // variavel add
    add += number;
} while (number !== 0);

// Depois que o usuario digitar 0 e o loop parar, vai ser mostrado no console a mensagem "A soma dos números digitados é:" 
// seguido do valor que ficou armazenado dentro da variavel add
console.log("A soma dos números digitados é:" + add);


