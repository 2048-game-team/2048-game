import 'reflect-metadata';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topic } from '../models/topic';
import { Message } from '../models/message';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres', // 'mysql', 'sqlite', 'mariadb', 'mssql'
  models: [Topic, Message],
};

export const sequelize = new Sequelize(sequelizeOptions);

export const dbConnect = async () => {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    console.log('Connection has been established successfully.');

    const topic = await Topic.create({
      title: 'Первая тема форума',
      content: 'Текст раскрывающий первую тему форума. ',
      created_at: new Date().toISOString(),
      userId: 1234,
    });

    const message = await Message.create({
      content: 'Текст раскрывающий первую тему форума. ',
      created_at: new Date().toISOString(),
      userId: 1234,
      topicId: topic.id,
    });

    const newTopic = await Topic.findOne({ where: { id: topic.id } });
    console.log('id', newTopic);

    await Topic.destroy({ where: { id: topic.id } });
    await Message.destroy({ where: { id: message.id } });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};