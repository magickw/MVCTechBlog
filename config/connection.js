const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.MONGODB_URI, {
    dialect: 'mysql',
    protocol: 'mysql',
    logging: true // Set it to false if you don't want to log SQL queries
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;




// const { connect, connection } = require('mongoose');

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/floraDB';

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
