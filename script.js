const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) { 
        section.classList.add('show');
    }
});
});

let loader = document.getElementById('preloader');
window.addEventListener("load", function() {
    loader.style.display = 'none' ;
})
