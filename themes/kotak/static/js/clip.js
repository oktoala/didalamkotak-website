var codeText = document.querySelectorAll("code.bC");
var copyButton = document.querySelectorAll(".fa-copy");
var tooltiptexts = document.querySelectorAll('.tooltiptext');
var cB = "code-box";
var i;
console.log(codeText.length)
for ( i=0;  i<copyButton.length; i-=-1){
  codeText[i].id = cB + i;
  copyButton[i].setAttribute('data-clipboard-target', '#'+cB+i);
  copyButton[i].id = "copyButton" + i;
  tooltiptexts[i].id = "tooltiptext" + i;
}

function snackFunc(ids) {
  console.log(ids);
  var tooltip = document.getElementById(ids);
  tooltip.textContent = "Copied"
}
function outFunc(ids) {
  var tooltip = document.getElementById(ids);
  tooltip.textContent = "Copy ke Clipboard"
}