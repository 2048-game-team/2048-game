import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Message } from './message'

@Table({
  timestamps: false, // don't add 'created_at', 'updated_at'
  paranoid: true, // add 'deleted_at'
  tableName: 'topics',
})
export class Topic extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.DATE,
  })
  created_at!: string;

  @Column({
    type: DataType.INTEGER,
  })
  userId!: number;

  @HasMany(() => Message)
  messages!: Message[];
}
