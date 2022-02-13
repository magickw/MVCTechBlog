const Sequelize = require('sequelize');
require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;
//JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application.
//JawsDB can be attached to a Heroku application via the CLI:
// heroku addons:create jawsdb
// heroku config:get JAWSDB_URL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  });
}

module.exports = sequelize;
