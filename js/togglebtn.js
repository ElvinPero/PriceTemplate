const checkbox = document.getElementById('checkbox');
let darkmode = localStorage.getItem("dark-mode");

checkbox.addEventListener('click', checkMode);
function darkMode() {
  document.body.classList.add('dark-mode');
}
function lightMode() {
  document.body.classList.remove('dark-mode');
}
function checkMode() {
  if (checkbox.checked) {
    darkMode()
    localStorage.setItem("dark-mode", "enabled")
  }
  else {
    lightMode()
    localStorage.setItem("dark-mode", "disabled")
  }
}
if(darkmode === "enabled") {
  document.body.classList.add("dark-mode");
  checkbox.setAttribute("checked", "true")
}
