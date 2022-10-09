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
