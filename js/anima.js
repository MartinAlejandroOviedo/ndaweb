
    // Función para generar burbujas animadas
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('circle');
        
        // Posicionamiento y tamaño aleatorio de las burbujas
        const size = Math.random() * 100 + 20; // Tamaño entre 20 y 120px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = '-150px'; // Inicia fuera de la pantalla

        // Añadir la burbuja al contenedor de animación
        document.getElementById('bg-animation').appendChild(bubble);

        // Animar la burbuja hacia arriba
        anime({
            targets: bubble,
            translateY: -window.innerHeight - size,
            duration: 5000 + Math.random() * 3000, // Duración entre 5s y 8s
            easing: 'easeOutQuad',
            opacity: [0.5, 0],
            complete: function() {
                // Remover la burbuja cuando la animación termine
                bubble.remove();
            }
        });
    }

    // Crear burbujas de manera continua
    setInterval(createBubble, 500); // Crear una burbuja cada 500ms

