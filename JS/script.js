const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector(".js--menu");
const icon = document.querySelector(".toggle-menu ion-icon");

toggleMenu.addEventListener(
  "click",
  function () {
    nav.classList.toggle("show");
    const menuIcon = document.getElementsByTagName("ion-icon")[0];
    const closeIcon = document.getElementsByTagName("ion-icon")[1];

    if (menuIcon.classList.contains("show")) {
      menuIcon.classList.add("close");
      menuIcon.classList.remove("show");
      closeIcon.classList.remove("close");
      closeIcon.classList.add("show");
    } else {
      menuIcon.classList.add("show");
      menuIcon.classList.remove("close");
      closeIcon.classList.remove("show");
      closeIcon.classList.add("close");
    }
  },
  false
);
