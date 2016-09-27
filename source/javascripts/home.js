/*

  Prototype Site Navigation:

  Adds interactivity to the bottom tab, which shows/hides the navigation links for the prototype website.

*/
const $tab = document.getElementById('tab');
const $arrow = document.getElementById('arrow');
const $main_menu = document.getElementById('main-menu');
//  Click Event Listener
$tab.addEventListener('click', function(){
  console.log("Click");
  $arrow.classList.toggle('tr-180');
  $tab.classList.toggle('tty-84');
  $main_menu.classList.toggle('tty-84');
});
