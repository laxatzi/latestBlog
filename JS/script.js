const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("#js--menu");
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
// Get the button
const topButton = document.querySelector("#top-button");

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// smooth scrolling
const hopLinks = document.querySelectorAll(".hop");

for (const hopLink of hopLinks) {
  hopLink.addEventListener("click", clickToScrollSmoothly);
}

function clickToScrollSmoothly(el) {
  el.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
