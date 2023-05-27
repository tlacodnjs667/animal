const likeService = require('../services/likeService');

const createLike = async (req, res) => {
	const { user_serial, spotId } = req.body;

	const message = await likeService.createLike(user_serial, spotId);
	res.status(201).json({ message });
};

module.exports = { createLike };
