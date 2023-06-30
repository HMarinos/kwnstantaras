var header = document.querySelector("header");
var scroll_header = document.querySelector(".scroll_header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("header_transform");
    scroll_header.classList.add("scroll_header_active");
  } else {
    header.classList.remove("header_transform");
    scroll_header.classList.remove("scroll_header_active");
  }
}
