import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {
    this.logger.log('AppController initialized');
  }

  @MessagePattern('log-message')
  async sendMessage(@Payload() message: string, @Ctx() context: RmqContext) {
    try {
      const channel = context.getChannelRef();
      const orginalMessage = context.getMessage();

      const sendMessageData = await this.appService.sendMessageHandler(message);

      channel.ack(orginalMessage);

      return Promise.resolve(sendMessageData);
    } catch (e) {
      console.error(e);

      return Promise.reject({});
    }
  }
}
