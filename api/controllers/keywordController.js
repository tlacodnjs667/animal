const { catchAsync } = require('../utils/globalErrorHandler');
const keywordService = require('../services/keywordServices');

const getKeywordForPosting = catchAsync(async (req, res) => {
	const data = await keywordService.getKeywordForPosting();

	res.status(200).json({ data });
});

module.exports = { getKeywordForPosting };
