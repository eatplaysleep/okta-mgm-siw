oktaSignIn.on("afterRender", function (context) {
	console.log("afterRender, " + context.controller)
	console.log('afterRender _footer');
	console.log(_footer);

	if (!afterRenderTriggered) {
		afterRender(context);
	}

	if ((registrationTriggered || activationTriggered) && context.controller === "primary-auth") {
		document.querySelector(".registration-link").click();
		registrationTriggered = false;
	}
	afterRenderTriggered = false;
});
