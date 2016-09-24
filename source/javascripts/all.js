const $html = document.getElementsByTagName('html')[0];
const $menu = document.getElementById('menu');
const $logo = document.getElementById('logo');
const $nav = document.getElementById('nav-links').children;
console.log($nav);

var active_menu = false;

$menu.addEventListener('click', function(){
  toggle();
});

function toggle() {
  $menu.classList.toggle('fo');
  $logo.classList.toggle('fo');

  for (var i = 0; i < $nav.length; i++) {
    $nav[i].classList.toggle('fo');
  }

  active_menu = true;
}
