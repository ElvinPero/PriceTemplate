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

let mode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  $("h2").css({ color: "black" });
  $(".toggler").attr("src", "assets/icons8-sun-50.png");
  $(".container").css({ "background-color": "black" });
  $(".mode").css({ "background-color": "#FFFFCC" });
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  $("h2").css({ color: "#888" });
  $(".toggler").attr("src", "assets/moon-and-stars-svgrepo-com.svg");
  $(".container-bg1").css({ "background-color": "#3f92f9" });
  $(".container-bg2").css({ "background-color": "#B25068" });
  $(".container-bg3").css({ "background-color": "#554994" });
  $(".mode").css({ "background-color": "white" });
  localStorage.setItem("dark-mode", "disabled");
};

if (mode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

$(".mode").click(function () {
  mode = localStorage.getItem("dark-mode") || 'disabled'; // update darkMode when clicked
  if (mode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


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
