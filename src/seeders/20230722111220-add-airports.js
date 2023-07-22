'use strict';

/** @type {import('sequelize-cli').Migration} */
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

     await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempegowada International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mysur Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mengalaru International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Indra Gandhi International Airport',
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      }
     ] , { });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
