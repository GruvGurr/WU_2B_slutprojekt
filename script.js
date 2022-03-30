const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)


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

