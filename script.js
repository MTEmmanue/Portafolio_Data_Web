document.addEventListener('DOMContentLoaded', function() {
    const texts = ['Analista de Datos', 'Científico de Datos'];
    const typingElement = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Borrar caracter
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Escribir caracter
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Cambiar entre escribir y borrar
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pausa al final
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pausa antes de empezar
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar el efecto de escritura
    type();
});


document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura
    const texts = ['Analista de Datos', 'Científico de Datos'];
    const typingElement = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Borrar caracter
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Escribir caracter
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Cambiar entre escribir y borrar
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pausa al final
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pausa antes de empezar
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar el efecto de escritura
    type();
    
    // Animaciones para elementos de la página principal
    function animateHomeElements() {
        const elementsToAnimate = [
            '.hi-text',
            'h1',
            'h2',
            '.description',
            '.social-links',
            '.buttons',
            '.stats-container',
            '.profile-image',
            '.tech-icons .icon'
        ];
        
        elementsToAnimate.forEach((selector, index) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 150);
            });
        });
        
        // Animación específica para iconos de tecnología
        const techIcons = document.querySelectorAll('.tech-icons .icon');
        techIcons.forEach((icon, iconIndex) => {
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
            }, 1000 + (iconIndex * 150));
        });
    }
    
    // Iniciar animaciones
    setTimeout(animateHomeElements, 100);
});

/* ========================================================================= */
/* EFECTO DE SCROLL: Animar secciones de abajo hacia arriba */
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las secciones que queremos animar
    const sections = document.querySelectorAll(
        '#sobre-mi, #proyectos, #experiencia, #habilidades, #contacto'
    );
    
    // Agregar clase de animación a cada sección
    sections.forEach(section => {
        section.classList.add('section-reveal');
    });
    
    // Crear observador para detectar cuando las secciones entran en pantalla
    const observerOptions = {
        threshold: 0.1,  // Inicia cuando el 10% de la sección es visible
        rootMargin: '0px 0px -100px 0px'  // Inicia un poco antes
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Si la sección entra en pantalla, activar la animación
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Opcional: dejar de observar después de animar para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
});

/* ========================================================================= */
/* SCROLL SPY: Actualizar menú activo según la sección visible */
/* ========================================================================= */

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del menú y las secciones
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Configurar el observador para detectar qué sección está visible
    const scrollSpyOptions = {
        threshold: 0.1,  // Activa cuando el 10% de la sección es visible
        rootMargin: '0px 0px -30% 0px'  // Menos restrictivo para secciones pequeñas
    };
    
    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtener el ID de la sección visible
                const sectionId = entry.target.getAttribute('id');
                
                // Remover clase active de todos los enlaces
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Agregar clase active al enlace correspondiente
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, scrollSpyOptions);
    
    // Observar todas las secciones
    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });
});