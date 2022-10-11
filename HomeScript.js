const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
    toggle.classList.remove('active');
    navbar.classList.remove('active');
    }
}
toggle.onclick =function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

var icon = document.getElementById("icon");
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
