/*

  Prototype Site Navigation:

  Adds interactivity to the bottom tab, which shows/hides the navigation links for the prototype website.

*/
const $tab = document.getElementById('tab');
const $arrow = document.getElementById('arrow');
$tab.addEventListener('click', function(){
  console.log("Click");
  $arrow.classList.toggle('rotate');
});
