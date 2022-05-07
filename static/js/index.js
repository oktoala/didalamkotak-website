// ? Async Next/Prev
function asyncPage(newUrl, id) {
	let current_page = document.getElementById(".pagination li.active");
	const httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
			return;

		const newDocument = httpRequest.responseXML;
		if (newDocument === null)
			return;

		// const newContent = httpRequest.responseXML.querySelector(".main");
		const newContent = httpRequest.responseXML.querySelectorAll(".list__item");

		if (newContent === null)
			return;

		document.title = newDocument.title;

		const contentElement = document.querySelector(".main");
		// contentElement.replaceWith(newContent);
		newContent.forEach(element => {
			contentElement.appendChild(element);

		});
	}

	httpRequest.responseType = "document";
	httpRequest.open("GET", newUrl);
	httpRequest.send();

	document.querySelector(".pagination li.active").classList.remove("active");
	document.getElementById(id).classList.add("active");
	current_page = document.getElementById(id);;

	// document.querySelector(".container").scrollIntoView(true);
	window.history.replaceState({}, newUrl, newUrl);


	// ? Home Icon Handle
	const iconHome = document.querySelector("#homeIcon");
	const navHome = document.querySelector("#homeIcon a");

	if (iconHome.classList.contains("current")) {
		iconHome.classList.remove("current");
		navHome.classList.remove("current");
	} else if (id == "Page1") {
		iconHome.classList.add("current");
		navHome.classList.add("current");

	}

}

let nextpage = 2
const asyncButton = document.querySelector(".asyncButton");
const buttonAsync = document.getElementById("loadmore");

function asyncButtonFunc(TotalPage) {
	buttonAsync.classList.add("button-loading");
	const httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
			return;

		const newDocument = httpRequest.responseXML;
		if (newDocument === null)
			return;

		const newContent = httpRequest.responseXML.querySelectorAll(".list__item");

		if (newContent === null)
			return;

		document.title = newDocument.title;

		const contentElement = document.querySelector(".main");
		newContent.forEach(element => {
			contentElement.appendChild(element);

		});
		nextpage += 1;
		if (nextpage > TotalPage) {
			asyncButton.classList.add("hidden");
		}
		buttonAsync.classList.remove("button-loading");
	}

	httpRequest.responseType = "document";
	httpRequest.open("GET", `/page/${nextpage}`);
	httpRequest.send();
}