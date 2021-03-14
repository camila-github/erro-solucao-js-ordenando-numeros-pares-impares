//SOLUCAO 1 
let idxPar = 0;
let idxImpar = 0;
let arrNumerosPares = [];
let arrNumerosImpares = [];

const numeroLinhasDeEntrada = gets();
for (i = 0; i < numeroLinhasDeEntrada; i++) separaNumerosParesImpares(parseInt(gets()));

function separaNumerosParesImpares(num) {
    (num % 2 === 0) ? arrNumerosPares[++idxPar] = num: arrNumerosImpares[++idxImpar] = num;
}

arrNumerosPares.sort((a, b) => a - b).forEach((item) => console.log(item));
arrNumerosImpares.sort((a, b) => a - b).reverse().forEach((item) => console.log(item));


//SOLUCAO 2
var idxPar = 0;
var idxImpar = 0;
var vPar = [];
var vImpar = [];

var totalItems = gets();
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