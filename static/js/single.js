const codeText = document.querySelectorAll("code.bC");
const copyButton = document.querySelectorAll(".fa-copy");
const tooltiptexts = document.querySelectorAll('.tooltiptext');
const cB = "code-box";
let i;
for ( i=0;  i<copyButton.length; i-=-1){
	codeText[i].id = cB + i;
	copyButton[i].setAttribute('data-clipboard-target', '#'+cB+i);
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