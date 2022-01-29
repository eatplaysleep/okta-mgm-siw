const afterRender = (context) => {

	// Create 'pseudo' submit button
	const _pseudoButtonContainer = createPseudoButton();

	// Append 'pseudo' submit button to submitButton
	_submitButton && _submitButton.parentNode.appendChild(_pseudoButtonContainer);

	_footer && _footer.children[0].innerText === "Need help signing in?"
		? _authContentNode.insertBefore(_footer, _authContentNode.children[2])
		: null;

	const { _inputs, _inputValidation, _labels, _borders, _svgs, _context } = buildFormElements(context);

	if (_inputs?.length === 0) {
		_submitButton ? _submitButton.style.display = "none" : null;
		_pseudoButtonContainer.style.display = "flex";
		if (
			_context.controller === "account-unlock" ||
			_context.controller === "forgot-password"
		) {
			_pseudoButtonContainer.style.bottom = "47px";
		}
	}

	const linkDiv = document.createElement("div");
	console.log('linkDiv');
	console.log(linkDiv);

	// Create custom checkbox
	const customCheckbox = createCustomCheckbox();

	switch (_context.controller) {
		case "primary-auth":
			const oktaCheckboxDiv = document.querySelector(".custom-checkbox");
			const oktaCheckboxLabel = oktaCheckboxDiv?.children[1];

			oktaCheckboxLabel.removeAttribute('class');

			oktaCheckboxLabel.appendChild(customCheckbox);

			linkDiv.className = "homeLink";
			break;
		case "registration":
		case "registration-complete":
			linkDiv.className = "homeSubLink";
			break;
		default:
			linkDiv.className = "subLink";
			break;
	}

	_footer.appendChild(linkDiv);

	document.querySelector(".link").addEventListener("mouseover", () => {
		switch (_context.controller) {
			case "primary-auth":
				linkDiv.className = "homeLink homeLinkActive";
				break;
			case "registration":
				linkDiv.className = "homeSubLink subLinkActive";
				break;
			default:
				linkDiv.className = "subLink subLinkActive";
				break;
		}
	});

	document.querySelector(".link").addEventListener("mouseout", () => {
		switch (_context.controller) {
			case "primary-auth":
				linkDiv.className = "homeLink";
				break;
			case "registration":
				linkDiv.className = "homeSubLink";
				break;
			default:
				linkDiv.className = "subLink";
				break;
		}
	});

	_inputs[0].blur();
	_inputs[0].focus();

	// Hide the beacon container
	document.getElementsByClassName("beacon-container")[0].style.display = "none";

	if (_context.controller === "registration") {
		renderRegistration({ _inputs, _inputValidation, _labels, _svgs });
	}

	for (let i = 0; i < _inputs.length; i++) {
		if (_inputs[i].value !== "") {
			_inputs[i].blur();
			_inputs[i].focus();
			_inputs[i].blur();
		}
	}
}
