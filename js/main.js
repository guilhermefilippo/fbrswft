// Smooth scrolling para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação nos cards quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.feature-card, .infrastructure-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Validação e envio do formulário
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Detectar idioma da página
    const isEnglish = document.documentElement.lang === 'en-US';
    const message = isEnglish 
        ? 'Thank you! Our team will contact you within 2 business hours.'
        : 'Obrigado! Nossa equipe entrará em contato em até 2 horas úteis.';
    
    alert(message);
    
    // Reset do formulário
    this.reset();
});