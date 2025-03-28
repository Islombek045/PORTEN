document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-items");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
