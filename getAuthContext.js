const getAuthContext = () => {
	if (OktaUtil) {
		const { target: { clientId }, authentication: { request } } = OktaUtil.getRequestContext();

		const { scope, redirect_uri } = request || {};

		const scopes = scope?.split(" ") || [];

		return {
			redirect_uri,
			scopes,
			clientId
		};
	}
}
