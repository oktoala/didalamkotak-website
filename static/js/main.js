const curr_themes = localStorage.getItem("theme");
const body = document.querySelector(".body");
if (curr_themes == "light") {
	body.classList.add('light-theme');
}

/* 
? Listen for loader and hide when it has done
*/
window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("hidden");
	body.classList.remove("loading");
});

/* 
Logo Theme 
? Change the theme when logo icon being pressed
*/
const logo_images = document.querySelector(".logo__imagebox");
const bodies = document.querySelector("body");

function logo_theme() {
	bodies.classList.toggle('light-theme');

	let theme = "dark";
	if (bodies.classList.contains("light-theme")) {
		theme = "light"
	}
	localStorage.setItem("theme", theme);

}

/* Slider Sidebar */
const slider = document.querySelector(".switch > input");
const slider_li = document.querySelector("#slider_sidebar");
const sidebar = document.querySelector(".sidebar");
const primary = document.querySelector(".primary");
const curr_sidebar = localStorage.getItem("sidebarStorage");
const curr_slider = localStorage.getItem("sliderStorage");
const curr_primary = localStorage.getItem("primaryStorage");


/* 
? Statement for check the sidebar that affect to slider on header */
if (sidebar != null) {
	if (curr_sidebar == "hidden") {
		sidebar.classList.add('hidden');
		slider.checked = false;
		primary.classList.add("full");
	} else {
		slider.checked = true;
	}

} else {
	slider_li.classList.add("hidden");
	slider.checked = false;
	slider.disabled = true;
	primary.classList.add("full");
	document.getElementById("slider_sidebar").attributes["custom-title"].value = "Tidak Bisa";
}

slider.addEventListener("click", () => {
	primary.classList.toggle("full");


	let sidebar_class = "show";
	let slider_class = "checked";
	let primary_class = "unfull";

	sidebar.classList.toggle("hidden");
	if (sidebar.classList.contains("hidden")) {
		slider.checked = false;
		sidebar_class = "hidden";
		slider_class = "unchecked";
		primary_class = "full";
	} else {
		slider.checked = true;
	}
	localStorage.setItem("sidebarStorage", sidebar_class);
	localStorage.setItem("sliderStorage", slider_class);
	localStorage.setItem("primaryStorage", primary_class);
	// sidebar.classList.remove("visible");

});


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var navbar = document.querySelector('.header__container');
	var currentScrollPos = window.pageYOffset;
	if (document.querySelector("div[role=search]").classList.contains("active")) {

	} else if (prevScrollpos > currentScrollPos) {
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

function buttonScroll(directions) {
	if (directions == 'top') {
		document.querySelector(".container").scrollIntoView(true);
	} else {
		document.querySelector(".container").scrollIntoView(false);
	}
}

/* Hightlight Current Page 
? Give color to the icon in header*/
const links = document.querySelectorAll("a.icon-button");
const nav_item = document.querySelectorAll(".nav-item");
const curr_link = document.location.href;
for (let i = 0; i < links.length; i++) {
	const link = links[i];
	if (link == curr_link) {
		link.classList.toggle("current");
		nav_item[i].classList.toggle("current");
		break;
	}
}

/* Asyn Categories */
let current_taxo;
function loadPage(newUrl) {
	const httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
			return;

		const newDocument = httpRequest.responseXML;
		if (newDocument === null)
			return;

		const newContent = httpRequest.responseXML.querySelector("#main-page");
		if (newContent === null)
			return;

		document.title = newDocument.title;

		const contentElement = document.querySelector("#main-page");
		contentElement.replaceWith(newContent);
	}

	httpRequest.responseType = "document";
	httpRequest.open("GET", newUrl);
	httpRequest.send();
	if (current_taxo != null){
		current_taxo.classList.toggle("current");
	}
	document.getElementById(newUrl).classList.toggle("current");
	current_taxo = document.getElementById(newUrl);


};



