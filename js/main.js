// Pasteleria Acordeon

document.addEventListener("DOMContentLoaded", () => {
  const pasteleriaContainer = document.querySelector(".productos-grid");

  pasteleriaContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".pasteleria-grupo");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelectorAll(".pasteleria-grupo-cuerpo");
    const icon = groupHeader.querySelector("i");

    // Transicion Icono
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Transicionar visibilidad del cuerpo
    groupBody.classList.toggle("open");

    const otrosGrupos = pasteleriaContainer.querySelector(".pasteleria-grupo");

    otrosGrupos.forEach((otroGrupo) => { });
    if (otroGrupo !== group) {
      const otroGrupoCuerpo = otroGrupo.querySelector(
        ".pasteleria-grupo-cuerpo"
      );
      const otroIcono = otroGrupo.querySelector(
        ".pasteleria-grupo-encabezado i"
      );

      otroGrupoCuerpo.classList.remove("open");
      otroIcono.classList.remove("fa-minus");
      otroIcono.classList.add("fa-plus");
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