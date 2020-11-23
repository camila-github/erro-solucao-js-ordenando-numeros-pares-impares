## Treinamento Digital Innovation One - Exercicio - Ordenando números pares e impares

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Ordenação e Filtro em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Crie um programa onde você receberá valores inteiros não negativos como entrada. Ordene estes valores de acordo com o seguinte critério:
Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.


#### Entrada:

A primeira linha de entrada contém um único inteiro positivo N (1 < N < 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.


#### Saída:

Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
10 | 4
4 | 32
32 | 34
34 | 98
543 | 654
3456 | 3456
654 | 6789
567 | 567
87 | 543
6789 | 87
98 |



#### Javascript

```javascript
//SOLUÇÃO 1
/*Declaração da variaveis*/
var idxPar = 0;
var idxImpar = 0;
var vPar = [];
var vImpar = [];

/* Faz leitura de todos os itens de entrada 
e chama a função funcParImpar() para validar se o numero é par ou impar.*/
let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itens = gets();
    funcParImpar(parseInt(itens));
}

/*valida se o numero é par ou impar e adiciona o numero no array*/
function funcParImpar(n) {
    (n % 2 === 0) ? vPar[++idxPar] = n: vImpar[++idxImpar] = n;
}

/*Ordenar os numeros pares em ordem crescente.Imprime o item par, linha por linha*/
vPar.sort((a, b) => a - b).forEach(function(item) {
    console.log(item);
});

/*Ordenar os numeros impares em ordem crescente
Inverte a ordem crescente para a ordem  decrescente dos numeros impares
Imprime o item impar, linha por linha*/
vImpar.sort((a, b) => a - b).reverse().forEach(function(item) {
    console.log(item);
});


//SOLUÇÃO 2 - Resumido
/*Declaração da variaveis*/
idxPar = 0;
idxImpar = 0;
vPar = [];
vImpar = [];

/* Faz leitura de todos os itens de entrada e chama a função funcParImpar()*/
totalItems = gets();
for (i = 0; i < totalItems; i++) funcParImpar(parseInt(gets()));

/*valida se o numero é par ou impar e adiciona o numero no array*/
function funcParImpar(num) {
    (num % 2 === 0) ? vPar[++idxPar] = num: vImpar[++idxImpar] = num;
}

/*Ordena numeros pares, ordem crescente.Imprime o item par, linha por linha*/
vPar.sort((a, b) => a - b).forEach((item) => console.log(item));

/*Ordenar numeros impares ordem crescente e inverte a ordem crescente para a ordem decrescente
Imprime o item impar, linha por linha*/
vImpar.sort((a, b) => a - b).reverse().forEach((item) => console.log(item));
```

