const navbar = document.querySelector("nav");
const scrollToTop = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("active-nav");
  } else {
    navbar.classList.remove("active-nav");
  }
});
/**scroll to top */
window.addEventListener("scroll", function () {
  if (window.scrollY >= 560) {
    scrollToTop.classList.add("show-scroll");
  } else {
    scrollToTop.classList.remove("show-scroll");
  }
});
scrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const accordions = document.querySelectorAll(".accordion-section");

accordions.forEach(function (accordion) {
  const btn = accordion.querySelector(".accordion-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(accordion);

    accordions.forEach(function (item) {
      if (item !== accordion) {
        item.classList.remove("show-text");
      }
    });

    accordion.classList.toggle("show-text");
  });
});
