	const burger = document.querySelector('.burger input');
	const nav = document.querySelector('.menu__list');
	const body = document.querySelector('.body');

	burger.addEventListener('click', function(){
		nav.classList.toggle('slide');
		body.classList.toggle('scroll-disabled');
	});