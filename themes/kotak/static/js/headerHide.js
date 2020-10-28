
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var navbar = document.querySelector('.header__container');
	var toc_click = document.querySelector('.toc_class a');
	toc_click.addEventListener('click', function(){
		navbar.classList.add('hide');
	})

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
		navbar.classList.remove('hide');
  } else {
		navbar.classList.add('hide');
  }
  prevScrollpos = currentScrollPos;

}
