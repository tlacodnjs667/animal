const spotDao = require('../models/spotDao');

const getSpot = (longtitude, latitude) => {
	return spotDao.getSpot(longtitude, latitude);
};

const createSpot = async (
	user_serial,
	spot_keyword_id,
	address,
	longitude,
	latitude,
	content,
	photo
) => {
	return await spotDao.createSpot(
		user_serial,
		spot_keyword_id,
		address,
		longitude,
		latitude,
		content,
		photo
	);
};

const getSpotForMain = (user_serial, longitude, latitude, distance) => {
	return spotDao.getSpotForMain(user_serial, longitude, latitude, distance);
};

const getSpotDetailForPopUp = (userId, spotId) => {
	return spotDao.getSpotDetailForPopUp(userId, spotId);
};

const deleteSpot = async (user_serial, spotId) => {
	const [check] = await spotDao.checkSpotAuthor(spotId);
	// 해당 작성글 없을 시, 에러
	if (!check) {
		const err = new Error('CANNOT_FIND_RESOURCE');
		err.statusCode = 404;
		throw err;
	}
	// 작성자 체크
	if (check.user_serial !== user_serial) {
		const err = new Error('NOT_MATCH_AUTHOR');
		err.statusCode = 402;
		throw err;
	}

	return spotDao.deleteSpot(spotId);
};

module.exports = {
	getSpot,
	createSpot,
	getSpotForMain,
	getSpotDetailForPopUp,
	deleteSpot,
};
