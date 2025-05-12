document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const homePage = document.getElementById("home-page");
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;

  // Adjust home section height to fit screen
  function adjustHomeHeight() {
    const viewportHeight = window.innerHeight;
    const calculatedHeight = Math.max(0, viewportHeight - nav.offsetHeight);
    if (homePage) homePage.style.height = calculatedHeight + "px";
  }

  // Handle sticky nav class when scrolling past the about section
  function handleStickyNav() {
    const aboutSection = document.querySelector("#about-me");
    if (!aboutSection) return;

    const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY >= aboutTop - navHeight) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
  }

  // Observer for updating nav background class based on visible section
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const colorClass = entry.target.getAttribute("data-nav-class");
          nav.className = `main-nav ${colorClass}`;
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // Set up all listeners and observers
  function init() {
    adjustHomeHeight();
    handleStickyNav();
    setupIntersectionObserver();
  }

  // Events
  window.addEventListener("load", init);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleStickyNav);
});
