import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Topic } from './topic'

@Table({
  timestamps: false, // don't add 'created_at', 'updated_at'
  paranoid: true, // add 'deleted_at'
  tableName: 'messages',
})
export class Message extends Model {
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

  @ForeignKey(() => Topic)
  @Column({
    type: DataType.INTEGER,
  })
  topicId!: number;

  @BelongsTo(() => Topic)
  topic!: Topic;
}
