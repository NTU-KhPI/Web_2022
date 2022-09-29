var activeShape;

document.addEventListener('click', function (e) {
	if (e.target.getAttribute('data-action') == 'sc') {
		if (activeShape) {
			activeShape.classList.remove('active');
		}

		e.target.classList.add('active');
		activeShape = e.target;
	}
});