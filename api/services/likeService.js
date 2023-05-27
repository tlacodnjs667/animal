const likeDao = require('../models/likeDao');

const createLike = async (user_serial, spotId) => {
	const check = await likeDao.checkLikeHistory(user_serial, spotId);
	let message;

	if (!check.length) {
		await likeDao.createLike(user_serial, spotId);
		message = 'LIKE_CREATED';
	} else {
		await likeDao.deleteLike(check[0].id);
		message = 'LIKE_DELETED';
	}

	return message;
};

module.exports = { createLike };
