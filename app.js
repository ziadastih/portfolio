// ==============quick guide =========================
// 1. start with preloader function  ============================
// 2. then when page load we display our text functions that are coded in the end of the file
// 3.menu toggle function to rotate the lines and drop the middle one  and open the container
// 4.form function and contact btn ,close btn event listener
// 5.info function ,more info btns trigger get the section depend on the dataset ,it gives the title needed and for every data-id  we hardcoded a text to display
// 6.window scroll to have a fixed nav ,activate the totop btn .activate the roadmap at a certain offset value
// 8.scroll links selector , event listener to make the smotth scroll and we remove the value of the fixed nav bar if nav bar have fixed class or not, and if the container is open , in case the container is open we want to reduce the position from the initial position annd then close the container so the user can directly see the section header
// 9.then we have the roadmap function we select for every branch the light the branch light and the circle we set timeout did it through video slow mo to try be efficient s much as possible with timing.
// 10.then the est hour function ,on daily average 5 hours spent coding since the starting date
// 11.then we have the grid function for each we activate the class that we set in js class css ,and we set the opacity 0 for the front words cz we have the background of the back transparent so we cant see the words of the front and we can see the image bg
// 12.the we have the animated text section, we take the h3 inner text turn it into an array then we display the inner html as a loop of spans with a timer delay to displat them ,we have inside the loop if statment cz we want to highlight some words in the text so we need to give them different types, this animation was seen in after effect so i created it from scratch with different span speed and timeout functions so we get it 100% right.
// 13. tried to do it with letter spacing it is not possible to work at all , so i used a logic of creating a div between every letter and when the text is animated an i want to expand it i increase the divs width so it space them out, it have multiple classes in js compatible for all screen size

// ===================preloader ==========================
const preloader = document.querySelector(".pre-loader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
window.addEventListener("DOMContentLoaded", function () {
  animateQuestion();
  animateName();
  animateOffer();
  showBtns();
});

// ============menu toggle============================

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

// ==================================form function  ====================

const closeForm = document.getElementById("close-form");
const contactBtn = document.querySelector(".contact");

const formContainer = document.querySelector(".form-container");
const formHeader = document.querySelector(".form-header");
contactBtn.addEventListener("click", function () {
  formContainer.classList.add("show-form");
  formHeader.textContent = `let's get started!`;
});

closeForm.addEventListener("click", function () {
  formContainer.classList.remove("show-form");
});

// ===================info -container ========================
const infoBtn = document.querySelectorAll(".more-info");
const infoContainer = document.querySelector(".info-container");
const infoText = document.querySelector(".text-info");
const infoTitle = document.querySelector(".info-title");
const closeInfo = document.getElementById("close-info");
infoBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    infoContainer.classList.add("show-form");
    let dataId = e.currentTarget.dataset.id;

    if (dataId === "gallery") {
      infoTitle.textContent = "gallery shop";
      infoText.textContent =
        "This website is not hosted. It was a challenge from johnsmilga.com. It improved my logic and how to make the code reliable and clean, by mapping over the data that is in json file, the section automatically display all the items info in the design we already implemented, the user can live search for a desired item in the input, once a charachter is added to the input it automatically filter throughout all our data to find the items that match and display them.There is also categories related to brands and on click it filters the data to grab the desired brand and items.";
    } else if (dataId === "tip") {
      infoTitle.textContent = "tip calculator";
      infoText.textContent =
        "Firstly, this website is not hosted. It is a challenge from FrontEndMentor website. This tip calculator doesn't have any submit button, hence it calculates the values when all the required actions are made or any change is made. However if a non valid value has been inserted, the user will catch an error. Secondly, it has a reset button that activates once an action is made. It takes the total bill value, the number of people, the percentage that is selected and calculates the amount of tip per person in addition to the total amount per person. ";
    }
  });
});

