var head = document.querySelector("header.homepage-header");


try {
	head.remove();
} catch (e) {

}

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

	var mybutton = document.querySelector(".nav_arrow");
	try {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "flex";

		} else {
			mybutton.style.display = "none";
			mybutton.style.animation = "animation: fadein 0.5s";
		}
	} catch (e) {
	}
};
// When the user clicks on the button, scroll to the top of the document

function buttonScroll(directions){
	if (directions == 'top'){
		document.querySelector(".container").scrollIntoView(true);
	} else {
		document.querySelector(".container").scrollIntoView(false);
	}
}
