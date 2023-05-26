const keywordDao = require('../models/keywordDao');

const getKeywordForPosting = () => {
	return keywordDao.getKeywordForPosting();
};

module.exports = { getKeywordForPosting };
