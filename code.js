window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").classList.add("header");
    document.getElementById("dropdown").classList.add("dropdown_after");
  } else {
    document.getElementById("header").classList.remove("header");
    document.getElementById("dropdown").classList.remove("dropdown_after");
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
    console.log("working");
  }
};
