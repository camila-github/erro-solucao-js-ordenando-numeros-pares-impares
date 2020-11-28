//SOLUCAO 1
var idxPar = 0;
var idxImpar = 0;
var vPar = [];
var vImpar = [];

let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itens = gets();
    funcParImpar(parseInt(itens));
}

function funcParImpar(n) {
    (n % 2 === 0) ? vPar[++idxPar] = n: vImpar[++idxImpar] = n;
}

vPar.sort((a, b) => a - b).forEach(function(item) {
    console.log(item);
});

vImpar.sort((a, b) => a - b).reverse().forEach(function(item) {
    console.log(item);
});


//SOLUÇÃO 2 - Resumido
idxPar = 0;
idxImpar = 0;
vPar = [];
vImpar = [];

totalItems = gets();
for (i = 0; i < totalItems; i++) funcParImpar(parseInt(gets()));

function funcParImpar(num) {
    (num % 2 === 0) ? vPar[++idxPar] = num: vImpar[++idxImpar] = num;
}

vPar.sort((a, b) => a - b).forEach((item) => console.log(item));

vImpar.sort((a, b) => a - b).reverse().forEach((item) => console.log(item));