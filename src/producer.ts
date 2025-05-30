import { Partitioners } from "kafkajs";

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // match your Docker setup
  retry: {
    initialRetryTime: 500,
    retries: 8,
  },
});

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'my-topic',
    messages: [
      { value: 'Hello KafkaJS from Node.js!' },
    ],
  });

  console.log('Message sent!');
  await producer.disconnect();
};

run().catch(console.error);

