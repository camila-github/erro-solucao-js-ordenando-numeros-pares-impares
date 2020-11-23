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