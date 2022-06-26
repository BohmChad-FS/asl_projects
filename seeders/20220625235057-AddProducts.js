'use strict';

const description = `Look at these wonderful products. It's almost like they're the same thing as every other thing... But different. Cause we made these. Isn't that wonderful? Would you like to buy one? Of course you would. What a silly question I asked. Please, do make your purchase. We aren't a shoe cult or anything...`

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

     return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Shoe of the Gods', 
        slug: 'shoe-of-the-gods', 
        price: 129.87, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Air Runners 757 Albatross', 
        slug: 'air-runners-757-albatross', 
        price: 299.11, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return await queryInterface.bulkDelete('Products', null, {})
  }
};
