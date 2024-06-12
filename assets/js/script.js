// script.js
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('typewriter-text');
  const text = textElement.innerText;
  let index = 0;

  textElement.innerHTML = '';

  function type() {
      if (index < text.length) {
          textElement.innerHTML += text[index] === ' ' ? '&nbsp;' : text[index];
          index++;
          setTimeout(type, 100); // Ajusta la velocidad de tipeo cambiando el valor de 100
      }
  }

  type();
});
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona los íconos y los contenedores de imágenes
  const frontendIcon = document.getElementById("frontend-icon");
  const backendIcon = document.getElementById("backend-icon");
  const frontendImages = document.getElementById("frontend-images");
  const backendImages = document.getElementById("backend-images");

  // Añade el manejador de eventos de clic para el ícono frontend
  frontendIcon.addEventListener("click", function() {
    // Alterna la clase "active" en el contenedor de imágenes frontend
    frontendImages.classList.toggle("active");
    backendImages.classList.remove("active"); // Cierra el otro contenedor
  });

  // Añade el manejador de eventos de clic para el ícono backend
  backendIcon.addEventListener("click", function() {
    // Alterna la clase "active" en el contenedor de imágenes backend
    backendImages.classList.toggle("active");
    frontendImages.classList.remove("active"); // Cierra el otro contenedor
  });
});