oktaSignIn.on("ready", function (context) {
	console.log("ready, " + context?.controller)

	if (context?.controller && isLoginHidden) {

		// Indicate login should not be hidden just in case it renders again.
		isLoginHidden = false;
		// Show the login container;
		loginContainer.style.opacity = 1;
	}

	if (context?.controller === "registration") {

		afterRender(context);

		afterRenderTriggered = true;
	}
});
