

document.addEventListener("DOMContentLoaded", () => {
  // Obtener todas las tarjetas y descripciones
  const cards = document.querySelectorAll('.card');
  const descriptions = document.querySelectorAll('.pasteleria-grupo-cuerpo');

  // Agregar evento click a cada tarjeta
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      // Verificar si la descripción está visible
      const isVisible = descriptions[index].style.display === 'block';

      // Ocultar todas las descripciones
      descriptions.forEach((desc) => {
        desc.style.display = 'none';
      });

      // Si la descripción no estaba visible, mostrarla
      if (!isVisible) {
        descriptions[index].style.display = 'block';
      }
    });
  });


  //form validation

  const email = document.getElementById("email");
  const nombre = document.getElementById("name");

  email.addEventListener("input", function (event) {
    if (email.validity.valid) {
      email.style.border = "3px solid green";
    } else {
      email.style.border = "3px solid red";
    }
  });

  nombre.addEventListener("input", function (event) {
    if (nombre.validity.valid) {
      nombre.style.border = "3px solid green";
    } else {
      nombre.style.border = "3px solid red";
    }
  })



})