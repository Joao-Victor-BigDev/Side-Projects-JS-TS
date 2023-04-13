// IIFE -> Immediaty Invoked function expression
(function (){
    const nome = 'BigJ';
    console.log(nome);
})();
// temos que executar no final da function pois ela nao toca no escopo global.

(function (){
    function falaOi(nome){
        console.log(`Oi ${nome}`)
    };
    falaOi('Marcelo');
})();
// tambem podendo atribuir function declaradas dentro das IIFE.
(function (idade, peso, altura){
    function falaOi(nome){
        console.log(`Oi ${nome}`)
        console.log(`Voce tem ${idade} anos`)
        console.log(`Pesa ${peso}kg e tem a altura de ${altura}kg`)
    };
    falaOi('Joao');
})(25, 130, 1.85); // tambem podendo passar parametros dentro de uma IIFE. para executalo no final dela.
