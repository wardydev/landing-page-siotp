const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const coloredBlack = document.querySelector(".colored-black");
const coloredWhite = document.querySelector(".colored-white");
const menuItem = document.querySelectorAll(".header-menus a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuBlack = document.querySelector(".hamburger-menu_black");
const responsiveMenu = document.querySelector(".responsive-menu");
const responsiveItem = document.querySelectorAll(".responsive-menu a");

window.addEventListener("scroll", function () {
  if (scrollY > 10) {
    header.classList.add("active");
    coloredBlack.style.display = "block";
    coloredWhite.style.display = "none";
    hamburgerMenuBlack.style.display = "block";
    hamburgerMenu.style.display = "none";
    menuItem.forEach((item) => {
      item.classList.add("scroll");
    });
    hamburgerMenuBlack.addEventListener("click", function () {
      header.classList.add("active");
      coloredBlack.style.display = "block";
      coloredWhite.style.display = "none";
      hamburgerMenuBlack.style.display = "block";
      hamburgerMenu.style.display = "none";
    });
  } else if (scrollY <= 0) {
    header.classList.remove("active");
    coloredBlack.style.display = "none";
    coloredWhite.style.display = "block";
    hamburgerMenuBlack.style.display = "none";
    hamburgerMenu.style.display = "block";
    menuItem.forEach((item) => {
      item.classList.remove("scroll");
    });
    responsiveMenu.classList.remove("active");
    hamburgerMenuBlack.addEventListener("click", function () {
      header.classList.remove("active");
      coloredBlack.style.display = "none";
      coloredWhite.style.display = "block";
      hamburgerMenuBlack.style.display = "none";
      hamburgerMenu.style.display = "block";
    });
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    menuItem.forEach((menu) => {
      menu.classList.remove("active");
    });
    this.classList.add("active");
  });
});

hamburgerMenu.addEventListener("click", function () {
  header.classList.add("active");
  coloredBlack.style.display = "block";
  coloredWhite.style.display = "none";
  hamburgerMenuBlack.style.display = "block";
  hamburgerMenu.style.display = "none";
  responsiveMenu.classList.toggle("active");
});
hamburgerMenuBlack.addEventListener("click", function () {
  header.classList.remove("active");
  coloredBlack.style.display = "none";
  coloredWhite.style.display = "block";
  hamburgerMenu.style.display = "block";
  hamburgerMenuBlack.style.display = "none";
  responsiveMenu.classList.toggle("active");
});

responsiveItem.forEach((item) => {
  item.addEventListener("click", function () {
    responsiveItem.forEach((menu) => {
      menu.classList.remove("active");
    });
    this.classList.add("active");
    responsiveMenu.classList.remove("active");
  });
});
