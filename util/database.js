const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeJS-shop", "root", "jay13400", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize

// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodeJS-shop',
//   password: 'jay13400'
// })

// module.exports = pool.promise()
