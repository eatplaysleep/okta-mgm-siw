const getAuthContext = () => {
	if (OktaUtil) {
		const { target = {}, authentication = {} } = OktaUtil.getRequestContext() || {};
		const { clientId } = target || {};
		const { request } = authentication || {};

		const { scope, redirect_uri } = request || {};

		const scopes = scope?.split(" ") || [];

		return {
			redirect_uri,
			scopes,
			clientId
		};
	}
}
