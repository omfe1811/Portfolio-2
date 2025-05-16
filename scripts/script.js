document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const homePage = document.getElementById("home-page");
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;

  // HOME HEIGHT-NAV HEIGHT, COLOR CHANGES BASED ON THE VIEWPORT AND SECTION HEIGHT
  function adjustHomeHeight() {
    const viewportHeight = window.innerHeight;
    const calculatedHeight = Math.max(0, viewportHeight - nav.offsetHeight);
    if (homePage) homePage.style.height = calculatedHeight + "px";
  }

  // STICKY NAV WITH SCROLL PAST ABOUT ME
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

  //UPDATE NAV CLASS BASED ON THE SECTION 90% OF PAGE=CHANGE COLOR
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    //UPDATE CLASS OF NAVBAR BASED ON SCROLL
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


  function init() {
    adjustHomeHeight();
    handleStickyNav();
    setupIntersectionObserver();
  }

  // HANDLE LOAD AND RESIZE->RESPONSIVE NAVBAR
  window.addEventListener("load", init);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleStickyNav);
});
