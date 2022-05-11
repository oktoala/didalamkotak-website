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
