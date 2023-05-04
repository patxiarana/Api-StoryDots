import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const user = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true, 
    },
    email:{
     type: DataTypes.STRING,
     allowNull:false,
     unique: true,
    },

    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  },);