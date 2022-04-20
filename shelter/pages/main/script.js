console.log('Hello world');
// ===== hamburger menu =====

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".nav-text");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const whiteLines = document.querySelectorAll(".line")

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove('open');
        whiteLines.forEach(
            function(whiteLines) {
                whiteLines.classList.toggle('white-lines');
            }
        )
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add('open');
        whiteLines.forEach(
            function(whiteLines) {
                whiteLines.classList.add('white-lines');
            }
        )
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
