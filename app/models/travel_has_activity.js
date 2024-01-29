const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class TravelHasActivity extends Model {}

TravelHasActivity.init(
    {
        travel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'travel_has_tag',
        modelName: 'TravelHasActivity',
    }
);

module.exports = TravelHasActivity;