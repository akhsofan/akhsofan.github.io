// Ambil semua elemen dengan class .scroll-link
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Ambil nilai data-target untuk mengetahui target section
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        // Lakukan smooth scroll ke target section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});