// Pasteleria Acordeon

document.addEventListener("DOMContentLoaded", () => {
  const pasteleriaContainer = document.querySelector(".productos-grid");

  pasteleriaContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".pasteleria-grupo");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".pasteleria-grupo-cuerpo");
    const icon = groupHeader.querySelector("i");

    // Transicion Icono
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Transicionar visibilidad del cuerpo
    groupBody.classList.toggle("open");

    const otrosGrupos = pasteleriaContainer.querySelector(".pasteleria-grupo");

    otrosGrupos.forEach((otroGrupo) => {});
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
