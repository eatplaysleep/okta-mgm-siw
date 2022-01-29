const renderRegistration = async (args) => {
	if (!activation) {
		document.getElementsByClassName('o-form-fieldset')[5].style.display = 'none';
	}

	const backButton = document.querySelector('.link') || document.querySelector('.back-btn');

	backButton.addEventListener('click', () => {
		isActivation = false;
	});

	await createActivationCta(args);
	await createTosCheckbox();
	await createTosText();

	if (activationTriggered) {
		document.querySelector('.mgmLink').click();

		activationTriggered = false;
	}
};
