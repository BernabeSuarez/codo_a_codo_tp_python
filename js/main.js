// // Pasteleria Acordeon

// document.addEventListener("DOMContentLoaded", () => {
//   const pasteleriaContainer = document.querySelector(".productos-grid");

//   pasteleriaContainer.addEventListener("click", (e) => {
//     const groupHeader = e.target.closest(".pasteleria-grupo");

//     if (!groupHeader) return;

//     const group = groupHeader.parentElement;
//     const groupBody = group.querySelectorAll(".pasteleria-grupo-cuerpo");
//     const icon = groupHeader.querySelector("i");

//     // Transicion Icono
//     icon.classList.toggle("fa-plus");
//     icon.classList.toggle("fa-minus");

//     // Transicionar visibilidad del cuerpo
//     groupBody.classList.toggle("open");

//     const otrosGrupos = pasteleriaContainer.querySelector(".pasteleria-grupo");

//     otrosGrupos.forEach((otroGrupo) => { });
//     if (otroGrupo !== group) {
//       const otroGrupoCuerpo = otroGrupo.querySelector(
//         ".pasteleria-grupo-cuerpo"
//       );
//       const otroIcono = otroGrupo.querySelector(
//         ".pasteleria-grupo-encabezado i"
//       );

//       otroGrupoCuerpo.classList.remove("open");
//       otroIcono.classList.remove("fa-minus");
//       otroIcono.classList.add("fa-plus");
//     }
//   });
// });


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