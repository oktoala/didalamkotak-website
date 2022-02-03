const curr_themes = localStorage.getItem("theme");
const body = document.querySelector(".body");
if (curr_themes == "light") {
	body.classList.add("light-theme");
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
	bodies.classList.toggle("light-theme");

	let theme = "dark";
	if (bodies.classList.contains("light-theme")) {
		theme = "light";
	}
	localStorage.setItem("theme", theme);
}

/* Slider Sidebar */
const slider = document.querySelector(".switch > input");
const slider_li = document.querySelector("#slider_sidebar");
const sidebar = document.querySelector(".sidebar");
const primary = document.querySelector(".primary");
const toc_class = document.querySelector("#toc");
const curr_sidebar = localStorage.getItem("sidebarStorage");
const curr_slider = localStorage.getItem("sliderStorage");
const curr_primary = localStorage.getItem("primaryStorage");

/* 
? Statement for check the sidebar that affect to slider on header */
if (sidebar != null) {
	if (curr_sidebar == "hidden") {
		sidebar.classList.add("hidden");
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
	document.getElementById("slider_sidebar").attributes["custom-title"].value =
		"Tidak Bisa";
}

slider.addEventListener("click", () => {
	toc_class.classList.toggle("absolute");
	primary.classList.toggle("full");
	let sidebar_class = "show";
	let slider_class = "checked";
	let primary_class = "unfull";

	toc_class.addEventListener('transtitionrun', () => {
		console.log('hahah');
	});
	
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

function buttonScroll(directions) {
	if (directions == "top") {
		document.querySelector(".container").scrollIntoView(true);
	} else {
		document.querySelector(".container").scrollIntoView(false);
	}
}

/* 
?Asyn Categories */
let current_taxo;
function loadPage(newUrl) {
	const httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE) return;

		const newDocument = httpRequest.responseXML;
		if (newDocument === null) return;

		const newContent = httpRequest.responseXML.querySelector("#main-page");
		if (newContent === null) return;

		document.title = newDocument.title;

		const contentElement = document.querySelector("#main-page");
		contentElement.replaceWith(newContent);
	};

	httpRequest.responseType = "document";
	httpRequest.open("GET", newUrl);
	httpRequest.send();
	if (current_taxo != null) {
		current_taxo.classList.toggle("current");
	}
	document.getElementById(newUrl).classList.toggle("current");
	current_taxo = document.getElementById(newUrl);
}
