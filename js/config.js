const widgetConfig = {
    features: {
      router: true,
      securityImage: false,
      rememberMe: true,
      autoPush: true,
      smsRecovery: false,
      emailRecovery: true,
      selfServiceUnlock: true,
      multiOptionalFactorEnroll: true,
      deviceFingerprinting: true,
      registration: true,
      showPasswordToggleOnSignInPage: true,
      trackTypingPattern: true,
      showPasswordRequirementsAsHtmlList: true,
    },
    i18n: {
      en: {
        "primaryauth.username.placeholder": "Login/Email",
        "primaryauth.title": "M life Sign In",
        "error.username.required": "Please enter a login or email address",
        signout: "Log Out",
        "oform.errorbanner.title":
          "Oops! We found some errors. Please double check your entries.",
        "oform.errormsg.title": "Please correct the following:",
        "oform.error.unexpected":
          "Oops! Something unexpected happened. Please try again.",
        "model.validation.field.blank": "Cannot be blank",
        "model.validation.field.wrong.type": "Please enter a valid value",
        "model.validation.field.invalid": "Please enter a valid value",
        "model.validation.field.value.not.allowed": "Value not allowed",
        "model.validation.field.string.minLength": "Not long enough",
        "model.validation.field.string.maxLength": "Too long!",
        "model.validation.field.invalid.format.email":
          "Please provide a valid email address",
        "account.unlock.emailSent.desc":
          "Email has been sent to {0} with instructions to unlock your account.",
        "account.unlock.question.title": "Answer Unlock Challenge",
        "account.unlock.unlocked.title": "Success!",
        "account.unlock.unlocked.desc":
          "Sign in using your existing username and password (if you have one).",
        "account.unlock.code.notReceived": "Didn't get a code? Try email.",
        "account.unlock.noFactorsEnabled":
          "Uh oh! Looks like you don't have any unlock options. Please contact us.",
        "registration.complete.confirm.text":
          "Check your email to finish sign up.",
        "registration.form.title": "M life Rewards",
        "registration.default.callbackhook.error":
          "Something went wrong. Please try again later.",
        "registration.error.userName.invalidEmail": "Email address invalid",
        "registration.error.userName.notUniqueWithinOrg":
          "An account with that username already exists.",
        "enroll.password.setup": "Set a password",
        "recovery.sms.hint": "Mobile number must be configured to use SMS.",
        "recovery.mobile.hint": "Mobile number must be configured to use {0}.",
        "verify.choices.description": "Verify with one of the following.",
        "password.forgot.code.notReceived": "Didn't get a code? Try email.",
        "password.forgot.noFactorsEnabled":
          "Uh oh! Looks like you don't have any reset options. Please contact us.",
        "password.reset.title": "Reset your password",
        "password.expired.title": "Your password has expired",
        "password.expiring.subtitle":
          "When your password expires you will be locked out of your account.",
        "password.expiring.subtitle.generic":
          "When your password expires you will be locked out of your account.",
        "password.expiring.subtitle.specific":
          "When your password expires you will be locked out of your {0} account.",
        "password.complexity.no_username.description":
          "Does not include your username",
        "mfa.backToFactors": "Back to choices",
        "enroll.choices.description":
          "To help protect your privacy and keep your account secure you will need to enroll in an additional layer of security.",
        "enroll.choices.description.generic":
          "To help protect your privacy and keep your account secure you will need to enroll in an additional layer of security.",
        "enroll.choices.description.specific":
          "To help protect your privacy and keep your {0} account secure you will need to enroll in an additional layer of security.",
        "enroll.choices.description.gracePeriod.bold":
          "We recommend setting up additional authenticators. It's not required right now, but will be in <b>{0} day(s)</b>.",
        "enroll.choices.description.gracePeriod.oneDay.bold":
          "We recommend setting up additional authenticators. It's not required right now, but will be in <b>less than 1 (one) day</b>.",
        "enroll.choices.optional": "Add additional authenticators or continue.",
        "enroll.choices.list.enrolled": "Enrolled authenticators",
        "enroll.choices.list.optional": "Additional (optional) authenticators",
        "enroll.choices.setup": "Add",
        "enroll.choices.setup.another": "Add another",
        "enroll.choices.submit.finish": "Complete",
        "enroll.choices.submit.configure": "Configure authenticator",
        "enroll.choices.submit.next": "Configure next authenticator",
        "enroll.choices.cardinality.setup": "({0} added)",
        "enroll.choices.cardinality.setup.remaining": "({0} of {1} added)",
        "enroll.choices.setup.skip": "Skip",
        "enroll.securityQuestion.setup": "Add a secret question",
        "security.favorite_sports_player": "Who is your favorite athlete?",
        "email.button.send": "Send my code",
        "email.button.resent": "Please re-send my code",
        "email.enroll.title": "Add email authenticator",
        "email.link.terminal.msg":
          "Return to the screen where you requested the email link to finish sign in.",
        "email.mfa.title": "Verify with email",
        "mfa.emailVerification.checkEmail":
          "Click the link in your email to finish signing in.",
        "mfa.emailVerification.title":
          "Sign in with the link sent to your email.",
        "mfa.emailVerification.otc.finish":
          "Enter the code sent to your email to finish signing in.",
        "enroll.sms.setup": "Sign in with a one-time code via SMS.",
        "enroll.sms.try_again":
          "Uh oh. That number appears to be invalid. If the number is correct, please try again.",
        "recoveryChallenge.sms.title": "Enter the code sent via SMS",
        "unsupported.cookies.desc":
          "Uh oh. Cookes are disabled on your browser. Please enable Cookies and refresh this page.",
        "error.unsupported.localStorage":
          "Unsupported browser.Local Storage must be enabled.",
        "error.expired.session":
          "Your session has expired. Please sign in again.",
        "error.mfa.only.expired.session":
          "Sorry... we are unable to sign you in at this time.",
        "error.auth.lockedOut": "Your account is locked. Please contact us.",
        "error.network.connection":
          "Unable to connect. Please check your network connection.",
        "errors.E0000069":
          "Your account has been locked because of too many sign in attempts.",
        "errors.E0000047":
          "You have exceeded the max number of login attempts. Please try again later.",
        "errors.E0000079":
          "Thatâ€™s not allowed. Please refresh the page to proceed.",
        "errors.E0000009": "Something went wrong on our side.",
        "errors.E0000013": "That client ID is invalid.",
        "errors.E0000016": "This user is already active.",
        "errors.E0000032": "Unlock is not allowed for this account.",
        "errors.E0000034": '"Forgot Password" is not allowed for this account.',
        "errors.E0000035": '"Change Password" is not allowed for this account.',
        "errors.E0000036":
          "Changing the recovery question is not allowed on this account.",
        "errors.E0000038":
          "This is not allowed given this account's current status.",
        "errors.E0000057":
          "Access to this app is denied due to a security policy.",
        "errors.E0000058":
          "Access to this app requires additional security: {0}",
        "errors.E0000077": "{0} is read-only and cannot be modified.",
        "errors.E0000078": "{0} is immutable and cannot be modified.",
        "errors.E0000081":
          "{0} cannot be modified because itâ€™s reserved for special use.",
        "errors.E0000082":
          "Codes can only be used once. Please request a new code and try again.",
        "errors.E0000083": "The code you used is expired.",
        "errors.E0000087":
          "The answer you provided for the recovery question does not match our records.",
        "errors.E0000092": "Access to {0} requires re-authentication.",
        "errors.E0000093": "Count limit exceeded.",
        "errors.E0000105":
          "The account recovery link has expired or already been used.",
        "errors.E0000109":
          "SMS message already sent. Please wait at least 30 seconds before trying again.",
        "errors.E0000110": "This link has either expired or been used already.",
        "errors.E0000111": "{0} is read-only and cannot be modified.",
        "errors.E0000112":
          "This account cannot be updated because it is still being activated. Please try again in a few minutes.",
        "errors.E0000095": "Recovery on an unknown account is not allowed.",
        "errors.E0000114": "An account with this login already exists.",
        "errors.E0000119": "Your account is locked. Please contact us.",
        "errors.E0000124":
          "Account could not be created. To create an account and immediately expire the password, a password must actually be provided.",
        "errors.E0000125":
          "Account could not be created. To create an account and immediately expire the password, the account must be activated.",
      },
    },
    logo: undefined,
    logoText: undefined,
    language: "en",
};
