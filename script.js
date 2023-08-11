document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector('.menuToggle');
    let header = document.querySelector('header');
    
    if(menuToggle && header) {
        menuToggle.onclick = function() {
            header.classList.toggle('active');
        }
    }
});