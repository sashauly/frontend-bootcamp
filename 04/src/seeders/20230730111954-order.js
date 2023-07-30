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
     * isActive: DataTypes.BOOLEAN,
     * items: DataTypes.INTEGER,
     * }], {});
     */
    return queryInterface.bulkInsert(
      'Orders',
      [
        {
          isActive: true,
          items: [1, 2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isActive: false,
          items: [3],
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
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
