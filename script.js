let styleButton = document.getElementById("style");
let pageStyle = document.getElementById("pagestyle");

changeStyle = () => {
  if (pageStyle.getAttribute('href') == "styles/style1.css") {
    pageStyle.setAttribute('href', "styles/style2.css");
  }
  else if (pageStyle.getAttribute('href') == "styles/style2.css") {
    pageStyle.setAttribute('href', "styles/style3.css");
  }
  else {
    pageStyle.setAttribute('href', "styles/style1.css");
  }
};

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 1000;
  function hidePreloader() {
    var preloader = $('.loader');
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

var icon = document.getElementById("icon");
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})


const scrollToTop = document.querySelector(".btn-to-top");
scrollToTop.style.display = "none";

scrollToTop.addEventListener("click", e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', e => {
    scrollToTop.style.display = window.scrollY > (window.screen.height / 4) ? 'block' : 'none';
});
