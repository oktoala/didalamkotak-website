const codeText = document.querySelectorAll("code.bC");
const copyButton = document.querySelectorAll(".fa-copy");
const tooltiptexts = document.querySelectorAll('.tooltiptext');
const overlay = document.querySelectorAll(".overlay");
const elementFull = document.documentElement;
const iconFullScreen = document.querySelector(".overlay-header > .fa-expand");
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
	const getArray = ids.split('');
	const getNumber = getArray[getArray.length - 1];
	const idToolTip = "tooltiptext" + getNumber;
	const tooltip = document.getElementById(idToolTip);
	tooltip.innerHTML = "Berhasil!";
}

function outFunc(ids) {
	const getArray = ids.split('');
	const getNumber = getArray[getArray.length - 1];
	const idToolTip = "tooltiptext" + getNumber;
	const tooltip = document.getElementById(idToolTip);
	tooltip.innerHTML = "Copy ke clipboard";
}

function imgClick(id) {
	const imgClicked = document.getElementById(id);
	imgClicked.classList.toggle("show");
	closeFullScreen();
}

function goToSlide(go, id) {
	let index = 0;
	const curr_id = document.getElementById(id);
	for (let i = 0; i < overlay.length; i++) {
		if (overlay[i] == curr_id) {
			index = i;
		}
	}

	curr_id.classList.toggle("show");
	index += go;
	overlay[index].classList.toggle("show");
}

function fullScreen() {
	if (elementFull.requestFullscreen) {
		iconFullScreen.classList.add("full");
		elementFull.requestFullscreen();
	}
}

function closeFullScreen() {
	if (document.exitFullscreen) {
		iconFullScreen.classList.remove("full");
		document.exitFullscreen();
	}
}