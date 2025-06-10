<script>
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const infoBox = document.getElementById("info-box");

    menuIcon.addEventListener("click", function () {
      // Alternar visibilidade do menu
      infoBox.classList.toggle("active");

      // Alternar ícone entre "list" e "x"
      if (menuIcon.classList.contains("bi-list")) {
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");
      } else {
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
      }
    });
  });
</script>

