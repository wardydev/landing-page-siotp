const sidebarCountryItems = document.querySelectorAll(".sidebar-country-item");
const selectedCountry = document.querySelector(".selected-country");
const sidebarSelected = document.querySelector(".sidebar-selected");
const sidebarCountryContainer = document.querySelector(
  ".sidebar-country-container"
);
const sidebarDown = document.querySelector(".sidebar-icon-down");
const sidebarUp = document.querySelector(".sidebar-icon-up");
const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".sidebar-close");
const sidebarInputSearch = document.querySelector(".sidebar-input-search");
const inboxCountry = document.querySelectorAll(".inbox-country");
const sidebarCountry = document.querySelector(".sidebar-country");
const overlay = document.querySelector(".overlay-bg");
const selectedCount = document.querySelector(".selected-count");

sidebarCountryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const elImg = this.firstElementChild.firstElementChild.src;
    const elP = this.lastElementChild.innerHTML;
    selectedCountry.lastElementChild.innerHTML = elP;
    selectedCountry.firstElementChild.src = elImg;
    sidebarCountryItems.forEach((i) => {
      i.lastElementChild.classList.remove("text-info");
    });
    this.lastElementChild.classList.add("text-info");
  });
});

sidebarSelected.addEventListener("click", function () {
  sidebarCountryContainer.classList.toggle("active");
  sidebarDown.classList.toggle("active");
  sidebarUp.classList.toggle("active");
  selectedCount.classList.toggle("active");
});

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.add("sidebar-active");
  overlay.classList.add("active");
  sidebarClose.classList.remove("active");
});
sidebarClose.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-active");
  overlay.classList.remove("active");
  sidebarClose.classList.add("active");
});
overlay.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-active");
  overlay.classList.remove("active");
  sidebarClose.classList.add("active");
});

// MULTISELECT
const inputSearch = document.querySelector(".input-multi-select");
const inputOptions = document.querySelector(".input-options");
const optionItem = document.querySelectorAll(".input-option_item");
const btnContainer = document.querySelector(".input-search_button");

const btnElementSelected = (value) => {
  const button = document.createElement("button");
  button.setAttribute("data-value", value);
  button.textContent = value.charAt(0).toUpperCase() + value.slice(1);
  btnContainer.appendChild(button);
};

inputSearch.addEventListener("input", function (e) {
  inputOptions.classList.remove("d-none");
  inputOptions.innerHTML = "";
  const nodelistArray = Array.from(optionItem);
  const filtered = nodelistArray.filter((item) => {
    return item.innerText.toLowerCase().includes(e.target.value);
  });
  filtered.forEach((el) => {
    inputOptions.appendChild(el);
  });
});

optionItem.forEach((item) => {
  item.addEventListener("click", function () {
    inputOptions.classList.add("d-none");
    btnElementSelected(this.dataset.value);
    itemActiveClicked();
    inputSearch.value = "";
    this.classList.add("active");
  });
});

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("input-search_child") ||
    e.target.classList.contains("input-multi-select")
  ) {
    inputOptions.classList.remove("d-none");
  }
});

const itemActiveClicked = () => {
  document.querySelectorAll(".input-search_button button").forEach((item) =>
    item.addEventListener("click", function () {
      inputSearch.value = "";
      this.remove();
    })
  );
};
