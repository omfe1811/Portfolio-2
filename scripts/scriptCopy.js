document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("#main-nav");
    const aboutPage = document.querySelector("#about-me");
    const portfolioPage = document.querySelector("#portfolio");
    const aboutTop = aboutPage.offsetTop;
    const portfolioTop = portfolioPage.offsetTop;
    if (window.scrollY > aboutTop) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
  });
});
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
