'use strict';

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return await queryInterface.bulkInsert('Images', [
      { id: 1, variantId: 1, extension: '.png', createdAt, updatedAt },
      { id: 2, variantId: 2, extension: '.png', createdAt, updatedAt },
      { id: 3, variantId: 3, extension: '.png', createdAt, updatedAt },
      { id: 4, variantId: 4, extension: '.png', createdAt, updatedAt }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return await queryInterface.bulkDelete('Images', null, {})
  }
};
