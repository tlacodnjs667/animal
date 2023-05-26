const commentDao = require('../models/commentDao');

const createComment = (user_seral, spotId, comment) => {
	return commentDao.createComment(user_seral, spotId, comment);
};

const getComment = (user_serial, spotId, skip, take) => {
	return commentDao.getComment(user_serial, spotId, skip, take);
};

const modifyComment = async (user_serial, commentId, comment) => {
	const [checkAuthor] = await commentDao.checkCommentAuthor(commentId);

	if (checkAuthor.user_serial !== user_serial) {
		const error = new Error(`UNMATCHED_USER`);
		error.statusCode = 401;
		throw error;
	}

	return commentDao.modifyComment(commentId, comment);
};

const deleteComment = async (user_serial, commentId) => {
	const [checkAuthor] = await commentDao.checkCommentAuthor(commentId);

	if (checkAuthor.user_serial !== user_serial) {
		const error = new Error('NOT_MATCH_AUTHOR');
		error.statusCode = 401;
		throw error;
	}

	return commentDao.deleteComment(commentId);
};

module.exports = { createComment, getComment, modifyComment, deleteComment };
