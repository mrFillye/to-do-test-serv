import { Sequelize } from "sequelize";

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

export const db = new Sequelize(`postgres://${user}:${pass}@${uri}/${dbName}`);
