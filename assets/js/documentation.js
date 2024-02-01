const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay-bg");
const sidebarClose = document.querySelector(".sidebar-close");

sidebarBtn.addEventListener("click", function () {
sidebar.classList.add("sidebar-active");
overlay.classList.add("active");
});
sidebarClose.addEventListener("click", function () {
sidebar.classList.remove("sidebar-active");
overlay.classList.remove("active");
});
overlay.addEventListener("click", function () {
sidebar.classList.remove("sidebar-active");
overlay.classList.remove("active");
});