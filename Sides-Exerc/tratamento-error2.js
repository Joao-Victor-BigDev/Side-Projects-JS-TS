function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 19:20:12') // data quebrada mas mesmo assim ele aceita por estar em estancia de Date.
    const hora = retornaHora(dia15);
    console.log(hora);
} catch(e) {
    console.log('Error: Esperando estancia de new Date ou Formato.')
} finally {
    console.log('Tenha um bom dia.')
}