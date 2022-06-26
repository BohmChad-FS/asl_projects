'use strict';

const description = "These shoes will change your life... For the better or worse... No one truly knows. They hold an immesurable power over the fates of all who walk in them. Except for the Albatross shoes... They just look fancy. And cool. We aren't a cult! Why would you think such a foolish thing?! Just buy the shoes... You know you want to..."

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

     return await queryInterface.bulkInsert('Variants', [
      { id: 1, title: 'Fake', slug: 'fake', description, price: 129.87, productId: 1, inventory: 8, createdAt, updatedAt  },
      { id: 2, title: 'Smudged', slug: 'smudged', description, price: 129.87, productId: 1, inventory: 2, createdAt, updatedAt  },
      { id: 3, title: 'Spirit', slug: 'spirit', description, price: 299.11, productId: 2, inventory: 1000, createdAt, updatedAt  },
      { id: 4, title: 'Watermelon', slug: 'watermelon', description, price: 299.11, productId: 2, inventory: 88, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return await queryInterface.bulkDelete('Variants', null, {})
  }
};
