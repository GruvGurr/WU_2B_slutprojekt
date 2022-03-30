const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


/*
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  


*/


/*
<script onclick="alert"></script>


document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.id = 'container';
    div.innerHTML = 'Hi there!';
    div.className = 'border pad';
 
    document.body.appendChild(div);
}, false);

var row = document.createElement('DIV') 

*/

/*
const burger = document.querySelector('.hamburgare')

function toggleMenu() {
    burger.classList.toggle('toggle')
}

hamburger.addEventListener('click', () => {  
    hamburger.classList.toggle("toggle")  
   });  
*/


// burger.addEventListener('click', toggleMenu)

