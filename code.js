window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("header").classList.add("header");
  } else {
    document.getElementById("header").classList.remove("header");
  }
}
