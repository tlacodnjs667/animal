const { serviceDataSource } = require('./appDataSource');

const getKeywordForPosting = () => {
	return serviceDataSource.query(`
        SELECT * FROM spot_keyword
        WHERE id BETWEEN 1 AND 6;
    `);
};

module.exports = { getKeywordForPosting };
