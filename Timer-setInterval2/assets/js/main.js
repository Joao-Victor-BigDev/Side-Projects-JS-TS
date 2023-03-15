function retornaHora(segundos) {
    const data = new Date(segundos * 1000); // aqui transformando em segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // aqui coloco pra 00 horas
    })
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = retornaHora(segundos);
    }, 1000)
}

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        relogio.classList.remove('zerou')
        clearInterval(timer);
        iniciaRelogio();
    };
    if(elemento.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado')
    }
    if(elemento.classList.contains('zerar')){
        relogio.classList.add('zerou')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})
