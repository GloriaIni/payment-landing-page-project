const hamMenu = document.querySelector('.hamburger');

const hiddenMenu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenMenu.classList.toggle('active')
})