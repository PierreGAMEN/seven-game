const Travel = require('./travel')
const Wishlist = require('./wishlist')


Wishlist.belongsTo(Travel, { foreignKey: 'travel_id', as: 'travels', });

module.exports = {Travel, Wishlist};
