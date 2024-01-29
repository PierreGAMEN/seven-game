const Activity = require('./activity')
const Travel = require('./travel')
const User = require('./user')
const TravelHasActivity = require('./travel_has_activity')
const UserHasTravel = require('./user_has_travel')

Travel.belongsToMany(User, {
    through: UserHasTravel,
    as: 'UserTravel',
    foreignKey: 'travel_id',
    otherKey: 'user_id',
});

User.belongsToMany(Travel, {
    through: UserHasTravel,
    as: 'travelsWish',
    foreignKey: 'user_id',
    otherKey: 'travel_id',
});

Travel.belongsToMany(Activity, {
    through: TravelHasActivity,
    as: 'activities',
    foreignKey: 'travel_id',
    otherKey: 'activity_id',
});

Activity.belongsToMany(Travel, {
    through: TravelHasActivity,
    as: 'travels',
    foreignKey: 'activity_id',
    otherKey: 'travel_id',
});

module.exports = {User, Activity, Travel, TravelHasActivity, UserHasTravel };
