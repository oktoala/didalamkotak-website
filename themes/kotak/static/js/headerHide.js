
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var navbar = document.querySelector('.header__container');
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
		navbar.classList.remove('hide');
  } else {
		navbar.classList.add('hide');
  }
  prevScrollpos = currentScrollPos;

}
