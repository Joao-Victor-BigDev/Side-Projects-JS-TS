function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

// function interval() {
//     console.log(mostrarHora());
// } aqui podemos usar uma funcao anonima direto no setInterval

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    clearInterval(console.log('Fim de codigo !'));
}, 4000);