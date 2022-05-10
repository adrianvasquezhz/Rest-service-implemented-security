const { DataTypes } = require('sequelize');

// atributos en snake case xq esta haciendo el sql directamente con la DDBB.
module.exports = {
   up: async ({ context: queryInterface }) => {
      await queryInterface.createTable('user_notes', {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
               model: 'users',
               key: 'id'
            }
         },
         note_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
               model: 'notes',
               key: 'id'
            }
         }
      })
   },

   down: async ({ context: queryInterface }) => {
      await queryInterface.dropTable('user_notes');
   }
}