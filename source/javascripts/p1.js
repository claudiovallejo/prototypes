/* - - - - - - - - - */
const $filters = document.getElementsByClassName('filter');
const $container = document.getElementById('projects');
//
for (var i = 0; i < $filters.length; i ++) {
  $filters[i].addEventListener('click', function(e){
    e.preventDefault();
    styleFilterTabs(this);
    updateProjectList(this);
  });
}
//
function styleFilterTabs($el) {
  for (var i = 0; i < $filters.length; i++) {
    $filters[i].classList.remove('dark-gray');
    $filters[i].classList.add('moon-gray');
  }
  $el.classList.remove('moon-gray');
  $el.classList.add('dark-gray');
}
//
function updateProjectList($el) {
  //
  selectedCategory = $el.innerHTML;
  //
  notActive = true;
  //
  if (notActive) {
    $container.classList.remove('fi');
    $container.classList.add('fo');
    setTimeout(function(){
      hideProjects();
      $container.classList.remove('fo');
      $container.classList.remove('fi');
    }, 455);
  }

}
//
function hideProjects() {
  for (var i = 0; i < $container.children.length; i++) {
    //
    if (selectedCategory === "All") {
      $container.children[i].classList.remove('dn');
    }
    //
    else if ($container.children[i].dataset.category !== selectedCategory) {
      $container.children[i].classList.add('dn');
    }
    //
    else {
      $container.children[i].classList.remove('dn');
    }
  }
}
