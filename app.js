// ============menu toggle==========

const toggleBtn = document.querySelector(".toggle-btn");
const lineTwo = document.querySelector(".line-two");
const linksContainer = document.querySelector(".links-container");
toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("toggle-rotate");
  lineTwo.classList.toggle("line-slide");
  linksContainer.classList.toggle("show-links");
});

// ====================================animated text for intro =====================
const nameContainer = document.querySelector(".name");
const questionContainer = document.querySelector(".question");
const tableText = document.querySelector(".table-text");
window.addEventListener("DOMContentLoaded", () => {
  nameContainer.classList.add("translate");
  questionContainer.classList.add("translate");
  console.log(this.performance.now());
});

// ==============smooth scrolling=====================
const navBar = document.querySelector(".nav-bar");
const scrollLinks = document.querySelectorAll(".scroll-link");
const toTopBtn = document.querySelector(".toTop-btn");
window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const navHeight = navBar.getBoundingClientRect().height;
  let scrollHeight = window.pageYOffset;
  activateRoadMap();
  if (scrollHeight > 400) {
    toTopBtn.classList.add("show-btn");
  } else {
    toTopBtn.classList.remove("show-btn");
  }

  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  toTopBtn.addEventListener("click", () => {
    scrollHeight = 0;
  });
});

// ====================smooth scroll function===========
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(performance.now());
    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;
    const fixedNav = navBar.classList.contains("fixed-nav");
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.classList.remove("show-links");
    toggleBtn.classList.remove("toggle-rotate");
    lineTwo.classList.remove("line-slide");
  });
});

// ================roadmap function ===============

const MainRoute = document.querySelector(".inside-light");
// ==============html ========================
const figmaRoute = document.querySelector(".figma-light");
const figmaBranch = document.querySelector(".figma-branch-light");
const figmaCircle = document.querySelector(".figma-circle");
const figmaText = document.querySelector(".figma-text");

// =============html ==============
const htmlRoute = document.querySelector(".html-light");
const htmlBranch = document.querySelector(".html-branch-light");
const htmlCircle = document.querySelector(".html-circle");
const htmlText = document.querySelector(".html-text");
// =============js ==============
const jsRoute = document.querySelector(".js-light");
const jsBranch = document.querySelector(".js-branch-light");
const jsCircle = document.querySelector(".js-circle");
const jsText = document.querySelector(".js-text");
// =============css ==============
const cssRoute = document.querySelector(".css-light");
const cssBranch = document.querySelector(".css-branch-light");
const cssCircle = document.querySelector(".css-circle");
const cssText = document.querySelector(".css-text");
// ===================react============
const reactRoute = document.querySelector(".react-light");
const reactBranch = document.querySelector(".react-branch-light");
const reactCircle = document.querySelector(".react-circle");
const reactText = document.querySelector(".react-text");

function activateRoadMap() {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > 350) {
    MainRoute.classList.add("drive");
  } else {
    MainRoute.classList.remove("drive");
  }
}
