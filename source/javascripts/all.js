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
/* - - - - - - - - - */
const $filters = document.getElementsByClassName('filter');
for (var i = 0; i < $filters.length; i ++) {
  $filters[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log(this.innerHTML);
    filterToggle(this);
  });
}

function filterToggle($el) {
  for (var i = 0; i < $filters.length; i++) {
    $filters[i].classList.remove('dark-gray');
    $filters[i].classList.add('moon-gray');
  }
  $el.classList.remove('moon-gray');
  $el.classList.add('dark-gray');
}
/* - - - - - - - - - */
const $content = document.getElementById('content');
setTimeout(function(){
  $content.classList.add('fi');
}, 250);
