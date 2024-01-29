const { Sequelize } = require('sequelize');

function getConnexion() {
    // * Cette fonction retourne une instance de sequelize prête à fournir aux modèles
    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            define: {
                // * nécessaire pour obtenir les clés étrangères avec underscore
                underscored: true,
            },
            host: 'localhost',
            // ! L'option dialect est obligatoire
            dialect: 'postgres',
            // logging: false,
        }
    );
}

module.exports = getConnexion;