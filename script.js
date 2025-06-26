let loader = document.getElementById('preloader');
window.addEventListener("load", function() {
    loader.style.display = 'none' ;
})

// navigation bar of mobile
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById("close");

bar.addEventListener('click', () => {
    navbar.classList.add('activeBar');
});

close.addEventListener("click", () => {
    navbar.classList.remove('activeBar');
})


function togglePassword() {
    const input = document.getElementById("passwd");
    const button = event.target; // get l'element cliquer "img"

    if (input.type === "password") {
        input.type = "text";
        button.src = "images/open-eye.png";
    } else {
        input.type = "password";
        button.src = "images/eyes.png";
    }
}
