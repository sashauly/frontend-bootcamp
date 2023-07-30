'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      'MenuItems',
      [
        {
          title: 'Scrumbled Eggs',
          picture: 'eggs.jpg',
          cost: '8',
          callQuantity: '2',
          description: 'best breakfast in the world',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Borsch',
          picture: 'Borsch.jpg',
          cost: '5',
          callQuantity: '3',
          description: 'best lunch in the world',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'vodka',
          picture: 'vodka.jpg',
          cost: '1',
          callQuantity: '1',
          description: 'vodka',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('MenuItems', null, {});
  },
};
