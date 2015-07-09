
module.exports = {

	'jwt_secret': 'GIS_TAIWAN',
	'STATUS_CODE_INTERNAL_ERROR': 500,
	'STATUS_CODE_TOKEN_EXPIRE': 401,
	'STATUS_CODE_UNAUTHORIZED': 403

	// Card reader access token (jwt) will expire after it's signed for 10 seconds
	'CARD_READER_TOKEN_EXPIRE_TIME': 10, 

	// Admin user access token (jwt) will expire after it's logined for 20 minutes ( 1200 seconds )
	'ADMIN_LOGIN_TOKEN_EXPIRE_TIME': 1200

};
