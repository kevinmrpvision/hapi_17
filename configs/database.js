const Sequelize = require('sequelize');
let sequelize = new Sequelize('swaat', 'root', 'nirajbhatt', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = {Sequelize,sequelize}

