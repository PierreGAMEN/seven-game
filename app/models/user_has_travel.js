const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/client');

class UserHasTravel extends Model {}


UserHasTravel.init(
    {
        travel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'user_has_travel',
        modelName: 'UserHasTravel',
    }
);

module.exports = UserHasTravel;