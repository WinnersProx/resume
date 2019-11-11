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
		let offset = $$(`#${target}`).offsetTop;
		smoothScroll(offset);
	})
})
