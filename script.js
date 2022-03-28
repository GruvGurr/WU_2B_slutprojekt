
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


const burger = document.querySelector('.hamburgare')

function toggleMenu() {
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)

