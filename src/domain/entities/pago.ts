export class Pago {
  id_pago!: number;
  id_pedido!: number;
  metodo_pago!: string;
  estado_pago!: string;
  fecha_pago!: Date;

  constructor(partial: Partial<Pago>) {
    Object.assign(this, partial);
  }
}
