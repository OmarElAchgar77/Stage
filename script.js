let loader = document.getElementById('preloader');
window.addEventListener("load", function() {
    loader.style.display = 'none' ;
})

const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById("close");

bar.addEventListener('click', () => {
    navbar.classList.add('activeBar');
});

close.addEventListener("click", () => {
    navbar.classList.remove('activeBar');
})
