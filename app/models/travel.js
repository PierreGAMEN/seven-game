const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class Travel extends Model {}

Travel.init(
    {
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        destination: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        long_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Price: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'travel',
        modelName: 'Travel',
    }
);

module.exports = Travel;