const req = require('../../ApplicationRequest.js');

/**
 * @param {Integer} page Specify a page, leave blank if you dont want to paginate
 */

function getAllUsers(page) {
	const Req = new req(process.env.APPLICATION_PTERO_HOST, process.env.APPLICATION_PTERO_KEYs);
	if(page !== undefined) return Req.getRequest('GetAllUsersPagination',page);
	return Req.getRequest('GetAllUsers', null);
}

module.exports = getAllUsers;