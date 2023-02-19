import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false, // don't add 'created_at', 'updated_at'
  paranoid: true, // add 'deleted_at'
  tableName: 'topics',
})
export class Topic extends Model<Topic> {
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
  date!: string;

  @Column({
    type: DataType.STRING,
  })
  author!: string;
}
