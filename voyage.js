

const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
burger.addEventListener('click', ()=> { // Pour rendre une div cliquable 
    burger.classList.toggle('open')
    nav.classList.toggle('nav-open')
})