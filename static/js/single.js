const codeText = document.querySelectorAll("code.bC");
const copyButton = document.querySelectorAll(".fa-clipboard");
const tooltiptexts = document.querySelectorAll('.tooltiptext');
const cB = "code-box";
let i;

/* Looping for giving the id */
for (i = 0; i < copyButton.length; i -= -1) {
	codeText[i].id = cB + i;
	copyButton[i].setAttribute('data-clipboard-target', '#' + cB + i);
	copyButton[i].id = "copyButton" + i;
	tooltiptexts[i].id = "tooltiptext" + i;
}

function snackFunc(ids) {
	const regex = /\d/g; // ! Regex to get number
	let getNumber = ids.match(regex);
	if (getNumber.length > 1) {
		// Buat ngecek yang angkanya lebih dari satuan ex: 10, 11, 12
		getNumber = getNumber[0] + getNumber[1];
	}
	const idToolTip = "tooltiptext" + getNumber;
	const tooltip = document.getElementById(idToolTip);
	tooltip.innerHTML = "Berhasil!";
}

function outFunc(ids) {
	const regex = /\d/g;
	let getNumber = ids.match(regex);
	if (getNumber.length > 1) {
		getNumber = getNumber[0] + getNumber[1];
	}
	const idToolTip = "tooltiptext" + getNumber;
	const tooltip = document.getElementById(idToolTip);
	tooltip.innerHTML = "Copy ke clipboard";
}

// ! Go to the Top Button
const top_button = document.querySelector(".top-button");
window.onscroll = () => {
	try {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			top_button.classList.add("show");
		} else {
			top_button.classList.remove("show");
		}
	} catch (error) {

	}
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key == 27) {
        alert('Esc key pressed.');
    }
};

top_button.addEventListener("click", () => document.querySelector(".container").scrollIntoView(true));