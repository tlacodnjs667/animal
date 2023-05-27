const { serviceDataSource } = require('./appDataSource');

const checkLikeHistory = (user_serial, spotId) => {
	return serviceDataSource.query(`
        SELECT
            id 
        FROM spot_likes 
        WHERE user_serial = "${user_serial}" AND spot_id = ${spotId}    
    `);
};

const createLike = (user_serial, spotId) => {
	return serviceDataSource.query(`
        INSERT INTO spot_likes (
            user_serial,
            spot_id
        ) VALUES (
            ${user_serial}
            ${spotId}
        );
    `);
};

const deleteLike = (user_serial, spotId) => {
	return serviceDataSource.query(`
    
    `);
};

module.exports = { checkLikeHistory, createLike, deleteLike };
