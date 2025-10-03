import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitPublisher {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL || 'amqp://guest:guest@localhost:5672'],
        queue: 'mail_queue',
        queueOptions: { durable: true },
      },
    });
  }

  async publish(pattern: string, data: any) {
    return this.client.emit(pattern, data).toPromise();
  }
}
