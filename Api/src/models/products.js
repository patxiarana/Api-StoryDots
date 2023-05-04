import {sequelize} from '../database/database.js'
import { DataTypes} from 'sequelize'



export const products = sequelize.define('products',{
   id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true, 
   },
  name:{
    type:DataTypes.STRING
  },
  description:{
   type:DataTypes.STRING
  },
  img_url:{
   type:DataTypes.STRING
  },
   price:{
    type:DataTypes.INTEGER
  }
})