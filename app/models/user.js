const { Model, DataTypes, Sequelize } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class User extends Model {
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 255],
            },
        },

        lastname: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 255],
            },
        },

        userName: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 255],
            },
        },

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10, 255],
            },
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'user',
        modelName: 'User',
        timestamps: false, // Désactiver les timestamps
    }
);

module.exports = User;