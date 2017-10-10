export {
	
	urlPattern: '/myService',

	type: 'post',

	run: (req, res) => {
		return { response: 'myService works!' };
	}

};
