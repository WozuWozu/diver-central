
const navPad = document.getElementById('nav-pad');
const burgur = document.getElementById('burgur');

burgur.addEventListener('click', () => {
    navPad.classList.toggle('active');
})

const erase = document.getElementById('erase');

erase.addEventListener('click', () => {
    navPad.classList.toggle('active');
})