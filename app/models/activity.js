const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class Activity extends Model {}

Activity.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        duration: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'activity',
        modelName: 'Activity',
    }
);

module.exports = Activity;