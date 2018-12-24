exports.plugin = {
	name:'admin-api',
	register: async function (server, options) {
	  server.route([
	    {method: 'GET', path: '/test',handler: (request, h) => {
	    	return 'Hello, Admin Test!';
	    }},
	  ]);


	}
}
