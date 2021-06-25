const curr_themes = localStorage.getItem("theme");
const body = document.querySelector(".body");
if (curr_themes == "light") {
	body.classList.add('light-theme');
}

window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("hidden");
	body.classList.remove("loading");
});

/* Logo Theme */
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

/* Hightlight Current Page */
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
function loadPage(newUrl) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
			return;

		var newDocument = httpRequest.responseXML;
		if (newDocument === null)
			return;

		var newContent = httpRequest.responseXML.getElementById("main-page");
		if (newContent === null)
			return;

		document.title = newDocument.title;

		var contentElement = document.getElementById("main-page");
		contentElement.replaceWith(newContent);
	}

	httpRequest.responseType = "document";
	httpRequest.open("GET", newUrl);
	httpRequest.send();
};

window.onload = function () {
	// Make links load asynchronously
	document.querySelector("body").addEventListener("click", function (event) {
		if (event.target.tagName !== "A")
			return;

		// History API needed to make sure back and forward still work
		if (history === null)
			return;

		// External links should instead open in a new tab
		var newUrl = event.target.href;
		var domain = window.location.origin;
		if (typeof domain !== "string" || newUrl.search(domain) !== 0) {
			event.preventDefault();
			window.open(newUrl, "_blank");
		} else {
			event.preventDefault();
			loadPage(newUrl);
			history.pushState(null /*stateObj*/, "" /*title*/, newUrl);
		}
	});
}

window.onpopstate = function (event) {
	loadPage(window.location);
}