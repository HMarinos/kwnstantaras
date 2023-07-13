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
  console.log(screen.width);
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

function toggle_dropdown() {
  if (isTouchDevice()) {
    document.querySelector(".proionta").classList.remove("proionta_hover");
    document.querySelector(".proionta").classList.toggle("dropdown_active");
  }
}

function hover_proionta() {
  document.querySelector(".get_blured").classList.add("get_blured_blure");
}

let proionta = document.querySelector(".proionta");

proionta.addEventListener("mouseleave", mouseLeave);
proionta.addEventListener("mouseenter", mouseEnter);

function mouseEnter() {
  document.querySelector(".get_blured_blure").style.opacity = "1";
}

function mouseLeave() {
  document.querySelector(".get_blured_blure").style.opacity = "0";
}
