/* Logo Theme */
const logo_images = document.querySelector(".logo__imagebox");
const bodies = document.querySelector(":root");
const curr_themes = localStorage.getItem("theme");

if (curr_themes == "light"){
	bodies.classList.add('light-theme');
}
function logo_theme(){
	bodies.classList.toggle('light-theme');
	
	let theme = "dark";
	if (bodies.classList.contains("light-theme")){
		theme = "light"
	}
	localStorage.setItem("theme", theme);

}


/* Slider Sidebar */
const slider = document.querySelector(".switch > input");
const sidebar = document.querySelector(".sidebar");
const curr_sidebar = localStorage.getItem("sidebarStorage");
const curr_slider = localStorage.getItem("sliderStorage");

if (curr_sidebar == "hidden"){
	sidebar.classList.add('hidden');
	// console.log("Hahah");
	slider.checked = false;
} else {
	slider.checked = true;
}

function slider_sidebar(){
	sidebar.classList.toggle("hidden");
	
	let sidebar_class = "show";
	let slider_class = "checked";
	
	if (sidebar.classList.contains("hidden")){
		slider.checked = false;
		sidebar_class = "hidden";
		slider_class = "unchecked";
	} else {
		slider.checked = true;
	}
	localStorage.setItem("sidebarStorage", sidebar_class);
	localStorage.setItem("sliderStorage", slider_class);

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
				mybutton.style.animation = "fadein 0.5s";
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

