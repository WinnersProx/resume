const navUrls = document.querySelectorAll('ul.top-navigation li a');

const smoothScroll = (offset) => {
	window.scroll({
		top : offset,
		left : 0,
		behavior : 'smooth'
	});
}

const $$ = (selector, all = false) => {
	return all 
		? document.querySelectorAll(selector) 
		: document.querySelector(selector)
}

navUrls.forEach(nav => {
	nav.addEventListener('click', e => {
		e.preventDefault();
		let target = e.target.getAttribute('data-target');
		const offsetTop = $$(`#${target}`).offsetTop;
		const offsetHeight =  $$(`#${target}`).offsetHeight;
		smoothScroll(offsetTop);
	})
});
// Load overlay with image
$$('.user-avatar img').addEventListener('click', e => {
	const target = e.target;
	const overlay = document.createElement('div');
	const oImg = document.createElement('img');
	const src = target.src.substr(target.src.indexOf('/i'));

	overlay.classList.add('overlay');
	oImg.classList.add('overlay-img');
	oImg.setAttribute('src', `.${src}`);
	overlay.append(oImg);
	$$('body').append(overlay);
});


window.addEventListener('click', e => {
	const isTriggerer = e.target.matches('.user-avatar img');
	if(!e.target.matches('.overlay-img') && $$('.overlay') && !isTriggerer)
		$$('.overlay').remove();
});


