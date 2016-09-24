const $menu = document.getElementById('menu');
const $nav = document.getElementById('nav-links').children;
console.log($nav);

var active_menu = false;

$menu.addEventListener('click', function(){
  toggle();
});

function toggle() {
  $menu.classList.toggle('fade-1');
  for (var i = 0; i < $nav.length; i++) {
    $nav[i].classList.toggle('fade-2');
  }
  window.setTimeout(function(){
    $menu.classList.toggle('dn');
  }, 350);
}
