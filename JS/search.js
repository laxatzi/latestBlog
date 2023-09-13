const searchTrigger = document.querySelector(".search-trigger");
const closer = document.querySelector(".closer");
const searchOverlay = document.querySelector(".search-overlay");
const inputField = document.querySelector("#search");
const searchGlass = document.querySelector(".input-field span");
const body = document.querySelector("body");
let typingTimer;
const searchResultsDiv = document.querySelector(
  "#search-overlay--search-results"
);
const spinnerDiv = document.querySelector(".spinner-div");
let typedVal;

const openSearch = function () {
  if (searchOverlay.classList.contains("search-overlay--mute")) {
    searchOverlay.classList.add("search-overlay--active");
    searchOverlay.classList.remove("search-overlay--mute");
    body.classList.add("no-scroll");
  } else return;
};

const closeSearch = function () {
  if (searchOverlay.classList.contains("search-overlay--active")) {
    searchOverlay.classList.add("search-overlay--mute");
    searchOverlay.classList.remove("search-overlay--active");
    body.classList.remove("no-scroll");
  } else return;
};

const keyToOpenSearch = function (ev) {
  let key = ev.key;
  if (searchTrigger === document.activeElement && key === "Enter") {
    openSearch();
  }
  if ((key == "s" || key == "S") && ev.altKey) {
    openSearch();
  }
  if (key == "Escape") {
    closeSearch();
  }
};
