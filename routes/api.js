exports.plugin = {
	name:'api',
	register: async function (server, options) {
	  server.route([
	    {method: 'GET', path: '/test',handler: async (request, h) => {
	    	let models = require('@models');
// 	    	user_leave_balance.findOne().then(function (user) {
//     console.log(user);
// });
	    	let users = await models.user_leave_balance.findOne({include: [{
    			model: models.leave_type
  			}]});
	    	console.log(users);
	    	return h.response({status:users});
	    }},
	  ]);


	}
}
