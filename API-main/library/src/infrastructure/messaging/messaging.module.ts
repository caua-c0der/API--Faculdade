import { Module } from '@nestjs/common';
import { RabbitPublisher } from './infrastructure/messaging/rabbitmq.publisher';

@Module({
  providers: [RabbitPublisher],
  exports: [RabbitPublisher],
})
export class MessagingModule {}
