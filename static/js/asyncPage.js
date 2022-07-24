// Asynchronous Page
function loadpage(newUrl) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== XMLHttpRequest.DONE)
			return;

		// TODO: UI for this error
		var newDocument = httpRequest.responseXML;
		if (newDocument === null)
			return;

			// TODO: UI for this error
			var newContent = httpRequest.responseXML.querySelector("#main-base");
			if (newContent === null)
			return;
			
			document.title = newDocument.title;
			
			var contentElement = document.querySelector("#main-base");
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
			loadpage(newUrl);
			history.pushState(null /*stateObj*/, "" /*title*/, newUrl);
		}
	});
}

window.onpopstate = function (event) {
	loadpage(window.location);
}

function parseScript(_source) {
    var source = _source;
    var scripts = new Array();

    // Strip out tags
    while(source.indexOf("<script") > -1 || source.indexOf("</script") > -1) {
        var s = source.indexOf("<script");
        var s_e = source.indexOf(">", s);
        var e = source.indexOf("</script", s);
        var e_e = source.indexOf(">", e);

        // Add to scripts array
        scripts.push(source.substring(s_e+1, e));
        // Strip from source
        source = source.substring(0, s) + source.substring(e_e+1);
    }

    // Loop through every script collected and eval it
    for(var i=0; i<scripts.length; i++) {
        try {
            eval(scripts[i]);
        }
        catch(ex) {
            // do what you want here when a script fails
        }
    }

    // Return the cleaned source
    return source;
}
