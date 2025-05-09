document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#main-nav");
  const aboutPage = document.querySelector("#about-me");
  const homePage = document.getElementById("home-page-container");
  const portfolio = document.getElementById("portfolio");
  const getInTouch = document.getElementById("get-in-touch");
  const sections = document.querySelectorAll("section");

  let aboutTop = 0;

  const navHeight = nav.offsetHeight;
  const viewportHeight = window.innerHeight;
  const calculatedHeight = Math.max(0, viewportHeight - 2 * navHeight);

  const colorClasses = ["d-b-bg", "m-d-bg", "nav-dark", "l-b-bg"]; // Replace with your actual color classes

  // IntersectionObserver for color changes
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const color = entry.target.getAttribute("data-nav-class");
        if (color) {
          nav.classList.remove(...colorClasses);
          nav.classList.add(color);
        }
      }
    });
  }, observerOptions);

  function adjustHomeHeight() {
    homePage.style.height = calculatedHeight + "px";
  }

  function updateSectionOffsets() {
    aboutTop = aboutPage.offsetTop;
  }

  // Setup
  window.addEventListener("load", () => {
    adjustHomeHeight();
    updateSectionOffsets();
  });

  window.addEventListener("resize", () => {
    adjustHomeHeight();
    updateSectionOffsets();
  });

  // Observe each section for color class updates
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
