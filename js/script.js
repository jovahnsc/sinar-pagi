// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click di luar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
