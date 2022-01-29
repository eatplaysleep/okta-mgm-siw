const createTosCheckbox = async () => {
	const cb2Div = document.createElement('div');
	const cb2Input = document.createElement('input');
	const cb2Label = document.createElement('label');

	cb2Input.setAttribute('id', 'tosAccept');
	cb2Input.setAttribute('type', 'checkbox');
	cb2Input.setAttribute('name', 'tosAccept');
	cb2Label.setAttribute('for', 'tosAccept');

	cb2Label.appendChild(createCustomCheckbox());

	cb2Div.appendChild(cb2Input);
	cb2Div.appendChild(cb2Label);
};
