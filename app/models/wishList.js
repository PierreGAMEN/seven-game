const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class whishList extends Model {}

whishList.init(
    {
        travel_id: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'wishlist',
        modelName: 'whishList',
    }
);

module.exports = whishList;