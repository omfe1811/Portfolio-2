document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#main-nav");
  const homePage = document.getElementById("home-page");
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;
  const btns = [...nav.getElementsByClassName("btn")];

  let suppressActive = false;

  // Set #home-page height
  const adjustHomeHeight = () => {
    const h = window.innerHeight - navHeight;
    if (homePage) homePage.style.height = Math.max(0, h) + "px";
  };

  // Sticky nav
  const handleStickyNav = () => {
    const about = document.querySelector("#about-me");
    if (!about) return;
    const triggerY = about.getBoundingClientRect().top + window.scrollY - navHeight;
    nav.classList.toggle("sticky-nav", window.scrollY >= triggerY);
  };

  // Set active button by section id
  const setActiveBtn = (id) => {
    btns.forEach((btn) => {
      const target = btn.getAttribute("href")?.replace("#", "");
      btn.classList.toggle("active", target === id);
    });
  };

  // Section observer
  const setupObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;

        nav.className = `main-nav ${target.dataset.navClass || ""}`;
        if (!suppressActive) setActiveBtn(target.id);
      });
    }, { threshold: 0.9 });

    sections.forEach((s) => observer.observe(s));
  };

  // Handle click on nav buttons
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      suppressActive = true;
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const href = btn.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: "smooth",
          });
        }
      }

      setTimeout(() => suppressActive = false, 1000);
    });
  });

  // Init
  const init = () => {
    adjustHomeHeight();
    handleStickyNav();
    setupObserver();
  };

  window.addEventListener("load", init);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleStickyNav);
});
