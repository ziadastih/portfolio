// ============menu toggle==========

const toggleBtn = document.querySelector(".toggle");
const lineTwo = document.querySelector(".line-two");
const linksContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("toggle-rotate");
  lineTwo.classList.toggle("line-slide");
  linksContainer.classList.toggle("show-links");
});
