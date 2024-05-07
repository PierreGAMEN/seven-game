const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class Wishlist extends Model {}

Wishlist.init(
    {
        travel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'wishlist',
        modelName: 'Wishlist',
    }
);

module.exports = Wishlist;