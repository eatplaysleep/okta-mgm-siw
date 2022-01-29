const pseudoButtonEventListener = e => {
	let _x =
		e.clientX -
		e.target.offsetLeft -
		document.querySelector('.auth-content').offsetLeft -
		document.querySelector('#body-container').offsetLeft;

	let _y =
		e.clientY -
		e.target.offsetTop -
		document.querySelector('.auth-content').offsetTop -
		document.querySelector('#body-container').offsetTop -
		document.querySelector('._pseudoButtonContainer').offsetTop;

	let rippleElement = document.createElement('span');

	rippleElement.className = 'ripple';
	rippleElement.style.left = _x + 'px';
	rippleElement.style.top = _y + 'px';

	_pseudoButton.appendChild(rippleElement);

	setTimeout(function () {
		rippleElement.remove();
	}, 500);

	_submitButton.click();
};

const createPseudoButton = () => {
	const pseudoButtonContainer = document.createElement('div');
	pseudoButtonContainer.className = '_pseudoButtonContainer';

	const pseudoButton = document.createElement('a');
	pseudoButton.className = '_pseudoButton';

	_submitButton
		? _submitButton.innerHTML !== ''
			? (pseudoButton.innerHTML = _submitButton.innerHTML)
			: (pseudoButton.innerHTML = _submitButton.value)
		: null;

	pseudoButton.addEventListener('click', pseudoButtonEventListener);
	pseudoButtonContainer.appendChild(_pseudoButton);

	return pseudoButtonContainer;
};
