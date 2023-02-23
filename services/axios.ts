import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: 'https://techcrunch.com/wp-json/wp/v2/',
	timeout: 15000,
	headers: {},
});

// Override timeout default for the library
instance.defaults.timeout = 2500;

// Set the Authorization header for all requests
// instance.defaults.headers.common['Authorization'] =
// 	'Bearer ' + localStorage.getItem('token');

// Add a request interceptor
// instance.interceptors.request.use(
// 	function (config) {
// 		// Do something before request is sent
// 		return config;
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// );

// Add a response interceptor
// instance.interceptors.response.use(
// 	function (response) {
// 		// Do something with response data
// 		return response;
// 	},
// 	function (error) {
// 		// Do something with response error
// 		return Promise.reject(error);
// 	}
// );

export default instance;
