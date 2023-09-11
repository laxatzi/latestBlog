const searchTrigger = document.querySelector(".search-trigger");
const closer = document.querySelector(".closer");
const searchOverlay = document.querySelector(".search-overlay");
const inputField = document.querySelector("#search");
const searchGlass = document.querySelector(".input-field span");
const body = document.querySelector("body");

const openSearch = function () {
  if (searchOverlay.classList.contains("search-overlay--mute")) {
    searchOverlay.classList.add("search-overlay--active");
    searchOverlay.classList.remove("search-overlay--mute");
    body.setAttribute("id", "no-scroll");
  } else return;
};

const closeSearch = function () {
  if (searchOverlay.classList.contains("search-overlay--active")) {
    searchOverlay.classList.add("search-overlay--mute");
    searchOverlay.classList.remove("search-overlay--active");
  } else return;
};

searchTrigger.addEventListener("click", openSearch);
closer.addEventListener("click", closeSearch);
searchGlass.addEventListener("click", () => console.log(inputField.value));
