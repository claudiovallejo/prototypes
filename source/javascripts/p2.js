/*

  Project Filter: Tab menu that filters projects by category

*/
const $filters = document.getElementsByClassName('filter');
const $container = document.getElementById('projects');
const $projects = document.querySelectorAll('[data-category]');
//  Add click event to each filter tab
for (var i = 0; i < $filters.length; i ++) {
  $filters[i].addEventListener('click', function(e){
    e.preventDefault();
    styleFilterTabs(this);
    updateProjectList(this);
  });
}
//  Removes color classes from filters and then adds appropriate classes to clicked tab
function styleFilterTabs($el) {
  for (var i = 0; i < $filters.length; i++) {
    $filters[i].classList.remove('dark-gray');
    $filters[i].classList.add('moon-gray');
  }
  $el.classList.remove('moon-gray');
  $el.classList.add('dark-gray');
}
//  Caches selected category, calls hideProjects(), and fades-in / fades-out project container
function updateProjectList($el) {
  //  Cache name of selected tab
  selectedCategory = $el.innerHTML;
  //  NOT READY: This should call another function that checks whether the selected category is active or not
  notActive = true;
  //  Fades out project container, hides / shows appropriate projects, fades in project container
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
//  Hides / shows appropriate projects
function hideProjects() {
  for (var i = 0; i < $projects.length; i++) {
    //  Shows all projects
    if (selectedCategory === "All") {
      $projects[i].classList.remove('dn');
    }
    // Hides projects that don't belong in selected category
    else if ($projects[i].dataset.category !== selectedCategory) {
      $projects[i].classList.add('dn');
    }
    //  Displays projects that belong in selected category
    else {
      $projects[i].classList.remove('dn');
    }
  }
}
