(function(){
var menu=document.getElementById('menu-cursos');
var btns=document.querySelectorAll('[data-toggle-menu]');
function set(open){if(!menu)return;menu.hidden=!open;btns.forEach(function(b){if(b.hasAttribute('aria-expanded'))b.setAttribute('aria-expanded',open?'true':'false')})}
btns.forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();set(menu.hidden)})});
document.addEventListener('click',function(e){if(menu&&!menu.hidden&&!menu.contains(e.target))set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
document.querySelectorAll('form').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault()})});
})();
