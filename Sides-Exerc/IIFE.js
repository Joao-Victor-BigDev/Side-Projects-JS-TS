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
