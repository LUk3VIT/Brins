const botaoMenu = document.querySelector('.nav-button');
const box = document.querySelector('.box--nav');

botaoMenu.addEventListener('click', () => {
    box.classList.toggle('box--nav__ativo');
})