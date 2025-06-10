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

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.about-info', { origin: 'top'});