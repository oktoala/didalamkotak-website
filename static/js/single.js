const codeText = document.querySelectorAll("code.bC");
const copyButton = document.querySelectorAll(".fa-copy");
const tooltiptexts = document.querySelectorAll('.tooltiptext');
const overlay = document.querySelectorAll(".overlay");
const elementFull = document.documentElement;
const overlay_img_btn = document.querySelectorAll(".overlay-img-btn");
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


// ! Slide Image Lightbox
function imgClick(id) {
	const imgClicked = document.getElementById(id);
	imgClicked.classList.toggle("show");

}

function goToSlide(goTo, id) {
	let index = 0;
	let overlayNextPrev;
	const curr_id = document.getElementById(id);
	for (let i = 0; i < overlay.length; i++) {
		if (overlay[i] == curr_id) {
			index = i;
		}
	}
	if (index + goTo == overlay.length) {
		// * Check if its last overlay
		overlayNextPrev = overlay[index];
	}else if (index+goTo == -1){
		// * Check if its first overlay
		overlayNextPrev = overlay[0];
	} else{
		overlayNextPrev = overlay[index + goTo];
	}

	const firstOverlay = overlay[0];
	const lastOverlay = overlay[overlay.length - 1];

	// * Remove current overlay
	curr_id.classList.toggle("show");

	if (overlay.length == 1) {
		// curr_id.classList.toggle("show");
	}else if (overlayNextPrev == firstOverlay && index + goTo == -1) {
		// ? Check Previous on first overlay
		// overlay_img_btn[1].classList.add("hidden");
		lastOverlay.classList.toggle("show");
	} else if (overlayNextPrev == lastOverlay && index == overlay.length-1) {
		// ? Check Next on last overlay
		firstOverlay.classList.toggle("show");
	} else {
		overlayNextPrev.classList.toggle("show");
	}
}

