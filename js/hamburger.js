// for hamburger menu 

var iconid = document.getElementById("iconid");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('ham-nav');
var bgColor = document.getElementById("bg-color");

iconid.addEventListener('click', function() {
    navigator.vibrate(60)
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  bgColor.classList.toggle('slide');
  document.querySelector(`.ham-nav-ul`).classList.toggle(`display-min`);
});

function closeSlideMenu(){
    document.getElementById(`iconid`).click();
};