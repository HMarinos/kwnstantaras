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
