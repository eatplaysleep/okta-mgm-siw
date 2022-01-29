const renderRegistration = (args) => {
	if (!activation) {
		document.getElementsByClassName('o-form-fieldset')[5].style.display = 'none';
	}

	const backButton = document.querySelector('.link') || document.querySelector('.back-btn');

	backButton.addEventListener('click', () => {
		isActivation = false;
	});

	createActivationCta(args);
	createTosCheckbox();
	createTosText();

	if (activationTriggered) {
		document.querySelector('.mgmLink').click();

		activationTriggered = false;
	}
};
