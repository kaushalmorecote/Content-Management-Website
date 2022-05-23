let stars = document.getElementById('stars');
let chart = document.getElementById('chart');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left= value + 0.25+'px';
    
    moon.style.left= value + 1+'px';
    // text.style.marginRight= value + 4+'px';
})

const toggleMenu = document.querySelector('.toggle');
const navlist = document.querySelector('.navlist');
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active');
    navlist.classList.toggle('active');
}