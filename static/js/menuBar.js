	const burger = document.querySelector('.burger input');
	const nav = document.querySelector('.navigation');

	burger.addEventListener('click', function(){
		nav.classList.toggle('show');
	});