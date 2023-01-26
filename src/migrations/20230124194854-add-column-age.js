'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Users', 'age', {
			type: Sequelize.INTEGER,
			allowNull: false,
			after: 'fullName',
		});
	},

	async down(queryInterface, _Sequelize) {
		await queryInterface.removeColumn('Users', 'age');
	},
};
