var Base64url = require('base64url');
var Crypto = require('crypto');

function generateSafeId() {
	// TODO add constant-time base64 encoding, just to be extra safe
	return Base64url.encode(Crypto.randomBytes(30));
}

module.exports = generateSafeId;
