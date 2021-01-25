var codeText = document.querySelectorAll("code.bC");
var copyButton = document.querySelectorAll(".fa-copy");
var tooltiptexts = document.querySelectorAll('.tooltiptext');
var cB = "code-box";
var i;
for ( i=0;  i<copyButton.length; i-=-1){
  codeText[i].id = cB + i;
  copyButton[i].setAttribute('data-clipboard-target', '#'+cB+i);
  copyButton[i].id = "copyButton" + i;
  tooltiptexts[i].id = "tooltiptext" + i;
}

function snackFunc(ids) {
  var getArray = ids.split('');
  var getNumber = getArray[getArray.length - 1];
  var idToolTip = "tooltiptext" + getNumber;
  var tooltip = document.getElementById(idToolTip);
  tooltip.innerHTML = "Berhasil!";
}
function outFunc(ids) {
  var getArray = ids.split('');
  var getNumber = getArray[getArray.length - 1];
  var idToolTip = "tooltiptext" + getNumber;
  var tooltip = document.getElementById(idToolTip);
  tooltip.innerHTML = "Copy ke clipboard";
}