closeInfo.addEventListener("click", function () {
  infoContainer.classList.remove("show-form");
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
  hoursSpent();
  const deviceWidth = screen.width;

  if (scrollHeight > 500) {
    toTopBtn.classList.add("show-btn");
    if (deviceWidth > 750) {
      contactBtn.innerHTML = `<i class="fa-solid fa-envelope"></i> let's talk`;
      contactBtn.classList.add("ipad-move");
    } else if (deviceWidth < 750) {
      contactBtn.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
      contactBtn.classList.add("move");
    }
  } else {
    contactBtn.classList.remove("move");
    contactBtn.classList.remove("ipad-move");
    toTopBtn.classList.remove("show-btn");
    contactBtn.innerHTML = `<i class="fa-solid fa-envelope"></i> let's talk`;
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
      behavior: "smooth",
    });

    const deviceWidth = screen.width;
    if (deviceWidth > 389 && deviceWidth < 420) {
      position = position - 400;
      console.log(position);
      window.scrollTo({
        left: 0,
        top: position,
      });
    }
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
    estHours.textContent = `0 h`;
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

// ===================est hours function ==========

const estHours = document.querySelector(".hours-spent");

function hoursSpent() {
  let height = window.pageYOffset;
  if (height > 350) {
    const currentDate = new Date().getTime();
    const StartDate = new Date(2022, 2, 23, 10, 0, 0).getTime();
    let difference = currentDate - StartDate;

    const estTimeSpent = Math.floor(difference / 3600000 / 5);
    estHours.textContent = `${estTimeSpent} h`;
  } else {
    estHours.textContent = 0;
  }
}
Time = setInterval(hoursSpent, 2000);

const grids = document.querySelectorAll(".grid");

grids.forEach(function (grid) {
  grid.addEventListener("click", function (e) {
    let id = e.currentTarget.dataset.id;

    let gridFront = document.getElementById(id);

    if (grid.classList.contains("grid-flip")) {
      grid.classList.remove("grid-flip");
      setTimeout(() => {
        gridFront.classList.remove("hide-grid-front");
      }, 300);
    } else {
      grid.classList.add("grid-flip");
      setTimeout(() => {
        gridFront.classList.add("hide-grid-front");
      }, 700);
    }
  });
});

// ==============================INTODUCTION ANIMATION FUNCTION ====================
function animateQuestion() {
  const question = document.querySelector(".question");

  const questionText = question.innerText;

  const splitQuestion = questionText.split("");

  question.innerHTML = "";
  for (let i = 0; i < splitQuestion.length; i++) {
    if (i > 10 && i < 29 && i != 19) {
      question.innerHTML += `<span class = "normal-span highlighted-text">${splitQuestion[i]}</span><div class="space-block"></div> `;
    } else if (i === 6 || i === 9) {
      question.innerHTML += `<span class = "normal-span normal-text">${splitQuestion[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 10) {
      question.innerHTML += `<span class = "normal-span normal-text">${splitQuestion[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 29) {
      question.innerHTML += `<div class="space-block"></div><span class = "normal-span question-mark">${splitQuestion[i]}</span> `;
    } else if (i === 19) {
      question.innerHTML += `<span class = "normal-span highlighted-text">${splitQuestion[i]}</span><div class="double-space-block"></div>`;
    } else {
      question.innerHTML += `<span class = "normal-span normal-text">${splitQuestion[i]}</span><div class="space-block"></div>`;
    }
  }
  let charachter = 0;

  let timer = setInterval(ontick, 50);

  function ontick() {
    // selecting the element one by one from charachter 0 till the end of spans
    const span = question.querySelectorAll("span")[charachter];
    const spaceBlock = document.querySelectorAll(".space-block");
    const doubleBlocks = document.querySelectorAll(".double-space-block");

    let device = screen.width;
    //   =============slow span===============
    if (charachter === 0) {
      span.classList.add("slow-span");
    }
    // ===========slower span========
    if (charachter === 1) {
      setTimeout(function () {
        span.classList.add("slower-span");
      }, 350);
    }

    //   ==========fast spans==========
    if (charachter > 1 && charachter < 29) {
      setTimeout(function () {
        span.classList.add("fast-span");
      }, 600);
    } else if (charachter === 29) {
      setTimeout(function () {
        span.classList.add("slowest-span");
      }, 650);
    }

    charachter++;
    if (device > 700) {
      setTimeout(() => {
        spaceBlock.forEach(function (block) {
          block.classList.add("space-out");
        });
        doubleBlocks.forEach(function (block) {
          block.classList.add("double-space-out");
        });
      }, 2650);
    } else {
      setTimeout(() => {
        spaceBlock.forEach(function (block) {
          block.classList.add("mobile-space-out");
        });
        doubleBlocks.forEach(function (block) {
          block.classList.add("mobile-double-space-out");
        });
      }, 2650);
    }
    if (charachter === splitQuestion.length) {
      stopTimer();
      return;
    }
  }
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
}
// ===========================name text animation =================================

function animateName() {
  const nameText = document.querySelector(".name");
  const strName = nameText.innerText;
  const splitName = strName.split("");

  nameText.innerHTML = "";
  for (let i = 0; i < splitName.length; i++) {
    if (i === 1 || i === 5 || i === 7 || i === 17 || i === 18 || i === 29) {
      nameText.innerHTML += `<span class = "normal-span normal-text">${splitName[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 11) {
      nameText.innerHTML += `<span class = "normal-span highlighted-text">${splitName[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 39) {
      nameText.innerHTML += `<span class = "normal-span question-mark">${splitName[i]}</span> `;
    } else if (i > 7 && i < 17) {
      nameText.innerHTML += `<span class = "normal-span highlighted-text">${splitName[i]}</span><div class="space-block"></div>`;
    } else {
      nameText.innerHTML += `<span class = "normal-span normal-text">${splitName[i]}</span><div class="space-block"></div>`;
    }
  }

  let number = 0;

  let nameTimer = setInterval(onNametick, 33);

  function onNametick() {
    // selecting the element one by one from charachter 0 till the end of spans
    const span = nameText.querySelectorAll("span")[number];

    //   =============slow span===============
    if (number === 0) {
      span.classList.add("slow-span");
    }
    // ===========slower span========
    if (number === 1) {
      setTimeout(function () {
        span.classList.add("slower-span");
      }, 350);
    }

    //   ==========fast spans==========
    if (number > 1 && number < 39) {
      setTimeout(function () {
        span.classList.add("fast-span");
      }, 600);
    } else if (number === 39) {
      setTimeout(function () {
        span.classList.add("slowest-span");
      }, 650);
    }

    number++;

    if (number === splitName.length) {
      stopNameTimer();
      return;
    }
  }
  function stopNameTimer() {
    clearInterval(nameTimer);
    nameTimer = null;
  }
}
// ===========================name text animation =================================
function animateOffer() {
  const offerText = document.querySelector(".offer");
  const stroffer = offerText.innerText;
  const splitoffer = stroffer.split("");

  offerText.innerHTML = "";
  for (let i = 0; i < splitoffer.length; i++) {
    if (i === 2 || i === 4 || i === 19) {
      offerText.innerHTML += `<span class = "normal-span normal-text">${splitoffer[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 15) {
      offerText.innerHTML += `<span class = "normal-span highlighted-text">${splitoffer[i]}</span><div class="double-space-block"></div>`;
    } else if (i === 25) {
      offerText.innerHTML += `<span class = "normal-span question-mark">${splitoffer[i]}</span> `;
    } else if ((i > 4 && i < 16) || (i > 19 && i < 25)) {
      offerText.innerHTML += `<span class = "normal-span highlighted-text">${splitoffer[i]}</span><div class="space-block"></div>`;
    } else {
      offerText.innerHTML += `<span class = "normal-span normal-text">${splitoffer[i]}</span><div class="space-block"></div>`;
    }
  }

  let count = 0;

  let offerTimer = setInterval(onoffertick, 52);

  function onoffertick() {
    // selecting the element one by one from charachter 0 till the end of spans
    const span = offerText.querySelectorAll("span")[count];

    //   =============slow span===============
    if (count === 0) {
      span.classList.add("slow-span");
    }
    // ===========slower span========
    if (count === 1) {
      setTimeout(function () {
        span.classList.add("slower-span");
      }, 350);
    }

    //   ==========fast spans==========
    if (count > 1 && count < 25) {
      setTimeout(function () {
        span.classList.add("fast-span");
      }, 600);
    } else if (count === 25) {
      setTimeout(function () {
        span.classList.add("slowest-span");
      }, 650);
    }

    count++;

    if (count === splitoffer.length) {
      stopofferTimer();
      return;
    }
  }
  function stopofferTimer() {
    clearInterval(offerTimer);
    offerTimer = null;
  }
}
const stars = document.querySelector(".medium-speed-stars");
function showBtns() {
  setTimeout(() => {
    contactBtn.classList.add("show-text");
    stars.classList.add("show-stars");
  }, 2800);
}
