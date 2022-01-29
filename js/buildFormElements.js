const createFormLabelDiv = (inputPlaceholder) => {
	const _labelDiv = document.createElement('div');
	_labelDiv.className = 'label';

	const _labelItem = document.createElement('label');
	_labelItem.innerText = inputPlaceholder;

	_labelDiv.appendChild(_labelItem);

	return _labelDiv;
};

const buildFormElements = async (_context) => {
	const inputs = [];
	const inputValidation = [];
	const borders = [];
	const labels = [];
	const svgs = [];

	const context = _context;
	const errorSvg = document.createElement("image");

	errorSvg.className = "errorSvg";

	for (let i = 0; i < _formInputs.length; i++) {
		if ((_formInputs[i].type === 'text' || _formInputs[i].type === 'password') && (_formInputs[i].id !== '' || _formInputs[i].className !== '')) {
			switch (_formInputs[i].name) {
				case 'email':
					_formInputs[i].setAttribute('autocomplete', 'email');
					break;
				case 'firstName':
					_formInputs[i].setAttribute('autocomplete', 'given-name');
					break;
				case 'lastName':
					_formInputs[i].setAttribute('autocomplete', 'family-name');
					break;
				case "birthDate":
					 _formInputs[i].setAttribute("pattern", "[0-9]*")
			}

			inputs.push(_formInputs[i]);

			if (context.controller === 'registration' && inputs[i].ariaLabel.slice(-1) !== '*') {
				inputValidation.push(4);
			} else {
				inputValidation.push(0);
			}

			svgs.push(errorSvg.cloneNode(true));

			borders.push(document.createElement('div'));
			borders[i].className = 'borderDiv';

			inputs[i].parentNode.parentNode.parentNode.insertBefore(
				borders[i],
				inputs[i].parentNode.parentNode
			);

			if (document.getElementsByClassName('o-form-label')[i]) {
				labels.push(document.getElementsByClassName('o-form-label')[i]);
			} else {

				labels.push(createFormLabelDiv(inputs[i].placeholder));

				document.getElementsByTagName('input')[i].parentNode.parentNode.parentNode.insertBefore(labels[i], borders[i]);
			}

			const formSubmitEventListener = () => {

				_formSubmitted = true;

				for (let i = 0; i < inputs.length; i++) {
					if (inputs[i].value === '' && inputValidation[i] !== 4) {
						borders[i].classList.remove('borderActive');
						labels[i].children[0].classList.add('inputEmpty');
						labels[i].classList.remove('labelDivActive');
						labels[i].children[0].classList.remove('labelActive');
						borders[i].classList.add('borderInputEmpty');
						svgs[i].style.cssText =
							'display: block; position: absolute; top: 11px; right: 0px;';
						inputs[i].parentNode.appendChild(_svgs[i]);

						if (
							!!document.getElementById('okta-signin-password') &&
							inputs[i].id === 'okta-signin-password'
						) {
							document.querySelector('.eyeicon').style.right = '30px';
						}
						inputs[i].blur();
					}
				}
			};

			document.querySelector('form').addEventListener('submit', formSubmitEventListener);

			const inputInputEventListener = (e) => {
				if (inputs[i]?.name === 'birthDate') {
					const numbers = /^[0-9/]+$/;
					const inputValue = inputs[i]?.value;

					if (inputValue?.length === 11) {
						inputs[i].value = inputValue.slice(0, -1);
					}

					if (inputValue?.match(numbers) || inputValue === '') {

						if (
							(inputValue?.length === 3 ||
								inputValue?.length === 3 ||
								inputValue?.length === 6) &&
							e?.inputType === 'deleteContentBackward'
						) {
							inputs[i].value = inputValue?.slice(0, -1);
						}
						if (e?.inputType !== 'deleteContentBackward') {
							if (inputValue?.match(/^\d{2}$/)) {
								inputs[i].value = inputValue + '/';
							} else if (
								inputValue?.length === 3 &&
								inputValue?.slice(-1) !== '/'
							) {
								inputs[i].value = inputValue?.slice(0, -1) + '/' + e?.data;
							} else if (inputValue?.match(/^\d{2}\/\d{2}$/)) {
								inputs[i].value = inputValue + '/';
							} else if (
								inputValue?.length === 6 &&
								inputValue?.slice(-1) !== '/'
							) {
								inputs[i].value = inputValue?.slice(0, -1) + '/' + e?.data;
							}
						}
					} else {
						inputs[i].value = inputs[i]?.value?.slice(0, -1);
					}
				}
				if (context.controller === 'registration' && e?.target?.ariaLabel.slice(-1) !== '*') {
					inputValidation[i] = 4;
				} else if (e?.target?.value === '' && _formSubmitted) {
					inputValidation[i] = 2;
					borders[i].classList.add('borderInputEmpty');
				} else if (e?.target?.value === '' && !_formSubmitted) {
					inputValidation[i] = 0;
				} else {
					inputValidation[i] = 1;
					borders[i].classList.remove('borderInputEmpty');
				}
				if (!inputValidation?.includes(0) && !inputValidation?.includes(2)) {
					_submitButton.style.display = 'none';
					_pseudoButtonContainer.style.display = 'flex';
				} else {
					_submitButton.style.display = 'flex';
					_pseudoButtonContainer.style.display = 'none';
				}
			};

			const inputFocusEventListener = () => {
				borders[i].classList.add('borderActive');
				labels[i].classList.add('labelDivActive');
				labels[i].children[0].classList.add('labelActive');
				svgs[i].style.cssText =
					'display: none; position: absolute; top: 11px; right: 0px;';
			};

			const inputBlurEventListener = (e) => {
				if (e?.target?.value === '' && (inputValidation[i] === 0 || inputValidation[i] === 2) && _formSubmitted === true) {
					borders[i].classList.remove('borderActive');
					labels[i].children[0].classList.add('inputEmpty');
					labels[i].classList.remove('labelDivActive');
					labels[i].children[0].classList.remove('labelActive');

					svgs[i].style.cssText =
						'display: block; position: absolute; top: 11px; right: 0px;';
					inputs[i].parentNode.appendChild(svgs[i]);

					if (!!document.getElementById('okta-signin-password') && inputs[i].id === 'okta-signin-password') {
						document.querySelector('.eyeicon').style.right = '30px';
					}
				} else if (e?.target?.value === '') {
					borders[i].classList.remove('borderActive');
					labels[i].classList.remove('labelDivActive');
					labels[i].children[0].classList.remove('labelActive');
				}
			};

			inputs[i].addEventListener('input', inputInputEventListener);

			inputs[i].addEventListener('focus', inputFocusEventListener);

			inputs[i].addEventListener('blur', inputBlurEventListener);
		}
	}

	return {
		_inputs: inputs,
		_inputValidation: inputValidation,
		_borders: borders,
		_labels: labels,
		_svgs: svgs,
		_context: context,
	};
};
