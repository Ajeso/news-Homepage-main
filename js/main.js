const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
