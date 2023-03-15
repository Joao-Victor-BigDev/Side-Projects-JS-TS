function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números.')
    }
    return x + y
}

try {
    console.log(soma(1, 5));
    console.log(soma('2', 3))
} catch(ReferenceError) {
    console.log(ReferenceError)
    console.log('por favor digite numeros');
}