const $menu = document.getElementById('menu');
const $nav = document.getElementsByTagName('nav')[0];
const $nav_links = document.getElementById('nav-links').children;

var active_menu = false;

$menu.addEventListener('click', function(){
  toggle();
});

window.addEventListener('scroll', function(){
  if (active_menu)
    toggle();
});

function toggle() {
    //  Toggle Fade on Menu
    $menu.classList.toggle('fade-1');
    //  Add Fade to each Nav Link
    for (var i = 0; i < $nav_links.length; i++) {
      $nav_links[i].classList.toggle('fade-2');
    }

    if (!active_menu) {
      //  Set `display: none;` after menu has finished fading
      window.setTimeout(function(){
        $menu.classList.toggle('dn');
      }, 350);
      //  Set Active Menu
      active_menu = true;
    } else {
      //  Set `display: none;` after menu has finished fading
      window.setTimeout(function(){
        $menu.classList.toggle('dn');
        // $nav.classList.toggle('dn');
      }, 1750);
      //  Set Active Menu
      active_menu = false;
    }
}
