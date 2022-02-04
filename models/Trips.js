const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Trip extends Model {}
Trip.init({
    trip_budget: {
        type: DataTypes.DECIMAL
    },
    traveller_amount: {
        type: DataTypes.INTEGER
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: 'Traveller',
        referencesKey: 'id'
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: 'Location',
        referencesKey: 'id'
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: 'trip'
});

module.exports = Trip;