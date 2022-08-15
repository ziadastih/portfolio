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
const figmaInstall = document.querySelector(".figma-install");
// =============html ==============
const htmlRoute = document.querySelector(".html-light");
const htmlBranch = document.querySelector(".html-branch-light");
const htmlCircle = document.querySelector(".html-circle");
const htmlText = document.querySelector(".html-text");
const htmlInstall = document.querySelector(".html-install");
// =============js ==============
const jsRoute = document.querySelector(".js-light");
const jsBranch = document.querySelector(".js-branch-light");
const jsCircle = document.querySelector(".js-circle");
const jsText = document.querySelector(".js-text");
const jsInstall = document.querySelector(".js-install");
// =============css ==============
const cssRoute = document.querySelector(".css-light");
const cssBranch = document.querySelector(".css-branch-light");
const cssCircle = document.querySelector(".css-circle");
const cssText = document.querySelector(".css-text");
const cssInstall = document.querySelector(".css-install");
// ===================react============
const reactRoute = document.querySelector(".react-light");
const reactBranch = document.querySelector(".react-branch-light");
const reactCircle = document.querySelector(".react-circle");
const reactText = document.querySelector(".react-text");
const reactInstall = document.querySelector(".react-install");
const brain = document.querySelector(".brain");
// ================roadmap function=============

function activateRoadMap() {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > 350) {
    MainRoute.classList.add("drive");

    setTimeout(() => {
      figmaRoute.classList.add("corner");
    }, 435);
    setTimeout(() => {
      htmlRoute.classList.add("corner");
    }, 474);
    setTimeout(() => {
      cssRoute.classList.add("corner");
      brain.classList.add("enter");
    }, 627);
    setTimeout(() => {
      jsRoute.classList.add("corner");
    }, 657);
    setTimeout(() => {
      reactRoute.classList.add("corner");
    }, 680);
    // ================branches timeout and circles=======
    setTimeout(() => {
      figmaBranch.classList.add("park");
      figmaCircle.classList.add("enter");
      figmaInstall.classList.add("enter");
    }, 825);
    setTimeout(() => {
      htmlBranch.classList.add("park");
      htmlCircle.classList.add("enter");
      htmlInstall.classList.add("enter");
    }, 824);
    setTimeout(() => {
      cssBranch.classList.add("park");
      cssCircle.classList.add("enter");
      cssInstall.classList.add("enter");
    }, 927);
    setTimeout(() => {
      jsBranch.classList.add("park");
      jsCircle.classList.add("enter");
      jsInstall.classList.add("enter");
    }, 927);
    setTimeout(() => {
      reactBranch.classList.add("park");
      reactCircle.classList.add("enter");
      reactInstall.classList.add("enter");
    }, 1000);
  }

  // ==================setting the else removing all the timeout==================
  else {
    MainRoute.classList.remove("drive");
    setTimeout(() => {
      figmaRoute.classList.remove("corner");
    }, 435);
    setTimeout(() => {
      htmlRoute.classList.remove("corner");
    }, 474);
    setTimeout(() => {
      cssRoute.classList.remove("corner");
    }, 627);
    setTimeout(() => {
      jsRoute.classList.remove("corner");
    }, 657);
    setTimeout(() => {
      reactRoute.classList.remove("corner");
    }, 680);
    // ==============remove branches ==============
    setTimeout(() => {
      figmaBranch.classList.remove("park");
      figmaCircle.classList.remove("enter");
      figmaInstall.classList.remove("enter");
    }, 825);
    setTimeout(() => {
      htmlBranch.classList.remove("park");
      htmlCircle.classList.remove("enter");
      htmlInstall.classList.remove("enter");
    }, 824);
    setTimeout(() => {
      cssBranch.classList.remove("park");
      cssCircle.classList.remove("enter");
      cssInstall.classList.remove("enter");
    }, 927);
    setTimeout(() => {
      jsBranch.classList.remove("park");
      jsCircle.classList.remove("enter");
      jsInstall.classList.remove("enter");
    }, 927);
    setTimeout(() => {
      reactBranch.classList.remove("park");
      reactCircle.classList.remove("enter");
      reactInstall.classList.remove("enter");
    }, 1000);
  }
}