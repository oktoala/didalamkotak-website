const codeText = document.querySelectorAll("code.bC");
const copyButton = document.querySelectorAll(".fa-copy");
const tooltiptexts = document.querySelectorAll('.tooltiptext');
const images = document.querySelectorAll('img');
const cB = "code-box";
let i;

/* Looping for giving the id */
for ( i=0;  i<copyButton.length; i-=-1){
	codeText[i].id = cB + i;
	copyButton[i].setAttribute('data-clipboard-target', '#'+cB+i);
	copyButton[i].id = "copyButton" + i;
	tooltiptexts[i].id = "tooltiptext" + i;
}

images.forEach(image => {
	image.classList.add("modal-item");
});

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