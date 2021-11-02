'use strict';


const Car = (sequelize, DataTypes) => sequelize.define('car', {
    comanyName:{
       type: DataTypes.STRING,
       allowNull: false 
    },

    typeName: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    buildingYear: {
        type: DataTypes.STRING,
        allowNull: false 
    }
});


module.exports = Car;