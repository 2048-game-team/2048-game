import { DataType, Model, Table, Column } from 'sequelize-typescript';
import { sequelize } from '../db';
import type { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  firstName: string;
  lastName: string;
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  firstName: {
    type: DataType.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataType.STRING,
  },
  // id: string;
  // title: string;
  // content: string;
  // date: string;
  // author: Author;
};
