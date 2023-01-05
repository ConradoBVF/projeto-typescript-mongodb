import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';


require('dotenv').config()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose.connect("mongodb://localhost:27017/database")

const mongooserDb = mongoose.connection;
const sequelizeDb = new Sequelize(`mysql://${DB_USER}:${DB_PASS}:${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{
    dialect: 'mysql'
});

export {
    sequelizeDb,
    mongooserDb
}