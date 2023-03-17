
//* responsive navigation

const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

//* dark mode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}

//* sticky navigation color

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
