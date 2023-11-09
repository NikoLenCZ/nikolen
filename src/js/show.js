

export function initShowMenu() {
  let navLinks = document.querySelectorAll(".navList a");
  let menu = document.querySelector(".navbar-icon");
 let navList = document.querySelector(".navList");
let menuIcon = document.querySelector("#icon-menu");
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      navList.classList.toggle("show");
      menuIcon.classList.toggle("rotate");
    });
  });

  navLinks = (menu.onclick = function() {
    navList.classList.toggle("show"),
    menuIcon.classList.toggle("rotate")
    });
}
