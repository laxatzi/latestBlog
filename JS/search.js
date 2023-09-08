const searchTrigger = document.querySelector(".search-trigger");
const searchOverlay = document.querySelector(".search-overlay");

const callback = function () {
  alert("Hi all!");
};
searchTrigger.addEventListener("click", callback);
