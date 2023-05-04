import { Sequelize} from "sequelize";

export const sequelize = new Sequelize ('storydots','postgres','software',{
    host:'localhost',
    dialect:'postgres',
})