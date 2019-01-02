import axios from 'axios'

const httpHelper = {}
httpHelper.install = function(Vue, options) {
	axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
	Vue.prototype.$http = axios;
}

export default httpHelper;