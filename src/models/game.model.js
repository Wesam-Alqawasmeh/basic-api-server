'use strict';


const game = (sequelize, DataTypes) => sequelize.define('game', {
    name:{
       type: DataTypes.STRING,
       allowNull: false 
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false 
    }
});


module.exports = game;