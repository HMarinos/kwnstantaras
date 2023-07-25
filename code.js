window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").classList.add("header");
    document.getElementById("dropdown").classList.add("dropdown_after");
    document.querySelector(".get_blured").classList.add("get_blured_after");
  } else {
    document.getElementById("header").classList.remove("header");
    document.getElementById("dropdown").classList.remove("dropdown_after");
    document.querySelector(".get_blured").classList.remove("get_blured_after");
  }
}

function toggle_burger() {
  document.querySelector(".open_burger").classList.toggle("toggle_burger");
  document.querySelector(".burger_menu").classList.toggle("burger_active");
  document.body.classList.toggle("hide_overflow");
}

window.onresize = function () {
  if (screen.width > 1140) {
    document.querySelector(".burger_menu").classList.remove("burger_active");
    document.querySelector(".open_burger").classList.remove("toggle_burger");
  }
  if (screen.width == 949) {
    document.querySelector(".trigger_button").click();
  }
};
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
let proionta = document.querySelector(".proionta");

function toggle_dropdown() {
  proionta.classList.toggle("dropdown_active");
  proionta.classList.toggle("proionta_clicked");
  document.querySelector(".get_blured_blure").classList.toggle("toggle_blure");
}

function hover_proionta() {
  document.querySelector(".get_blured").classList.add("get_blured_blure");
}

proionta.addEventListener("mouseleave", mouseLeave);
proionta.addEventListener("mouseenter", mouseEnter);

function mouseEnter() {
  document.querySelector(".get_blured_blure").classList.add("blur_opacity");
}

function mouseLeave() {
  document.querySelector(".get_blured_blure").classList.remove("blur_opacity");
}

document
  .querySelector(".navigation ul li:nth-child(3)")
  .addEventListener("click", toggle_dropdown);
