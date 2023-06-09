module.exports = class CreateCommentTbl1684644921314 {
	async up(queryRunner) {
		await queryRunner.query(`
            CREATE TABLE comments (
                id INT NOT NULL AUTO_INCREMENT,
                user_serial VARCHAR(200),
                spot_id INT NOT NULL,
                comment VARCHAR(300) NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                FOREIGN KEY (spot_id) REFERENCES spots (id) ON DELETE CASCADE
            );
        `);
	}

	async down(queryRunner) {
		await queryRunner.query(`
            DROP TABLE comments;
        `);
	}
};
