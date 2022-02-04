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
        allowNull: false,
        unique: false,
        references: {
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
        }
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: 'trip'
});

module.exports = Trip;