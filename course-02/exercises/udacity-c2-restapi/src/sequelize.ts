import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": process.env.USERNAME,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "host":     process.env.HOST,

  dialect: 'postgres',
  storage: ':memory:',
});

