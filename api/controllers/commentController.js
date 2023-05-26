const { catchAsync } = require('../utils/globalErrorHandler');
const commentService = require('../services/commentService');

const createComment = catchAsync(async (req, res) => {
	const { comment, user_serial } = req.body;
	const { spotId } = req.query;
	if (!comment || !spotId || !user_serial) {
		const err = new Error('INVALID_REQUEST');
		err.statusCode = 404;
		throw err;
	}

	await commentService.createComment(user_serial, spotId, comment);
	res.status(201).json({ message: 'COMMENT_CREATED' });
});

const getComment = catchAsync(async (req, res) => {
	const { spotId, skip, take } = req.query;
	const { user_serial } = req.body;

	if (!spotId) {
		const error = new Error('INVALID_REQUEST');
		error.statusCode = 400;
		throw error;
	}

	const [data] = await commentService.getComment(
		user_serial,
		spotId,
		skip,
		take
	);

	res.status(200).json({ data });
});

const modifyComment = catchAsync(async (req, res) => {
	const { comment, user_serial } = req.body;
	const { commentId } = req.query;

	await commentService.modifyComment(user_serial, commentId, comment);

	res.status(200).json({ message: 'COMMENT_MODIFIED' });
});

const deleteComment = catchAsync(async (req, res) => {
	const { commentId } = req.query;
	const { user_serial } = req.body;
	await commentService.deleteComment(user_serial, commentId);
	res.status(204).json();
});

module.exports = { createComment, getComment, modifyComment, deleteComment };
