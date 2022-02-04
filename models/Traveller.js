const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Traveller extends Model {} 
Traveller.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
            isEmail: true
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTablenName: true,
        underscored: true,
        modelName: 'traveller'
    }
);

module.exports = Traveller;