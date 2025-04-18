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
    /*  if (window.scrollY > aboutTop) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    }
    if(window.scrollY) */
  });
});
/*   if (window.scrollY > aboutTop) {
      nav.classList.add("sticky-nav");
    } else {
      nav.classList.remove("sticky-nav");
    } */
/* function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}                                         DISPLAy CARDS FOR PORTFOLIO
                                         */
