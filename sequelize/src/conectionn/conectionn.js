const {Sequelize} = require('sequelize');
process.loadEnvFile();
const {HOST, USER, PASSWORD, DATABASE} = process.env;
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, { 
    host: HOST,
    dialect: 'mysql'
}); 

module.exports = sequelize;