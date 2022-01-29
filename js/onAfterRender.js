oktaSignIn.on("afterRender", function (context) {
	console.log("afterRender, " + context.controller)

	if (!_submitButton) {
		_submitButton = document.querySelector('.button.button-primary');
	}
	if (!_footer) {
		_footer = document.querySelector('.auth-footer');
	}
	if (!_authContentNode) {
		_authContentNode = document.querySelector('.o-form-fieldset-container');
	}
	if (!_formInputs) {
		_formInputs = document.getElementsByTagName('input');
	}

	if (!afterRenderTriggered) {
		afterRender(context);
	}

	if ((registrationTriggered || activationTriggered) && context.controller === "primary-auth") {
		document.querySelector(".registration-link").click();
		registrationTriggered = false;
	}
	afterRenderTriggered = false;
});
