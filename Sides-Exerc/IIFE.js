// IIFE -> Immediaty Invoked function expression
(function (){
    const nome = 'BigJ';
    console.log(nome);
})();
// temos que executar no final da function pois ela nao toca no escopo global.

(function (){
    const nome = 'Big';
    function falaOi(){
        console.log(`Oi ${nome}`)
    };
    falaOi();
})();
// tambem podendo atribuir function declaradas dentro das IIFE.