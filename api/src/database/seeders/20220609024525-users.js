'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', 
    [
      {
        name: 'John Doe',
        email: 'teste@teste.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: '2022-06-08 22:50:09',
        updated_at: '2022-06-08 22:50:09'
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};