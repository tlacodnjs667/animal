module.exports = class UpdateSerialType1685161121811 {
	async up(queryRunner) {
		await queryRunner.query(`
            ALTER TABLE spot_likes 
            MODIFY user_serial VARCHAR (200)
        `);
	}

	async down(queryRunner) {
		await queryRunner.query(`
            ALTER TABLE spot_likes 
            MODIFY user_serial INT NOT NULL
        `);
	}
};
