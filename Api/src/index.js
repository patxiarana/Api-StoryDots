import app from './app.js'
import  {sequelize}  from './database/database.js'


async function main(){
    const port =  process.env.PORT || 3000
await sequelize.authenticate()
try {
 await sequelize.sync({force: false});
console.log('connectio has been established successfully')
app.listen(port)
console.log('server on port',port)
} catch (error){
console.error('Unable to connect to the database', error);
}
}
main()