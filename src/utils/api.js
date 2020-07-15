import request from './request'
const http={
    async searchUser(params) {
		const self = this;

		const url = '/userManage/searchUser';
		const [err, res] = await to(request.get(url, params));
		if (err) {
			console.log('ERROR: Location: searchUser, Reason:' + err.errMsg);
			return Object.assign(err, {
				data: {
					status: "406"
				},
				description: err.errMsg
			}, true);
		}
		if (res.status == "-99") {
			// self.cleanStorage();
			// self.goBackToLogin();
			return res;
		}
		return res;
	},

}
export default http;