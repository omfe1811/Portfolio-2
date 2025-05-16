document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const homePage = document.getElementById("home-page");
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;
  const navButtons = document.querySelectorAll(".nav-button");

  function adjustHomeHeight() {
    const viewportHeight = window.innerHeight;
    const calculatedHeight = Math.max(0, viewportHeight - nav.offsetHeight);
    if (homePage) homePage.style.height = calculatedHeight + "px";
  }

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

  function clearActiveButtons() {
    navButtons.forEach(btn => btn.classList.remove("active"));
  }

  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust as needed
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = "#" + entry.target.id;
        const matchingButton = document.querySelector(`.nav-button[data-target='${sectionId}']`);

        if (entry.isIntersecting) {
          clearActiveButtons(); // Remove all
          if (matchingButton) matchingButton.classList.add("active");
          const colorClass = entry.target.getAttribute("data-nav-class");
          if (colorClass) nav.className = `main-nav ${colorClass}`;
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  function setupButtonClicks() {
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        clearActiveButtons(); // Remove active from all
        btn.classList.add("active");

        // Optional scroll to section
        const targetSelector = btn.getAttribute("data-target");
        const targetSection = document.querySelector(targetSelector);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: "smooth",
          });
        }
      });
    });
  }

  function init() {
    adjustHomeHeight();
    handleStickyNav();
    setupIntersectionObserver();
    setupButtonClicks();
  }

  window.addEventListener("load", init);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleStickyNav);
});
