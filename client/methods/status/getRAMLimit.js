const req = require('../../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server 
 */
function getRAMLimit(ServerID) {
	const Req = new req(process.env.CLIENT_PTERO_HOST, process.env.CLIENT_PTERO_KEY);
	return Req.getRequest('GetRamLimit', ServerID);
}

module.exports = getRAMLimit;