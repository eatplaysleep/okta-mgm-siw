const createActivationCta = async ({ _inputs, _inputValidation, _labels, _svgs }) => {
	const activateDiv = document.createElement('div');
	activateDiv.className = 'subHeaderDiv';

	const activateText = document.createElement('p');
	activateText.textContent = CONTENT.activation.text;

	const activateCta = document.createElement('a');
	activateCta.textContent = CONTENT.activation.cta;
	activateCta.className = 'mgmLink';

	const activateCtaEventListener = () => {
		for (
			let i = 0;
			i < document.querySelector('#subschemas-password')?.children?.length;
			i++
		) {
			document.querySelector('#subschemas-password').children[
				i
			].children[0].className = 'default-schema';
		}

		isActivation = true;

		document.querySelector('.okta-form-title').textContent = CONTENT.activation.title;
		document.querySelector('.activateDiv').style.display = 'none';

		for (let i = 0; i < 6; i++) {
			_inputs[i].value = '';
			if (_inputs[i]?.ariaLabel?.slice(-1) !== '*') {
				_inputValidation[i] = 4;
			} else {
				_inputValidation[i] = 0;
			}
			_labels[i].classList.remove('labelDivActive');
			_labels[i].children[0].classList.remove('labelActive');
			_labels[i].children[0].classList.remove('inputEmpty');
			_borders[i].classList.remove('borderInputEmpty');
			_borders[i].classList.remove('borderActive');
			_svgs[i].style.display = 'none';
		}

		for (
			let i = document.getElementsByClassName('okta-form-input-error').length;
			i > 0;
			i--
		) {
			document.getElementsByClassName('okta-form-input-error')[i - 1].remove();
		}

		document.getElementsByClassName('o-form-fieldset')[2].style.display = 'none';
		document.getElementsByClassName('o-form-fieldset')[3].style.display = 'none';
		document.getElementsByClassName('o-form-fieldset')[5].style.display = 'block';

		try {
			document.querySelector('.o-form-error-container').children[0].remove();
		} catch { }

		_formInputs[0].focus();
		_formInputs[0].blur();
		_formInputs[0].focus();
	};

	activateCta.addEventListener('click', activateCtaEventListener);

	activateDiv.appendChild(activateText);
	activateDiv.appendChild(activateCta);

	document
		.querySelector('.o-form-CONTENT')
		.insertBefore(
			activateDiv,
			document.querySelector('.o-form-error-container')
		);
};
