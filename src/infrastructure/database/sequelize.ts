import { Sequelize } from 'sequelize-typescript';
import { PagoModel } from '../models/pago';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [PagoModel], // Registra aquí todos los modelos
  logging: false,
});

export default sequelize;
