const { serviceDataSource } = require('./appDataSource');

const createComment = (user_serial, spotId, comment) => {
	return serviceDataSource.query(`
        INSERT INTO comments (
            user_serial,
            spot_id,
            comment
        ) VALUES (
            '${user_serial}',
            ${spotId},
            '${comment}'
        );
    `);
};

const getComment = (user_serial, spotId, skip, take) => {
	return serviceDataSource.query(`
        SELECT
            spots.id AS spotId,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'commentId', comments.id,
                    'comment', comment,
                    'IS_AUTHOR', IF(comments.user_serial = "${user_serial}", true, false)
                )
            ) AS commentBySpot
        FROM spots
        LEFT JOIN comments ON comments.spot_id = spots.id
        WHERE spots.id = ${spotId}
        GROUP BY spotId
        LIMIT ${take} OFFSET ${skip}
    `);
};

const checkCommentAuthor = (commentId) => {
	return serviceDataSource.query(`
        SELECT
            user_serial
        FROM comments
        WHERE id = ${commentId};
    `);
};

const modifyComment = (commentId, comment) => {
	return serviceDataSource.query(`
        UPDATE comments
        SET comment = '${comment}'
        WHERE id = ${commentId};
    `);
};

const deleteComment = (commentId) => {
	return serviceDataSource.query(`
        DELETE FROM comments
        WHERE id = ${commentId}
    `);
};

module.exports = {
	createComment,
	getComment,
	checkCommentAuthor,
	modifyComment,
	deleteComment,
};
