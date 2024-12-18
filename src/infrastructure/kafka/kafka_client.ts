import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'procesamiento-pagos',
  brokers: ['localhost:9092'], // Cambia esto según tu configuración de Kafka
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'procesamiento-pagos-group' });

export const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log('Kafka connected');
};
