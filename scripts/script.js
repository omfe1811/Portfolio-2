document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#main-nav");
  const aboutPage = document.querySelector("#about-me");
  const homePage = document.getElementById("home-page-container");
  const portfolio = document.getElementById("portfolio");
  const getInTouch = document.getElementById("get-in-touch");
  const homeTop = homePage.offsetTop;
  const aboutTop = aboutPage.offsetTop;
  const portfolioTop = portfolio.offsetTop - nav.offsetHeight;
  const getInTouchTop = getInTouch.offsetTop - nav.offsetHeight;
  const sections = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;
  const viewportHeight = window.innerHeight;
  const calculatedHeight = Math.max(0, viewportHeight - navHeight);
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 60% of section is in view
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const color = entry.target.getAttribute("data-nav-class");
        nav.className = `main-nav ${color}`; // assumes base class is `main-nav`
      }
    });
  }, observerOptions);

  function adjustHomeHeight() {
    homePage.style.height = calculatedHeight + "px";
  }
  function handleScroll() {
    if (aboutPage) {
      // Adjust for navbar height
      if (window.scrollY >= aboutTop) {
        nav.classList.add("sticky-nav");
      } else {
        nav.classList.remove("sticky-nav");
      }
    }
  }
  window.addEventListener("load", adjustHomeHeight);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleScroll);
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
  navColor();
}); /* 
console.log(eval("2 + 2"));
const adjustHomeHeight = document.getElementById("home-page-container"); */
/* function adjustHomeHeight() {
  const navbar = document.getElementById("navbar");
  const home = document.getElementById("home");
  const navbarHeight = navbar.offsetHeight;
  const viewportHeight = window.innerHeight;
  home.style.height = viewportHeight - navbarHeight + "px";
}

window.addEventListener("load", adjustHomeHeight);
window.addEventListener("resize", adjustHomeHeight); */
/* let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
const portfolioPage = document.getElementById("portfolioPage");

if (portfolioPage) {
  const portfolioTop = portfolioPage.offsetTop;
  // Example: scroll to that section
  window.scrollTo({
    top: portfolioTop,
    behavior: "smooth",
  });
} */
