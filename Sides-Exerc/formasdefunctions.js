// Declaracao de funcao (function hoisting)
falaOi();
function falaOi() {
    console.log('ola');
};

//First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

function executaFunction(funcao) {
    funcao();
};
executaFunction(souUmDado);

// arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow Function');
};
funcaoArrow();

const funcaoArrow2 = () => console.log('Sou uma arrow Function encurtada');
funcaoArrow2();

// Dentro de um Objeto

const obj = {
    falar: function (){
        console.log('estou falando')
    }
};
obj.falar();

const obj2 = {
    falar() {
        console.log('estou falando encurtado')
    }
};
obj2.falar();