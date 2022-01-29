// OktaUtil
// constants
// getAuthContext()

const config = OktaUtil.getSignInWidgetConfig();
const loginContainer = document?.getElementById("okta-login-container");
const { clientId, scopes, redirect_uri } = getAuthContext();
const isRegistration = scopes?.includes(REGISTRATION_SCOPE) || false;

let isLoginHidden = true;
let isActivation = scopes?.includes(ACTIVATION_SCOPE) || false;
let tosInput = false;
let afterRenderTriggered = false;
let registrationTriggered = isRegistration;
let activationTriggered = isActivation;
let _formSubmitted = false;

config.relayState = redirect_uri;

config.features = {
	...config.features,
	...widgetConfig.features
};

config.i18n = {
	...config.i18n,
	...widgetConfig.i18n
};

config.registration = {
	...config.registration,
	preSubmit: function (postData, onSuccess, _) {
		if (postData) {
			if (activation) {
				postData.enrollAction = "ACTIVATE";
			} else if (registration) {
				postData.enrollAction = "ENROLL";
			}
			if (tosInput) {
				postData.tosAcceptDate = new Date().toISOString();
				postData.tosInput = 1;
				postData.tosAccepted = true;
			}
			postData.source = clientId;
			console.log(postData);
			if (redirect_uri) {
				postData.locale = redirect_uri;
			}
		}
		onSuccess(postData);
	},
};

const oktaSignIn = new OktaSignIn(config);

oktaSignIn.renderEl(
	{
		el: "#okta-login-container",
	},
	OktaUtil.completeLogin,
	function (error) {
		console.log(error.message, error, "this is the error");
	}
);

// Widget Globals //

const _submitButton = document.querySelector('.button.button-primary');
const _footer = document.querySelector('.auth-footer');
const _authContentNode = document.querySelector('.o-form-fieldset-container');
const _formInputs = document.getElementsByTagName('input');

// functions
// on.ready
// on.afterRender
