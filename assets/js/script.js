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
