'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', 
      [
      {
        login: 'admin',
        email: "admin@admin",
        password:await bcrypt.hash('admin', 10),
        role: "admin",
      },
      {
        login: '111',
        email: "111@111",
        password:await bcrypt.hash('111', 10),
        role: "user",
      },      
      {
        login: '222',
        email: "222@222",
        password:await bcrypt.hash('222', 10),
        role: "user",
      },
      ],
    {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
