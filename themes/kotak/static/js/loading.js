window.addEventListener("load", function(){
  let loader = document.querySelector(".loader");
  loader.className += " hidden";
  let body = document.querySelector(".body");
  body.classList.remove("loading");
})
