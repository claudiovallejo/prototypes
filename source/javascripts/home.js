/*

  Prototype Site Navigation:

  Adds interactivity to the bottom tab, which shows/hides the navigation links for the prototype website.

*/
//  Caching menu tab, menu arrow, and navigation banner
const $tab = document.getElementById('tab');
const $arrow = document.getElementById('arrow');
const $main_menu = document.getElementById('main-menu');
//  Click Event Listener
$tab.addEventListener('click', function(){
  //  Toggle `transform: rotate(180deg);`
  $arrow.classList.toggle('tr-180');
  //  Toggle `transform: translateY(-84px);`
  $tab.classList.toggle('tty--84');
  //  Toggle `transform: translateY(-84px);`
  $main_menu.classList.toggle('tty--84');
});
