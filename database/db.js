
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql12714097', 'sql12714097', 'EgTPLDFI2L', {
  host: 'sql12.freesqldatabase.com',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    connectTimeout: 90000 // زيادة المهلة إلى 60 ثانية
  }
});

/* sequelize.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); */

module.exports = {sequelize};
