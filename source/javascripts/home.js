/*

  Prototype Site Navigation:

  Adds interactivity to the bottom tab, which shows/hides the navigation links for the prototype website.

*/
//  Caching menu tab, menu arrow, and navigation banner
const $tab = document.getElementById('tab');
const $arrow = document.getElementById('plus');
const $main_menu = document.getElementById('main-menu');
//  Click Event Listener
$tab.addEventListener('click', function(){
  //  Toggle `transform: rotate(180deg);`
  $arrow.classList.toggle('tr-45');
  //  Toggle `transform: translateY(-84px);`
  $tab.classList.toggle('tty--84');
  //  Toggle `transform: translateY(-84px);`
  $main_menu.classList.toggle('tty--84');
});
/*

  Fades in Prototype cards

*/
const $cards = document.getElementsByClassName('pc');
const $note = document.getElementsByClassName('note')[0];
if ($cards.length > 0) {
  setTimeout(function(){
    for (var i = 0; i < $cards.length; i++) {
      $cards[i].classList.add('fi');
    }
  }, 250);
  setTimeout(function(){
    $note.classList.add('opacity-1');
  }, 1300);
}
