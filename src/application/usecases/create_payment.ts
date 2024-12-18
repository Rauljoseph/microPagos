import { Optional } from 'sequelize';
import { PagoModel } from '../../infrastructure/models/pago';
import { producer } from '../../infrastructure/kafka/kafka_client'

export class CrearPagoUseCase {
  async execute(data: any): Promise<PagoModel> {
    const pago = await PagoModel.create(data);


    // if(pago){
    //   await PagoModel.
    // }

    // if (pago.estado_pago === 'procesado') {
    //   // Emitir evento a Kafka
    //   await producer.send({
    //     topic: 'pedidos-topic',
    //     messages: [
    //       {
    //         key: String(pago.id_pedido),
    //         value: JSON.stringify({
    //           id_pedido: pago.id_pedido,
    //           estado: 'realizado',
    //           fecha: new Date(),
    //         }),
    //       },
    //     ],
    //   });
    //   console.log('Evento enviado a Kafka: Pedido procesado');
    // }

    return pago;
  }
}