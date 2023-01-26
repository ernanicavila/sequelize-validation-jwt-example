'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, _Sequelize) {
		queryInterface.bulkInsert('Users', [
			{
				id: 1,
				fullName: 'Ernani Ávila',
				email: 'ernani@gmail.com',
				age: '30',
				password:'abc123456',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				fullName: 'Nicholas Eduardo',
				email: 'nicnicnictchau@gmail.com',
				age: '31',
				password:'abc123456',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, _Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 */
		await queryInterface.bulkDelete('Users', null);
	},
};
