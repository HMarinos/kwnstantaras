var header = document.querySelector("header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("header_transform");
  } else {
    header.classList.remove("header_transform");
  }
}
