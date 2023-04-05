function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // valor passado na variavel criada da funcao quantifica o numero a ser duplicado;
console.log(triplica(2));
console.log(quadriplica(2));