document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#main-nav");
  const aboutPage = document.querySelector("#about-me");
  const homePage = document.getElementById("home-page-container");
  const portfolio = document.getElementById("portfolio");
  const getInTouch = document.getElementById("get-in-touch");
  const homeTop = homePage.offsetTop;
  const aboutTop = aboutPage.offsetTop - nav.offsetHeight;
  const portfolioTop = portfolio.offsetTop - nav.offsetHeight;
  const getInTouchTop = getInTouch.offsetTop - nav.offsetHeight;
  const scroll = scroll;
  function adjustHomeHeight() {
    const navHeight = nav.offsetHeight;
    const viewportHeight = window.innerHeight;
    const calculatedHeight = Math.max(0, viewportHeight - navHeight);
    homePage.style.height = calculatedHeight + "px";
  }
  function handleScroll() {
    if (aboutPage) {
      // Adjust for navbar height
      if (scroll >= aboutTop) {
        nav.classList.add("sticky-nav");
      } else {
        nav.classList.remove("sticky-nav");
      }
    }
  } /* 
  function navColor() {
    if (scroll > aboutTop && scroll) {
      nav.classList.add("sticky-nav");
    }
    if (scroll >= portfolioTop) {
      nav.classList.remove("nav-get-in-touch", "nav-dark-blue");
      nav.classList.add("nav-portfolio");
    } else if (scroll >= getInTouchTop) {
      nav.classList.add("nav-get-in-touch");
      nav.classList.remove("class1", "class2", "class3");
    } else {
      nav.classList.add("nav-dark-blue");
    }
  }*/
  window.addEventListener("load", adjustHomeHeight);
  window.addEventListener("resize", adjustHomeHeight);
  window.addEventListener("scroll", handleScroll);
  adjustHomeHeight();
  handleScroll();
  navColor();
}); /* 