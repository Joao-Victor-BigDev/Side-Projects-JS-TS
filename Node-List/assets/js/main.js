const divP = document.querySelector('.paragrafos')
const paragrafos = divP.querySelectorAll('p')
const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

for (let p of paragrafos) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = 'white';
}