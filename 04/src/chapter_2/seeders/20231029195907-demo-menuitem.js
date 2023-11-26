'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'MenuItems',
      [
        {
          title: 'Red Apple',
          picture: 'red-apple.png',
          cost: 150,
          callQuantity: 10,
          description: 'A red apple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Green Apple',
          picture: 'green-apple.png',
          cost: 100,
          callQuantity: 8,
          description: 'A green apple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Banana',
          picture: 'banana.png',
          cost: 200,
          callQuantity: 5,
          description: 'A banana',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pineapple',
          picture: 'pineapple.png',
          cost: 300,
          callQuantity: 3,
          description: 'A pineapple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MenuItems', null, {});
  },
};
