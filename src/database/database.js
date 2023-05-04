import { Sequelize} from "sequelize";

const db_name = process.env.DB_name || 'storydots'
const db_password = process.env.DB_PASSWORD || 'software'
const db_user = process.env.DB_USER || 'postgres'
const db_host = process.env.DB_HOST || 'localhost'
     /*   let sequelize = {}
       (process.env.NODE_ENV === "production") */
   export const sequelize = new Sequelize(process.env.DATABASE_URL)
      /* } else {
        sequelize = new Sequelize (db_name,db_user,db_password,{
    host:db_host,
    dialect:'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      } */

//})
      // }


       export default sequelize ;