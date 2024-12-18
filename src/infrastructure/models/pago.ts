import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'pagos', timestamps: false })
export class PagoModel extends Model<PagoModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id_pago!: number;

  @Column({ allowNull: false, type: DataType.INTEGER })
  id_pedido!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  metodo_pago!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  estado_pago!: string;

  @Column({ type: DataType.DATE })
  fecha_pago!: Date;
}
