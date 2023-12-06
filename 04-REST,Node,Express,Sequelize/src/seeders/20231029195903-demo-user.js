'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'User 1',
          orders: [1],
          role: 'Role',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Doe',
          orders: [2],
          role: 'waiter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
