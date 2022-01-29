oktaSignIn.on("afterRender", async function (context) {
	console.log("afterRender, " + context.controller)

	_submitButton = document.querySelector('.button.button-primary');
	_footer = document.querySelector('.auth-footer');
	_authContentNode = document.querySelector('.o-form-fieldset-container');
	_formInputs = document.getElementsByTagName('input');

	if (!afterRenderTriggered) {
		await afterRender(context);
	}

	if ((registrationTriggered || activationTriggered) && context.controller === "primary-auth") {
		document.querySelector(".registration-link").click();
		registrationTriggered = false;
	}
	afterRenderTriggered = false;
});
