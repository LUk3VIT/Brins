const botaoMenu = document.querySelector('.nav-button');
const box = document.querySelector('.box--nav');
const recomendacao = document.querySelector('.recomendacao');
const destaque = document.querySelector('.sem-menu');

botaoMenu.addEventListener('click', () => {
    box.classList.toggle('box--nav__ativo');
    recomendacao.classList.toggle('recomendacao__ativo');
    destaque.classList.toggle('com-menu');
});

console.log(destaque)

