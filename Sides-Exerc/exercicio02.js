function ePaisagem(largura, altura) {
  if (largura = altura) {
    return `${largura}x${altura} tem o modo quadrado`;
  }
  return largura > altura ? `${largura}x${altura} tem o modo paisagem` : `${largura}x${altura} tem o modo de retrato`
}

console.log(ePaisagem(1080, 1920));