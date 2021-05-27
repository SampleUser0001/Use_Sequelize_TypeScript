import { Sequelize } from 'sequelize'
const config = require('/app/config/config.json')['development'];

const database = 'typescript'
const username = 'docker'
const password = 'secret'
// const options = {
//   "dialect": "mysql",
//   "port": 3307,
//   "host": "db",
//   "define": {
//     "freezeTableName": true,
//     "underscored": true,
//     "timestamps": false
//   }, 
//   "logging": false,
//   "timezone": "+09:00"
// }

// options.logging = function (args){
//   getCurrentLogger().info(args)
// }

const sequelize = new Sequelize(database, username, password, config)

sequelize.query = function(): any {
  return Sequelize.prototype.query
    .apply(this, arguments as any)
    .then((result) => {
      return result
    })
    .catch((err) => {
      throw err
    })
}

export default sequelize
